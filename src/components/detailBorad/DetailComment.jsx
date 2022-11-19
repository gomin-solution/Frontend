import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { MenuDial3 } from "../../elements/MenuDial";
import styled from "styled-components";

function DetailComment({ item }) {
  console.log(item);
  return (
    <StcommentBox>
      <StcommentUser>
        <img src={item.userImg} alt="프로필사진" className="userimg" />
        <div className="username">{item.nickname}</div>
        <div className="usermenu">
          <MenuDial3 />
        </div>
      </StcommentUser>
      <StCommentText>{item.comment}</StCommentText>
      <StCommentDiv>
        <p>{item.createdAt.slice(0, 10)}</p>
        <div className="heart">
          <span>4554</span>
          <FavoriteBorderIcon fontSize="small" />
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

/*댓글 유저 정보 */
const StcommentUser = styled.div`
  display: flex;
  align-items: center;

  .username {
    margin-left: ${(props) => props.theme.margins.sm};
    font-size: ${(props) => props.theme.fontSizes.sm};
  }

  .usermenu {
    position: absolute;
    right: 0rem;
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
      margin-right: 0.5rem;
    }
  }
`;
