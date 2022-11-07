import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Button from "../../elements/button";
import Input from "../../elements/input";
import api from "../../shared/api";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const nav = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = async (payload) => {
    try {
      const res = await api.post("/signup", payload);
      if (res.status === 200) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "가입을 축하합니다!",
          width: 350,
          height: 200,
          showConfirmButton: false,
          timer: 1500,
        });
        nav("/");
      }
    } catch (error) {
      console.log("회원가입 에러", error.message);
    }
  };

  const reg_userId = /^(?=.*[a-zA-Z])[a-zA-Z0-9]{4,10}$/;
  const reg_nickname = /^[가-힣a-zA-z0-9]{1,8}$/;
  const reg_password =
    /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;

  return (
    <StFormContainer onSubmit={handleSubmit(onSubmit)}>
      <StTitle>회원가입</StTitle>
      <StInputWrap>
        <Input
          inp="inp1"
          placeholder="이름"
          {...register("userId", {
            pattern: {
              value: { reg_userId },
              message: "형식에 맞지 않습니다.",
            },
          })}
        />
        {errors.email && errors.email.type === "pattern" && (
          <span>{errors.email?.message} </span>
        )}
        <Input
          inp="inp1"
          placeholder="닉네임"
          {...register("nickname", {
            pattern: {
              value: { reg_nickname },
              message: "형식에 맞지 않습니다.",
            },
          })}
        />
        {errors.email && errors.email.type === "pattern" && (
          <span>{errors.email?.message} </span>
        )}
        <Input
          type="password"
          inp="inp1"
          placeholder="패스워드"
          {...register("password", {
            pattern: {
              value: { reg_password },
              message: "형식에 맞지 않습니다.",
            },
          })}
        />
        {errors.email && errors.email.type === "pattern" && (
          <span>{errors.email?.message} </span>
        )}
        <Input
          type="password"
          inp="inp1"
          placeholder="패스워드 확인"
          {...register("confirmPassword", {
            pattern: {
              value: { reg_password },
              message: "형식에 맞지 않습니다.",
            },
          })}
        />
        {errors.email && errors.email.type === "pattern" && (
          <span>{errors.email?.message} </span>
        )}
      </StInputWrap>
      <Button btn="btn1">회원가입</Button>
    </StFormContainer>
  );
};

export default Signup;

const StFormContainer = styled.form`
  background-color: yellow;
  /* width: 410px; */
  height: 100vh;
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
