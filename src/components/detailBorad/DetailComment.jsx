import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  commenEdit,
  commentLike,
  commentPick,
  recommentGet,
} from "../../api/detailApi";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { UserDial } from "../../elements/MenuDial";
import styled from "styled-components";
import DetailReComment from "../detailBorad/DetailReComment";
import DetailReCommentInput from "./DetailRecommentInput";
import { ChooseNaviAlert, OkayAlert } from "../../elements/Alert";
import { useRecoilValue } from "recoil";
import { userKeyAtom } from "../../state/atom";
import { FlexCenter } from "../../shared/css";

function DetailComment({ comment, resBoard }) {
  const queryClient = useQueryClient();
  const commentId = comment.commentId;
  const userKey = useRecoilValue(userKeyAtom);

  //대댓글 가져오기
  const { data } = useQuery(
    ["getRecomment", commentId],
    () => recommentGet(commentId),
    {
      refetchOnWindowFocus: false,
    }
  );

  const reqRecomment = () => {
    setRecomment((x) => !x);
  };

  const reData = data?.data.data;

  /* 댓글 수정 */
  const [commentEdit, setCommentEdit] = useState(true);
  /*답글달기*/
  const [recomment, setRecomment] = useState(false);

  //댓글 수정 하기
  const { register, handleSubmit } = useForm();
  const onEdit = (comment) => {
    if (comment.comment.trim() === "") {
      return OkayAlert("댓글을 입력해주세요.");
    } else {
      editComment.mutate({ commentId: commentId, comment });
      setCommentEdit(true);
    }
  };

  const editComment = useMutation(commenEdit, {
    onSuccess: () => {
      queryClient.invalidateQueries("getDetail");
    },
  });

  //댓글 채택하기
  const pickIt = useMutation(commentPick, {
    onSuccess: () => {
      queryClient.invalidateQueries("getDetail");
    },
  });

  const onPick = (e) => {
    pickIt.mutate(e);
  };

  const pickAlert = (id) => {
    ChooseNaviAlert(
      "채택은 한 번만 가능합니다.\n채택하시겠습니까?",
      "채택",
      onPick,
      false,
      id
    );
  };

  const [likeCount, setLikeCount] = useState(comment.likeCount);

  //댓글 좋아요
  const { mutate } = useMutation(commentLike, {
    /* onMutate : mutation function이 시작되기 전에 작동 */
    onMutate: async () => {
      if (!userKey) {
        OkayAlert("로그인 후 이용해주세요.");
      } else {
        if (userKey === comment.userKey) {
          OkayAlert("본인 댓글엔 좋아요를 할 수 없습니다.");
        } else {
          /* 서버에 전송한 요청이 잘못되었을 경우를 대비해서 이전 데이터를 저장 */
          const prevLike = queryClient.getQueryData("getDetail");

          /* 혹시 발생할지도 모르는 refetch를 취소하여 Optimistic Update의 데이터를 덮어쓰지 않도록 예방 */
          await queryClient.cancelQueries("getDetail");

          /* 서버의 응답이 오기 전에 UI를 미리 업데이트 */
          queryClient.setQueryData("getDetail", () => {
            comment.isLike
              ? setLikeCount((prev) => prev - 1)
              : setLikeCount((prev) => prev + 1);
            return (comment.isLike = !comment.isLike);
          });

          /* 에러가 발생했을 경우 복원할 수 있도록 이전 데이터를 반환 */
          return { prevLike };
        }
      }
    },
    onError: (err, variables, context) => {
      queryClient.setQueryData("getDetail", context.prevLike);
    },
    onSettled: () => {
      /* 관련 쿼리 refetch */
      queryClient.invalidateQueries("getDetail");
    },
  });

  // 유저키 비교
  const [user, setUser] = useState(false);
  useEffect(() => {
    if (userKey === comment.userKey) {
      setUser(true);
    }
  }, []);

  return (
    <>
      {commentEdit ? (
        <>
          <StcommentBox>
            <StcommentUser>
              <img src={comment.userImg} alt="프로필사진" />
              <div className="username">{comment.nickname}</div>
              <StMenu>
                {userKey !== 0 && (
                  <UserDial
                    user={user}
                    id={comment.commentId}
                    userId={comment?.userKey}
                    setAdEdit={setCommentEdit}
                    resBoard={resBoard}
                    reGet="getDetail"
                    target="comment"
                    nickname={comment.nickname}
                  />
                )}
              </StMenu>
            </StcommentUser>
            <StCommentText>{comment.comment}</StCommentText>
            <StCommentDiv>
              <div className="date">{comment.updatedAt}</div>
              <div className="set">
                <button onClick={() => reqRecomment()}>
                  {reData?.length === 0
                    ? "답글 달기"
                    : `답글 보기(${reData?.length})`}
                </button>
                <div className="heart">
                  <span>{likeCount}</span>
                  {comment.isLike ? (
                    <FavoriteIcon
                      fontSize="small"
                      onClick={() => mutate(comment.commentId)}
                    />
                  ) : (
                    <FavoriteBorderIcon
                      fontSize="small"
                      onClick={() => mutate(comment.commentId)}
                    />
                  )}
                </div>
              </div>
            </StCommentDiv>
          </StcommentBox>
          {userKey === resBoard.userKey &&
            resBoard.selectComment === undefined && (
              <StPick StPick onClick={() => pickAlert(comment.commentId)}>
                채택하기
              </StPick>
            )}

          {recomment && (
            <>
              <DetailReCommentInput
                setRecomment={setRecomment}
                commentId={comment.commentId}
              />
              {reData?.map((re) => {
                return (
                  <DetailReComment
                    key={re.replyId}
                    re={re}
                    resBoard={resBoard}
                  />
                );
              })}
            </>
          )}
        </>
      ) : (
        <StcommentEditBox className="edit">
          <StcommentUser>
            <img src={comment.userImg} alt="프로필사진" className="userimg" />
            <div className="username">{comment.nickname}</div>
          </StcommentUser>
          <StCommentEdit onSubmit={handleSubmit(onEdit)}>
            <textarea
              rows={3}
              defaultValue={comment.comment}
              {...register("comment")}
            />
            <div>
              <button
                type="button"
                onClick={() => {
                  setCommentEdit(true);
                }}
              >
                취소
              </button>
              <button>완료</button>
            </div>
          </StCommentEdit>
        </StcommentEditBox>
      )}
    </>
  );
}

export default DetailComment;

/*댓글 박스 */
const StcommentBox = styled.div`
  background-color: ${(props) => props.theme.Colors.blueGray1};
  padding: ${(props) => props.theme.paddings.base};
  margin-top: ${(props) => props.theme.margins.sm};

  /*줄바꿈*/
  white-space: pre-wrap;

  //답글버튼
  button {
    font-weight: ${(props) => props.theme.fontWeights.xl};
    color: ${(props) => props.theme.Colors.blueGreen3};
  }
`;

const StcommentEditBox = styled.div`
  background-color: ${(props) => props.theme.Colors.blueGray1};
  padding: ${(props) => props.theme.paddings.base};
  padding-bottom: 0.2rem;
  margin-bottom: ${(props) => props.theme.margins.xxsm};
  button {
    font-weight: ${(props) => props.theme.fontWeights.xl};
    color: ${(props) => props.theme.Colors.blueGreen3};
  }
`;

/*채택 선택 버튼 */
const StPick = styled.div`
  color: #ffffff;
  text-align: center;
  padding: ${(props) => props.theme.paddings.sm};
  background-color: ${(props) => props.theme.Colors.blueGreen2};

  font-weight: ${(props) => props.theme.fontWeights.base};
`;

/*메뉴 위치조정 */
const StMenu = styled.div`
  position: absolute;
  right: 2rem;
  display: flex;
`;

/*댓글 유저 정보 */
const StcommentUser = styled.div`
  display: flex;
  align-items: center;

  .username {
    margin-left: ${(props) => props.theme.margins.sm};
    font-size: ${(props) => props.theme.fontSizes.sm};
    font-weight: ${(props) => props.theme.fontWeights.base};
  }
  /*유저 프로필 이미지*/
  img {
    max-width: 1.5rem;
    max-height: 1.5rem;
  }
`;

/*댓글 작성란*/
const StCommentText = styled.div`
  margin: ${(props) => props.theme.margins.xxsm} 0;
  font-size: ${(props) => props.theme.fontSizes.sm};
`;

const StCommentDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .date {
    font-size: ${(props) => props.theme.fontSizes.xsm};
    color: ${(props) => props.theme.Colors.gray3};
    ${FlexCenter};
  }

  .heart {
    display: flex;
    align-items: center;
    color: #de3730;
    span {
      margin-right: 0.3rem;
      margin-bottom: 0.15rem;
      font-weight: ${(props) => props.theme.fontWeights.base};
    }
  }

  .set {
    display: flex;
    gap: 1.5rem;
  }
`;

/*수정 댓글란 */

const StCommentEdit = styled.form`
  color: #002020;
  margin: ${(props) => props.theme.margins.xxsm} 0;
  textarea {
    width: 100%;
    font-size: ${(props) => props.theme.fontSizes.sm};
  }

  button {
    margin-left: 0.5rem;
  }
  div {
    display: flex;
    justify-content: flex-end;
  }
`;
