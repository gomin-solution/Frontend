import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import instance from "../../shared/api";
import Swal from "sweetalert2";
// import { useNavigate } from "react-router-dom";
import Switch from "@mui/material/Switch";

const Signup = () => {
  // const nav = useNavigate();

  const [isAdult, setIsAdult] = useState(true);
  console.log("isAdult", isAdult);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  // password 변수에 키 값 할당
  const password = watch("password");
  console.log("password", password);

  const onSubmit = async (data) => {
    console.log("data", data);
    try {
      const res = await instance.post("/signup", data);
      console.log("회원가입 res", res);
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
        // nav("/login");
      }
    } catch (error) {
      console.log("회원가입 에러", error.message);
    }
  };

  const idCheck = async () => {
    const userId = watch("userId");
    console.log("userIdCheck", userId);
    const res = await instance.post("/signup/check", { userId: userId });
    console.log("아이디확인", res.status);
    if (res.status === 200) {
      alert("사용 가능한 아이디입니다.");
    } else {
      alert("이미 사용중인 아이디입니다.");
    }
  };

  const nickCheck = async () => {
    const nickname = watch("nickname");
    console.log("nickCheck", nickname);
    const res = await instance.post("/signup/check", { nickname: nickname });
    console.log("닉네임확인", res.status);
    if (res.status === 200) {
      alert("사용 가능한 닉네임입니다.");
    } else {
      alert("이미 사용중인 닉네임입니다.");
    }
  };

  const isAdultHandler = () => {
    setIsAdult(!isAdult);
  };

  return (
    <StFormContainer as="form" onSubmit={handleSubmit(onSubmit)}>
      <StTitle>회원가입</StTitle>
      <StInputWrap>
        <input
          inp="inp1"
          placeholder="아이디"
          required
          {...register("userId", {
            maxLength: {
              value: 10,
              message: "10글자 이하로 작성해주세요",
            },
            minLength: {
              value: 4,
              message: "4글자 이상으로 작성해주세요",
            },
            pattern: {
              value: /^(?=.*[a-zA-Z])[a-zA-Z0-9]{4,10}$/,
              message: "형식에 맞지 않습니다.",
            },
          })}
        />
        <button type="button" onClick={idCheck}>
          아이디 중복검사
        </button>
        {errors?.userId?.message === undefined ? (
          <StCheck>영문을 반드시 포함한 4~10글자로 작성해주세요.</StCheck>
        ) : (
          <StErr>{errors?.userId?.message}</StErr>
        )}
        <input
          placeholder="닉네임"
          required
          {...register("nickname", {
            maxLength: {
              value: 8,
              message: "8글자 이하로 작성해주세요",
            },
            pattern: {
              value: /^[가-힣a-zA-z0-9]{1,8}$/,
              message: "형식에 맞지 않습니다.",
            },
          })}
        />
        <button type="button" onClick={nickCheck}>
          닉네임 중복검사
        </button>
        {errors?.nickname?.message === undefined ? (
          <StCheck>특수문자를 제외하여 8글자 이하로 작성해주세요.</StCheck>
        ) : (
          <StErr>{errors?.nickname?.message}</StErr>
        )}
        <input
          type="password"
          placeholder="패스워드"
          required
          {...register("password", {
            maxLength: {
              value: 20,
              message: "20글자 이하로 작성해주세요",
            },
            minLength: {
              value: 8,
              message: "8글자 이상으로 작성해주세요",
            },
            pattern: {
              value:
                /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
              message: "형식에 맞지 않습니다.",
            },
          })}
        />
        {errors?.password?.message === undefined ? (
          <StCheck>영문, 숫자, 특수문자 포함 8~20글자로 작성해주세요.</StCheck>
        ) : (
          <StErr>{errors?.password?.message}</StErr>
        )}
        <input
          type="password"
          placeholder="패스워드 확인"
          required
          {...register("confirm", {
            validate: {
              confirmPw: (v) =>
                v === password || "비밀번호가 일치하지 않습니다.",
            },
          })}
        />
      </StInputWrap>
      <div>
        <label>성인이신가요?</label>
        <Switch
          onClick={isAdultHandler}
          defaultChecked
          size="small"
          {...register("isAdult", {
            value: { isAdult },
          })}
        />
      </div>
      <button>회원가입</button>
    </StFormContainer>
  );
};

export default Signup;

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

/*유효성검사 출력*/
const StCheck = styled.span`
  font-size: 0.7rem;
  color: #d06400;
`;

/*유효성 검사 오류*/
const StErr = styled.span`
  font-size: 0.7rem;
  color: #ff0a0a;
`;
