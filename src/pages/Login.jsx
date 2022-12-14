import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { instance } from "../api/api";
import { OkayNaviAlert, ErrorAlert } from "../elements/Alert";
import styled from "styled-components";
import { Header1 } from "../elements/Header";
import { Container, FlexCenter } from "../shared/css";
import logoBirdSquare from "../image/logo/logoBirdSquare.svg";
import kakao from "../image/socialLogin/kakao.svg";
import { removeCookie, setCookie } from "../api/cookie";
import { useEffect } from "react";

const Login = () => {
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=code`;

  const nav = useNavigate();
  const userKey = localStorage.getItem("userKey");

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await instance.post("/login", data);

      // body로 전달받은 토큰을 쿠키에 저장하기
      setCookie("accessToken", res?.data.accessToken, {
        maxAge: 60 * 60 * 24 * 15,
      });
      setCookie("refreshToken", res?.data.refreshToken, {
        maxAge: 60 * 60 * 24 * 15,
      });

      /* userKey 로컬로 저장 후 메인페이지 이동 */
      localStorage.setItem("userKey", res?.data.userKey);
      OkayNaviAlert(`${res?.data.nickname}님 반갑습니다.`, "/main");
    } catch (error) {
      ErrorAlert(`아이디 또는 비밀번호가\n일치하지 않습니다.`);
    }
  };

  /* kakaoLogin 요청 */
  const kakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  /* token 없을 시 userKey 삭제: 로그아웃하지 않고 브라우저 종료한 경우 대비 */
  useEffect(() => {
    if (!userKey) {
      removeCookie("accessToken");
      removeCookie("refreshToken");
    }
  }, []);

  return (
    <>
      <Header1 title={"로그인"} />
      <StContainer>
        <StFormContainer as="form" onSubmit={handleSubmit(onSubmit)}>
          <StLogo src={logoBirdSquare} alt="logoBirdSquare" />
          <StInputWrap>
            <StInput
              placeholder="아이디"
              maxLength="10"
              required
              {...register("userId")}
            />
            <StInput
              type="password"
              placeholder="비밀번호"
              maxLength="20"
              required
              {...register("password")}
            />
          </StInputWrap>
          <Stbtn>로그인</Stbtn>
        </StFormContainer>
        <StBtnWrap>
          아직 가입하지 않으셨나요?
          <StBottomNav2 type="button" onClick={() => nav("/signup")}>
            회원가입하기
          </StBottomNav2>
        </StBtnWrap>
        <StSocialWrap>
          <Stimg src={kakao} alt="kakao" onClick={kakaoLogin} />
        </StSocialWrap>
      </StContainer>
    </>
  );
};

export default Login;

const StContainer = styled.div`
  ${Container};
  margin-top: 4rem;
  height: calc(100vh - 4rem);
`;

const StFormContainer = styled.form`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  padding: ${(props) => props.theme.paddings.xxl};
`;

const StLogo = styled.img`
  width: 40%;
  height: 40%;
  text-align: center;
  margin: 3rem auto;
`;

const StInputWrap = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  row-gap: ${(props) => props.theme.margins.lg};
  margin-bottom: 2rem;
`;

const StInput = styled.input`
  background-color: ${(props) => props.theme.Colors.blueGray1};
  width: 100%;
  height: 3rem;
  border: none;
  padding-left: ${(props) => props.theme.paddings.xsm};
`;

const StBtnWrap = styled.div`
  ${FlexCenter};

  color: ${(props) => props.theme.Colors.gray3};
  font-size: ${(props) => props.theme.fontSizes.sm};
`;

const StSocialWrap = styled.div`
  ${FlexCenter};
  flex-flow: column;
  margin-top: ${(props) => props.theme.margins.xxl};
  width: 100%;
`;

/*회원가입*/
const StBottomNav2 = styled.span`
  border: none;
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: #404040;
  cursor: pointer;

  margin-left: 0.4rem;
`;

/*로그인 버튼*/
const Stbtn = styled.button`
  font-size: ${(props) => props.theme.fontSizes.base};
  background-color: ${(props) => props.theme.Colors.blueGreen3};
  color: #ffffff;
  width: 100%;
  height: 3rem;
`;

const Stimg = styled.img`
  margin-bottom: 0.5rem;
  width: 90%;
  cursor: pointer;
`;
