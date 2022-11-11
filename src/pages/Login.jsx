import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

import Layout from "../components/layout/Layout";
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
        <StTitle>로그인</StTitle>
        <StInputWrap>
          <input placeholder="아이디" required {...register("userId")} />
          <input
            type="password"
            placeholder="패스워드"
            required
            {...register("password")}
          />
        </StInputWrap>
        <button>로그인</button>
      </StFormContainer>
      <button type="button" onClick={() => nav("/signup")}>
        회원가입하러 가기
      </button>
    </Layout>
  );
};

export default Login;

const StFormContainer = styled.form`
  background-color: yellow;
  height: 844px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const StTitle = styled.div`
  background-color: skyblue;
  width: 70%;
  height: 5%;
  font-size: 30px;
  text-align: center;
`;

const StInputWrap = styled.div`
  background-color: orange;
  display: flex;
  flex-flow: column;
  row-gap: 30px;
`;
