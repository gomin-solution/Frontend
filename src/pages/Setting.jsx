import { useMutation, useQuery } from "react-query";
import styled from "styled-components";
import { Header1 } from "../elements/Header";
import { Container, FlexCenter } from "../shared/css";
import { getMyPage, logout } from "../api/settingApi";
import { useNavigate } from "react-router-dom";
import { Alert2 } from "../elements/Alert";
import { useSetRecoilState } from "recoil";
import { userKeyAtom } from "../state/atom";

function Setting() {
  const nav = useNavigate();

  const { data: res } = useQuery("getMyPage", getMyPage);
  const admin = res?.data.admin;

  const setUserKey = useSetRecoilState(userKeyAtom);
  const logoutMutation = useMutation(logout);

  const logoutHandler = () => {
    logoutMutation.mutate();
    setUserKey(false);
    Alert2("로그아웃 되었습니다.");
    nav("/main");
  };

  return (
    <>
      <Header1 title={"설정"} />
      {!admin ? (
        <Stcontainer>
          <StUserinfo>
            <img src={res?.data.mypage.userImage} alt="프로필 사진" />
            <div>
              <p>{res?.data.mypage.nickname}</p>
              <span>
                등급: 주니어 해결사<div className="qbox">?</div>
              </span>
            </div>
          </StUserinfo>
          <StTitle>계정</StTitle>
          <StMenu onClick={logoutHandler}>로그아웃</StMenu>
          <StMenu>개인정보 변경</StMenu>
          <StMenu style={{ border: "none" }}>푸쉬 알람설정</StMenu>
          <StTitle>고객지원</StTitle>
          <StMenu>공지사항</StMenu>
          <StMenu>이메일 문의하기</StMenu>
          <StMenu>신고접수</StMenu>
        </Stcontainer>
      ) : (
        <Stcontainer>
          <StMenu onClick={logoutHandler}>로그아웃</StMenu>
          <StMenu>신고내역</StMenu>
          {/* {res?.data.allReport.map((report) => (
            <div>aaaa</div>
          ))} */}
        </Stcontainer>
      )}
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
