import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import Layout from "../components/layout/Layout";
import instance from "../shared/api";
import { Header1 } from "../components/header/Header";

const Signup = () => {
  const nav = useNavigate();

  // 아이디, 닉네임 중복체크
  const [idDub, setIdDub] = useState(false);
  const [nickDub, setNickDub] = useState(false);

  // react-hook-form 사용
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  // password 변수에 키 값 할당
  const password = watch("password");

  // 회원가입 제출
  const onSubmit = async (data) => {
    if (idDub === false || nickDub === false) {
      return window.alert("아이디와 닉네임 모두 중복체크 해주세요.");
    }
    try {
      const res = await instance.post("/signup", data);
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
        nav("/login");
      }
    } catch (error) {
      console.log("회원가입 에러", error.message);
    }
  };

  // 아이디 중복검사
  const idCheck = async () => {
    const userId = watch("userId");
    console.log("userId", userId);
    const res = await instance.post("/signup/check", { userId: userId });
    console.log("res1", res);
    if (res.status === 200) {
      alert("사용 가능한 아이디입니다.");
    } else {
      alert("이미 사용중인 아이디입니다.");
    }
    setIdDub(!idDub);
  };

  // 닉네임 중복검사
  const nickCheck = async () => {
    const nickname = watch("nickname");
    console.log("nickname", nickname);
    const res = await instance.post("/signup/check", { nickname: nickname });
    console.log("res2", res);
    if (res.status === 200) {
      alert("사용 가능한 닉네임입니다.");
    } else {
      alert("이미 사용중인 닉네임입니다.");
    }
    setNickDub(!idDub);
  };

  return (
    <Layout>
      <Header1 />
      <StFormContainer as="form" onSubmit={handleSubmit(onSubmit)}>
        <StTitle>회원가입</StTitle>
        <StInputWrap>
          {/* ----- 아이디 ----- */}
          <StInputInnerWrap>
            <StInput
              placeholder="아이디"
              {...register("userId", {
                required: "아이디를 작성해주세요.",
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
            <StBtn type="button" onClick={idCheck}>
              중복확인
            </StBtn>
          </StInputInnerWrap>
          {errors?.userId?.message === undefined ? (
            <StCheck>영문을 반드시 포함한 4~10글자로 작성해주세요.</StCheck>
          ) : (
            <StErr>{errors?.userId?.message}</StErr>
          )}
          {/* ----- 닉네임 ----- */}
          <StInputInnerWrap>
            <StInput
              placeholder="닉네임"
              {...register("nickname", {
                required: "닉네임을 작성해주세요.",
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
            <StBtn type="button" onClick={nickCheck}>
              중복확인
            </StBtn>
          </StInputInnerWrap>
          {errors?.nickname?.message === undefined ? (
            <StCheck>특수문자를 제외하여 8글자 이하로 작성해주세요.</StCheck>
          ) : (
            <StErr>{errors?.nickname?.message}</StErr>
          )}
          {/* ----- 패스워드 ----- */}
          <StInput
            type="password"
            placeholder="패스워드"
            {...register("password", {
              required: "패스워드를 작성해주세요.",
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
            <StCheck>
              영문, 숫자, 특수문자 포함 8~20글자로 작성해주세요.
            </StCheck>
          ) : (
            <StErr>{errors?.password?.message}</StErr>
          )}
          {/* ----- 패스워드 확인 ----- */}
          <StInput
            type="password"
            placeholder="패스워드 확인"
            {...register("confirm", {
              required: "패스워드 확인을 작성해주세요.",
              validate: {
                confirmPw: (v) =>
                  v === password || "비밀번호가 일치하지 않습니다.",
              },
            })}
          />
          {errors?.confirm?.message === undefined ? (
            <StCheck>패스워드와 동일하게 다시 작성해주세요.</StCheck>
          ) : (
            <StErr>{errors?.confirm?.message}</StErr>
          )}
        </StInputWrap>
        {/* ----- 성인 여부 ----- */}
        <StAdult>
          <span
            style={{
              margin: "39px 0px 18px",
              fontWeight: "600",
            }}
          >
            성인이신가요?
          </span>
          <div>
            <input
              style={{ marginRight: "12px" }}
              type="radio"
              name="adult"
              value={true}
              required
              {...register("adult")}
            />
            <label style={{ marginRight: "30%" }}>예</label>
            <input
              style={{ marginRight: "12px" }}
              type="radio"
              name="adult"
              value={false}
              required
              {...register("adult")}
            />
            <label>아니오</label>
          </div>
        </StAdult>
        <StBtn2>회원가입</StBtn2>
      </StFormContainer>
    </Layout>
  );
};

export default Signup;

const StFormContainer = styled.form`
  /* background-color: yellow; */
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const StTitle = styled.div`
  margin: 76px auto 48px;
  font-size: 20px;
  text-align: center;
`;

const StInputWrap = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  row-gap: 12px;
`;

const StInputInnerWrap = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const StInput = styled.input`
  background-color: #f3f3f3;
  width: 100%;
  height: 52px;
  border: none;
  padding-left: 10px;
`;

const StBtn = styled.button`
  background-color: #cdcdcd;
  color: #575757;
  position: absolute;
  top: 10px;
  right: 8px;
  width: 75px;
  height: 32px;
  border: none;
  cursor: pointer;
`;

/*유효성검사 출력*/
const StCheck = styled.span`
  font-size: 0.7rem;
  color: lightgray;
  padding-left: 10px;
`;

/*유효성 검사 오류*/
const StErr = styled.span`
  font-size: 0.7rem;
  color: #ff0a0a;
  padding-left: 10px;
`;

const StAdult = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
`;

const StBtn2 = styled.button`
  width: 100%;
  height: 49px;
  margin-top: 64px;
  border: none;
`;
