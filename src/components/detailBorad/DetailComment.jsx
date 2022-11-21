import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { MenuDial5 } from "../../elements/MenuDial";
import styled from "styled-components";

import { useMutation, useQueryClient } from "react-query";
import { commenEdit, commentLike } from "../../api/detailApi";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

function DetailComment({ comment, decodeKey, isEdit, setIsEdit }) {
  const queryClient = useQueryClient();

  //댓글 수정 하기
  const { register, handleSubmit } = useForm();
  const commentId = comment.commentId;
  const onEdit = (comment) => {
    editComment.mutate({ commentId: commentId, comment });
    setIsEdit(true);
  };

  const editComment = useMutation(commenEdit, {
    onSuccess: () => {
      queryClient.invalidateQueries("getDetail");
    },
  });

  //댓글 좋아요
  const { mutate } = useMutation(commentLike, {
    onSuccess: () => {
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
      {isEdit ? (
        <StcommentBox>
          <StcommentUser>
            <img src={comment.userImg} alt="프로필사진" className="userimg" />
            <div className="username">{comment.nickname}</div>
            <StMenu>
              <MenuDial5
                user={user}
                id={comment.commentId}
                setIsEdit={setIsEdit}
              />
            </StMenu>
          </StcommentUser>
          <StCommentText>{comment.comment}</StCommentText>
          <StCommentDiv>
            <p>{comment.createdAt}</p>
            <div className="heart">
              <span>{comment.likeCount}</span>
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
        <StEditBox>
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
              <button type="button" onClick={() => setIsEdit(true)}>
                취소
              </button>
              <button>완료</button>
            </div>
          </StCommentEdit>
        </StEditBox>
      )}
    </>
  );
}

export default DetailComment;

/*댓글 박스 */
const StcommentBox = styled.div`
  background-color: #fefbff;
  padding: ${(props) => props.theme.paddings.base};
  margin-bottom: ${(props) => props.theme.margins.xxsm};
`;

/*수정 댓글 박스 */
const StEditBox = styled.div`
  background-color: #fefbff;
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
    color: ${(props) => props.theme.fontColors.fong1};
  }

  .heart {
    display: flex;
    align-items: center;
    color: #ff5449;
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
    font-size: ${(props) => props.theme.fontSizes.base};
  }
  div {
    float: right;
  }
  button {
    margin-left: 0.5rem;
  }
`;
