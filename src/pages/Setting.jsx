import { useQuery } from "react-query";
import styled from "styled-components";
import { Header1 } from "../elements/Header";
import { Container, FlexCenter } from "../shared/css";
import { getMyPage } from "../api/settingApi";

function Setting() {
  const { data: res } = useQuery("getMyPage", getMyPage);
  const nickname = res?.data.nickname;
  const userImage = res?.data.userImage;

  return (
    <>
      <Header1 title={"설정"} />
      <Stcontainer>
        <StUserinfo>
          <img src={userImage} alt="프로필 사진" />
          <div>
            <p>{nickname}</p>
            <span>
              등급: 주니어 해결사<div className="qbox">?</div>
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
  ${Container};
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
    color: ${(props) => props.theme.Colors.blueGreen3};
    font-size: ${(props) => props.theme.fontSizes.base};
    ${FlexCenter}
    margin-top: 0.5rem;
  }

  /*물음표 박스*/
  .qbox {
    ${FlexCenter};
    margin-left: 0.2rem;
    border-radius: 3rem;
    background-color: #d6e6e5;
    color: ${(props) => props.theme.Colors.gray3};
    font-size: ${(props) => props.theme.fontSizes.sm};
    width: 1rem;
    height: 1rem;
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
  border-bottom: 1px solid ${(props) => props.theme.Colors.gray2};
`;
