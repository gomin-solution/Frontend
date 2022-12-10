import styled from "styled-components";
import { UserDial } from "../../elements/MenuDial";
import SubdirectoryArrowRightIcon from "@mui/icons-material/SubdirectoryArrowRight";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { recommentEdit } from "../../api/detailApi";
import { useRecoilValue } from "recoil";
import { userKeyAtom } from "../../state/atom";
import { OkayAlert } from "../../elements/Alert";
import TextareaAutosize from "@mui/material/TextareaAutosize";

function DetailReComment({ re, resBoard }) {
  const queryClient = useQueryClient();
  const [reEdit, setReEdit] = useState(true);

  const { register, handleSubmit, reset } = useForm();
  const onRecomment = (comment) => {
    if (comment.re.trim() === "") {
      return OkayAlert("답글을 입력해주세요.");
    } else {
      editComment.mutate({ comment, id: re.replyId });
      setReEdit(true);
    }
  };

  const editComment = useMutation(recommentEdit, {
    onSuccess: () => {
      queryClient.invalidateQueries("getRecomment");
    },
  });

  // 유저키 비교
  const [user, setUser] = useState(false);
  const userKey = useRecoilValue(userKeyAtom);

  useEffect(() => {
    if (userKey === re.userKey) {
      setUser(true);
    }
  }, []);

  return (
    <StcommentBox>
      <SubdirectoryArrowRightIcon sx={{ color: "#19696A" }} />
      <div className="textbox">
        <StcommentUser>
          <img src={re.userImage} alt="" />
          <div className="username">{re.nickname}</div>
          {reEdit ? (
            <StMenu>
              {userKey !== 0 && (
                <UserDial
                  user={user}
                  id={re.replyId}
                  setAdEdit={setReEdit}
                  resBoard={resBoard}
                  reGet="getRecomment"
                  target="reply"
                  nickname={re.nickname}
                />
              )}
            </StMenu>
          ) : null}
        </StcommentUser>
        {reEdit ? (
          <>
            <StCommentText>{re.comment}</StCommentText>
            <StCommentDiv>
              <p>{re.updatedAt}</p>
            </StCommentDiv>
          </>
        ) : (
          <StCommentText as="form" onSubmit={handleSubmit(onRecomment)}>
            <TextareaAutosize
              defaultValue={re.comment}
              maxLength={50}
              {...register("re")}
            />
            <StEditCommentDiv>
              <button type="button" onClick={() => setReEdit(true)}>
                취소
              </button>
              <button>작성</button>
            </StEditCommentDiv>
          </StCommentText>
        )}
      </div>
    </StcommentBox>
  );
}

export default DetailReComment;

/*댓글 박스 */
const StcommentBox = styled.div`
  margin-left: 1rem;
  background-color: ${(props) => props.theme.Colors.bg3};
  padding: ${(props) => props.theme.paddings.base};
  margin-top: ${(props) => props.theme.margins.sm};
  /*줄바꿈*/
  white-space: pre-wrap;
  display: flex;

  .textbox {
    width: 100%;
  }

  //답글버튼
  button {
    font-weight: ${(props) => props.theme.fontWeights.xl};
    color: ${(props) => props.theme.Colors.blueGreen3};
  }
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

  textarea {
    width: 100%;
    padding: ${(props) => props.theme.paddings.xsm};
    border: none;
  }
`;

const StCommentDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: ${(props) => props.theme.fontSizes.xsm};
    color: ${(props) => props.theme.Colors.gray3};
  }
`;

const StEditCommentDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
  margin-top: 0.2rem;
`;
