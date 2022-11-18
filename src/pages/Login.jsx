import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

import { Btn1 } from "../elements/Btn";

import instance from "../api/api";
import { setCookie, decodeCookie } from "../api/cookie";

const Login = () => {
  const nav = useNavigate();

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log("data", data);
    try {
      const res = await instance.post("/login", data);
      console.log("res", res.data.accessToken);
      console.log("res", res.data.refreshToken);

      // body로 전달받은 토큰을 쿠키에 저장하기
      setCookie("accessToken", res.data.accessToken);
      setCookie("refreshToken", res.data.refreshToken);

      const userID = decodeCookie("accessToken");
      console.log(userID);

      if (res.status === 200) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${data?.userId}님 환영합니다.`,
          width: 350,
          height: 200,
          showConfirmButton: false,
          timer: 1500,
        });
        nav("/");
      }
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: `아이디 또는 비밀번호가 일치하지 않습니다.`,
        width: 350,
        height: 200,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <Stcontainer>
      <StFormContainer as="form" onSubmit={handleSubmit(onSubmit)}>
        <StTitle>로고</StTitle>
        <StInputWrap>
          <StInput placeholder="아이디" required {...register("userId")} />
          <StInput
            type="password"
            placeholder="패스워드"
            required
            {...register("password")}
          />
        </StInputWrap>
        <Btn1 text={"로그인"} />
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
    </Stcontainer>
  );
};

export default Login;

/*반응형 맞춤 */
const Stcontainer = styled.div`
  width: 100%;
  position: absolute;
  overflow: auto;
  height: 100vh;
`;

const StFormContainer = styled.form`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  padding: ${(props) => props.theme.paddings.xxl};
`;

const StTitle = styled.div`
  width: 100%;
  font-size: ${(props) => props.theme.fontSizes.xxl};
  font-weight: ${(props) => props.theme.fontWeights.xl};
  text-align: center;
  margin: 6rem auto 3rem;
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
  background-color: ${(props) => props.theme.boxColors.gray1};
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

const StBottomNav1 = styled.span`
  color: ${(props) => props.theme.boxColors.gray3};
  border: none;
  font-size: 0.8rem;
  cursor: pointer;
`;

const StBottomNav2 = styled.span`
  border: none;
  font-size: ${(props) => props.theme.fontSizes.sm};
  cursor: pointer;
`;

const StHr = styled.hr`
  height: 0.8rem;
  width: 0;
  border-right: 0;
`;
