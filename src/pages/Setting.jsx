import styled from "styled-components";
import { Header1 } from "../elements/Header";
import HelpIcon from "@mui/icons-material/Help";

function Setting() {
  return (
    <>
      <Header1 title={"설정"} />
      <Stcontainer>
        <StUserinfo>
          <img src="/userpic.png" />
          <div>
            <p>닉네임</p>
            <span>
              등급: 주니어 해결사 <HelpIcon fontSize="small" />
            </span>
          </div>
        </StUserinfo>
        <StTitle>계정</StTitle>
        <StMenu>개인정보 변경</StMenu>
        <StMenu style={{ border: "none" }}>푸쉬 알람설정</StMenu>
        <StTitle>고객지원</StTitle>
        <StMenu>공지사항</StMenu>
        <StMenu>이메일 문의하기</StMenu>
        <StMenu>신고접수</StMenu>
      </Stcontainer>
    </>
  );
}

export default Setting;

/*반응형 맞춤 */
const Stcontainer = styled.div`
  width: 100%;
  position: absolute;
  overflow: auto;
  height: calc(100vh - 4rem);
  padding: ${(props) => props.theme.paddings.xxl};
`;

/*유저 정보 박스*/
const StUserinfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2.5rem;
  img {
    width: 4rem;
    margin-right: 1rem;
  }
  p {
    font-size: ${(props) => props.theme.fontSizes.xl};
  }

  span {
    font-size: ${(props) => props.theme.fontSizes.base};
    display: flex;
    align-items: center;
    margin-top: 0.5rem;
  }
`;

/*메뉴 타이틀*/
const StTitle = styled.div`
  width: 100%;
  background-color: #eff1f0;
  padding: 0.7rem 1rem;
`;

/*세부 메뉴*/
const StMenu = styled.div`
  width: 100%;
  padding: ${(props) => props.theme.paddings.lg};
  border-bottom: 1px solid #939393;
`;
