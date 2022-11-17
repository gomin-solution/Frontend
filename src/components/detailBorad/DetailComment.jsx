import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { MenuDial5 } from "../../elements/MenuDial";
import styled from "styled-components";

function DetailComment() {
  return (
    <StcommentBox>
      <StcommentUser>
        <img src="/userpic.png" alt="프로필사진" className="userimg" />
        <div className="username">닉네임</div>
        <div className="usermenu">
          <MenuDial5 />
        </div>
      </StcommentUser>
      <StCommentText>
        옷을 이상의 충분히 지혜는 위하여서. 발휘하기 옷을 찾아 긴지라 아니다.
        옷을 이상의 충분히 지혜는 위하여서. 발휘하기 옷을 찾아 긴지라 아니다.
        옷을 이상의 충분히 지혜는 위하여서. 발휘하기 옷을 찾아 긴지라 아니다.
      </StCommentText>
      <StCommentDiv>
        <p>2020.20.20</p>
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
