import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import instance from "../api/api";
import { setCookie } from "../api/cookie";

/*스타일 관련 */
import { Alert0, Alert1 } from "../elements/Alert";
import styled from "styled-components";
import { Header1 } from "../elements/Header";
import { Container } from "../shared/css";
import logoBirdSquare from "../image/logo/logoBirdSquare.svg";

const Login = () => {
  const nav = useNavigate();

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log("data", data);
    try {
      const res = await instance.post("/login", data);

      // body로 전달받은 토큰을 쿠키에 저장하기
      // setCookie("accessToken", res.data.accessToken);
      // setCookie("refreshToken", res.data.refreshToken);
      Alert1(`${res.data.nickname}님 반갑습니다.`);
    } catch (error) {
      Alert0("아이디 또는 비밀번호가 일치하지 않습니다.");
    }
  };

  return (
    <>
      <Header1 title={"로그인"} />
      <StContainer>
        <StFormContainer as="form" onSubmit={handleSubmit(onSubmit)}>
          <StLogo src={logoBirdSquare} alt="logoBirdSquare" />
          <StInputWrap>
            <StInput placeholder="아이디" required {...register("userId")} />
            <StInput
              type="password"
              placeholder="비밀번호"
              required
              {...register("password")}
            />
          </StInputWrap>
          <Stbtn>로그인</Stbtn>
        </StFormContainer>
        <StBtnWrap>
          <StBottomNav1 type="button">아이디 찾기</StBottomNav1>
          <StHr />
          <StBottomNav1 type="button">비밀번호 찾기</StBottomNav1>
          <StHr />
          <StBottomNav2 type="button" onClick={() => nav("/signup")}>
            회원가입
          </StBottomNav2>
        </StBtnWrap>
      </StContainer>
    </>
  );
};

export default Login;

const StContainer = styled.div`
  ${Container};
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
  margin: 4rem auto;
`;

const StInputWrap = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  row-gap: ${(props) => props.theme.margins.lg};
  margin-bottom: 3rem;
`;

const StInput = styled.input`
  background-color: ${(props) => props.theme.Colors.blueGray1};
  width: 100%;
  height: 3rem;
  border: none;
  padding-left: ${(props) => props.theme.paddings.xsm};
`;

const StBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 4rem;
`;

/*아이디 찾기, 비밀번호 찾기*/
const StBottomNav1 = styled.span`
  color: ${(props) => props.theme.Colors.gray3};
  border: none;
  font-size: ${(props) => props.theme.fontSizes.sm};
  cursor: pointer;
`;

/*회원가입*/
const StBottomNav2 = styled.span`
  border: none;
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: #404040;
  cursor: pointer;
`;

const StHr = styled.hr`
  height: 0.8rem;
  width: 0;
  border-right: 0;
`;

/*로그인 버튼*/
const Stbtn = styled.button`
  font-size: ${(props) => props.theme.fontSizes.base};
  background-color: ${(props) => props.theme.Colors.blueGreen3};
  color: #ffffff;
  width: 100%;
  height: 3rem;
`;
