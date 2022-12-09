import { useMutation, useQuery } from "react-query";
import styled from "styled-components";
import { Header1 } from "../elements/Header";
import { Container, FlexCenter } from "../shared/css";
import { getMyPage, goodBye, logout } from "../api/settingApi";
import {
  OkayNaviAlert,
  ChooseAlert,
  OkayAlert,
  ErrorAlert,
} from "../elements/Alert";
import { useNavigate } from "react-router-dom";

function Setting() {
  const { data: res } = useQuery("getMyPage", getMyPage, {
    refetchOnWindowFocus: false,
    retry: false,
    onError: () => {
      ErrorAlert("비정상적인 접근입니다.", "/main");
    },
  });
  const admin = res?.data.admin;
  const nav = useNavigate();

  const logoutMutation = useMutation(logout);
  const byeMutation = useMutation(goodBye);

  let img;
  if (!admin) {
    img = res?.data.mypage.userImage;
  }

  const ByeMutate = () => {
    byeMutation.mutate();
  };

  const logoutHandler = () => {
    logoutMutation.mutate();
    OkayNaviAlert("로그아웃 되었습니다.", "/main", "recoil-persist");
  };

  const ByeHandler = () => {
    ChooseAlert("정말 탈퇴하시겠습니까?", "탈퇴", ByeMutate, "recoil-persist");
  };

  const gradeHelp = () => {
    OkayAlert(
      "주니어 해결사: 미션 0~2개 완료\n프로 해결사: 미션 3~5개 완료\n엘리트 해결사: 미션 6~9개 완료\n마스터 해결사: 미션10개 이상 완료"
    );
  };

  return (
    <>
      <Header1 title={"설정"} navi="/main" />
      {!admin ? (
        <Stcontainer>
          <StUserinfo>
            <img src={img ? img : "#"} alt="" />
            <div>
              <p>{res?.data.mypage.nickname}</p>
              <span>
                등급: {res?.data.mypage.grade}
                <div className="qbox" onClick={gradeHelp}>
                  ?
                </div>
              </span>
            </div>
          </StUserinfo>
          <StTitle>계정</StTitle>
          <StMenu onClick={logoutHandler}>로그아웃</StMenu>
          <StMenu
            onClick={() =>
              nav("/myinfo-change", { state: res?.data.mypage.nickname })
            }
          >
            개인정보 변경
          </StMenu>
          <StMenu
            style={{ border: "none" }}
            onClick={() => OkayAlert("서비스 준비중입니다.")}
          >
            푸쉬 알람설정
          </StMenu>
          <StTitle>고객지원</StTitle>
          <StMenu onClick={() => nav("/help")}>이용방법</StMenu>
          <StMenu
            onClick={() => window.open("https://forms.gle/18aAS5XKV6hsXqoH9")}
          >
            문의하기
          </StMenu>
          <StMenu style={{ border: "none" }} onClick={ByeHandler}>
            회원탈퇴
          </StMenu>
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
  margin-top: 4rem;
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
    cursor: pointer;
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
