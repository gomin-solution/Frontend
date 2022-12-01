import styled from "styled-components";
import { MenuDial5 } from "../../elements/MenuDial";
import SubdirectoryArrowRightIcon from "@mui/icons-material/SubdirectoryArrowRight";
import { useState } from "react";

function DetailReComment({ re, user, resBoard }) {
  console.log(re);
  const [recommentEdit, setReCommentEdit] = useState(true);

  return (
    <StcommentBox>
      <SubdirectoryArrowRightIcon sx={{ color: "#19696A" }} />
      <div>
        <StcommentUser>
          <img src="" alt="" />
          <div className="username">닉네임</div>
          <StMenu>
            <MenuDial5
              user={user}
              id={re.replyId}
              setCommentEdit={setReCommentEdit}
              resBoard={resBoard}
              reGet="recommenGet"
            />
          </StMenu>
        </StcommentUser>
        <StCommentText>{re.comment}</StCommentText>
        <StCommentDiv>
          <p>{re.updatedAt}</p>
        </StCommentDiv>
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
  margin-bottom: ${(props) => props.theme.margins.xxsm};
  /*줄바꿈*/
  white-space: pre-wrap;
  display: flex;

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
    font-size: ${(props) => props.theme.fontSizes.base};
  }

  button {
    margin-left: 0.5rem;
  }
  div {
    display: flex;
    justify-content: flex-end;
  }
`;
