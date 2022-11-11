import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

import Layout from "../components/layout/Layout";
import { Btn2 } from "../elements/button";

import instance from "../shared/api";
import { setCookie } from "../shared/cookie";

const Login = () => {
  const nav = useNavigate();

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log("data", data);
    try {
      const res = await instance.post("/login", data);

      // body로 전달받은 토큰을 쿠키에 저장하기
      setCookie(res.data.accessToken);
      setCookie(res.data.refreshToken);

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
        // nav("/");
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
    <Layout>
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
        <Btn2 text="로그인" />
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
    </Layout>
  );
};

export default Login;

const StFormContainer = styled.form`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  padding: 20px;
`;

const StTitle = styled.div`
  width: 100%;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  margin: 224px auto 48px;
`;

const StInputWrap = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  row-gap: 12px;
  margin-bottom: 48px;
`;

const StInput = styled.input`
  background-color: #f3f3f3;
  width: 100%;
  height: 52px;
  border: none;
  padding-left: 10px;
`;

const StBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 180px 63px 0px;
`;

const StBottomNav1 = styled.span`
  color: #8f8f8f;
  border: none;
  font-size: 14px;
  cursor: pointer;
`;

const StBottomNav2 = styled.span`
  border: none;
  font-size: 14px;
  cursor: pointer;
`;

const StHr = styled.hr`
  height: 14px;
  width: 0px;
  border-right: 0px;
`;
