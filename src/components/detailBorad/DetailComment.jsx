import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { MenuDial5 } from "../../elements/MenuDial";
import styled from "styled-components";

import { useMutation, useQueryClient } from "react-query";
import { commentLike } from "../../api/detailApi";

function DetailComment({ comment, user }) {
  const queryClient = useQueryClient();

  //댓글 좋아요
  const likeChange = (id) => {
    commentLikes.mutate(id);
  };

  const commentLikes = useMutation(commentLike, {
    onSuccess: () => {
      queryClient.invalidateQueries("getDetail");
    },
  });

  //댓글 수정
  //댓글 삭제

  return (
    <StcommentBox>
      <StcommentUser>
        <img src={comment.userImg} alt="프로필사진" className="userimg" />
        <div className="username">{comment.nickname}</div>
        <StMenu>
          <MenuDial5 user={user} id={comment.commentId} />
        </StMenu>
      </StcommentUser>
      <StCommentText>{comment.comment}</StCommentText>
      <StCommentDiv>
        <p>{comment.createdAt.slice(0, 10)}</p>
        <div className="heart">
          <span>{comment.likeCount}</span>
          {comment.isLike ? (
            <FavoriteIcon
              fontSize="small"
              onClick={() => likeChange(comment.commentId)}
            />
          ) : (
            <FavoriteBorderIcon
              fontSize="small"
              onClick={() => likeChange(comment.commentId)}
            />
          )}
        </div>
      </StCommentDiv>
    </StcommentBox>
  );
}

export default DetailComment;

/*댓글 박스 */
const StcommentBox = styled.div`
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
