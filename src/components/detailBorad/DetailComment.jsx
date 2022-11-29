import { useMutation, useQueryClient } from "react-query";
import { commenEdit, commentLike } from "../../api/detailApi";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { MenuDial5 } from "../../elements/MenuDial";
import styled from "styled-components";

function DetailComment({ comment, decodeKey, resBoard }) {
  const queryClient = useQueryClient();

  /* 댓글 수정 */
  const [commentEdit, setCommentEdit] = useState(true);

  //댓글 수정 하기
  const { register, handleSubmit } = useForm();
  const commentId = comment.commentId;
  const onEdit = (comment) => {
    editComment.mutate({ commentId: commentId, comment });
    setCommentEdit(true);
    // setIsEdit(true);
  };

  const editComment = useMutation(commenEdit, {
    onSuccess: () => {
      queryClient.invalidateQueries("getDetail");
    },
  });

  const [commentCount, setCommentCount] = useState(comment.likeCount);

  //댓글 좋아요
  const { mutate } = useMutation(commentLike, {
    /* onMutate : mutation function이 시작되기 전에 작동 */
    onMutate: async () => {
      /* 서버에 전송한 요청이 잘못되었을 경우를 대비해서 이전 데이터를 저장 */
      const prevLike = queryClient.getQueryData("getDetail");

      /* 혹시 발생할지도 모르는 refetch를 취소하여 Optimistic Update의 데이터를 덮어쓰지 않도록 예방 */
      await queryClient.cancelQueries("getDetail");

      /* 서버의 응답이 오기 전에 UI를 미리 업데이트 */
      queryClient.setQueryData("getDetail", () => {
        comment.isLike
          ? setCommentCount(comment.likeCount - 1)
          : setCommentCount(comment.likeCount + 1);
        return (comment.isLike = !comment.isLike);
      });

      /* 에러가 발생했을 경우 복원할 수 있도록 이전 데이터를 반환 */
      return { prevLike };
    },
    onError: (err, variables, context) => {
      queryClient.setQueryData("getDetail", context.prevLike);
    },
    onSettled: () => {
      /* 관련 쿼리 refetch */
      queryClient.invalidateQueries("getDetail");
    },
  });

  //유저키 비교
  const [user, setUser] = useState(false);

  //유저키 비교
  useEffect(() => {
    if (decodeKey === comment.userKey) {
      setUser(true);
    }
  }, []);

  return (
    <>
      {commentEdit ? (
        <StcommentBox>
          <StcommentUser>
            <img src={comment.userImg} alt="프로필사진" />
            <div className="username">{comment.nickname}</div>
            <StMenu>
              <MenuDial5
                user={user}
                id={comment.commentId}
                setCommentEdit={setCommentEdit}
                resBoard={resBoard}
              />
            </StMenu>
          </StcommentUser>
          <StCommentText>{comment.comment}</StCommentText>
          <StCommentDiv>
            <p>{comment.createdAt}</p>
            <div className="heart">
              <span>{commentCount}</span>
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
          </StCommentDiv>
        </StcommentBox>
      ) : (
        <StcommentBox>
          <StcommentUser>
            <img src={comment.userImg} alt="프로필사진" className="userimg" />
            <div className="username">{comment.nickname}</div>
          </StcommentUser>
          <StCommentEdit onSubmit={handleSubmit(onEdit)}>
            <input
              type="text"
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
        </StcommentBox>
      )}
    </>
  );
}

export default DetailComment;

/*댓글 박스 */
const StcommentBox = styled.div`
  background-color: ${(props) => props.theme.Colors.blueGray1};
  padding: ${(props) => props.theme.paddings.base};
  margin-bottom: ${(props) => props.theme.margins.xxsm};
`;

/*메뉴 위치조정 */
const StMenu = styled.div`
  position: absolute;
  right: 2rem;
`;

/*댓글 유저 정보 */
const StcommentUser = styled.div`
  display: flex;
  align-items: center;

  .username {
    margin-left: ${(props) => props.theme.margins.sm};
    font-size: ${(props) => props.theme.fontSizes.sm};
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
`;

const StCommentDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: ${(props) => props.theme.fontSizes.xsm};
    color: ${(props) => props.theme.Colors.gray3};
  }

  .heart {
    display: flex;
    align-items: center;
    color: #de3730;
    span {
      margin-right: 0.3rem;
      margin-bottom: 0.15rem;
    }
  }
`;

/*수정 댓글란 */

const StCommentEdit = styled.form`
  margin: ${(props) => props.theme.margins.xxsm} 0;
  input {
    width: 100%;
    border: none;
  }
  div {
    float: right;
  }
  button {
    margin-left: 0.5rem;
  }
`;
