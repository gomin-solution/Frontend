import React, { useState } from "react";
import { Container, FlexCenter } from "../shared/css";
import styled from "styled-components";
import {
  ChooseAlert,
  ErrorAlert,
  OkayAlert,
  OkayNaviAlert,
} from "../elements/Alert";
import { userKeyAtom } from "../state/atom";
import { instance } from "../api/api";
import { useSetRecoilState } from "recoil";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { useForm } from "react-hook-form";
import { setCookie } from "../api/cookie";
import { useLocation } from "react-router-dom";

const Nickname = () => {
  const { state: userKey } = useLocation();
  console.log("userKey", userKey);

  /* userKey 값 넣기 */
  const setUserKey = useSetRecoilState(userKeyAtom);

  /* 닉네임 중복체크 useState */
  const [nickDub, setNickDub] = useState(false);

  /* react-hook-form 사용 */
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const nickname = watch("nickname");

  /* 닉네임 중복검사 */
  const nickCheck = async () => {
    const nickname = watch("nickname");
    if (!nickname) {
      OkayAlert("닉네임을 입력해주세요.");
    } else {
      await instance
        .post("/signup/check", { nickname: nickname })
        .then(() => {
          ChooseAlert(
            `사용가능한 닉네임입니다.\n해당 닉네임을 사용하시겠습니까?`,
            "사용",
            null,
            null,
            null,
            setNickDub
          );
        })
        .catch(() => {
          ErrorAlert("사용 불가능한 닉네임입니다.");
        });
    }
  };

  /* 닉네임 제출 */
  const onSubmit = async () => {
    const payload = { nickname: nickname, userKey: userKey };
    if (nickDub === false) {
      return OkayAlert("닉네임 중복확인을 해주세요.");
    }
    try {
      const res = await instance.put("/kakao/nickname", payload);
      if (res.status === 200) {
        setUserKey(res?.data.userKey);
        OkayNaviAlert(`${nickname}님 반갑습니다`, "/main");
        setCookie("accessToken", res?.data.accessToken, {
          maxAge: 60 * 60 * 24 * 15,
        });
        setCookie("refreshToken", res?.data.refreshToken, {
          maxAge: 60 * 60 * 24 * 15,
        });
      }
    } catch {
      ErrorAlert("중복확인을 다시 진행해주세요.");
    }
  };

  return (
    <StContainer as="form" onSubmit={handleSubmit(onSubmit)}>
      <div>사용하실 닉네임을 입력해주세요.</div>
      <StInputWrap>
        {!nickDub ? (
          <>
            <StInput
              placeholder="닉네임"
              maxLength="8"
              {...register("nickname", {
                required: "닉네임을 작성해주세요.",
                maxLength: {
                  value: 8,
                  message: "8글자 이하로 작성해주세요",
                },
                pattern: {
                  value: /^[가-힣a-zA-z0-9]{1,8}$/,
                  message: "특수문자를 제외하여 8글자 이하로 작성해주세요.",
                },
              })}
            />
            <StCheckBtn type="button" onClick={nickCheck}>
              중복확인
            </StCheckBtn>
          </>
        ) : (
          <>
            <StInput
              placeholder={nickname}
              disabled={true}
              backColor="#eaeeec"
            />
            <StCheckDub type="button">
              <TaskAltIcon />
              <span>&nbsp;중복확인</span>
            </StCheckDub>
          </>
        )}
        {errors?.nickname?.message === undefined ? (
          <StCheck>특수문자를 제외하여 8글자 이하로 작성해주세요.</StCheck>
        ) : (
          <StErr>{errors?.nickname?.message}</StErr>
        )}
      </StInputWrap>
      <StSmallText>닉네임 변경은 설정 페이지에서 가능합니다.</StSmallText>
      <StSmallText>입력 후 메인 화면으로 이동됩니다.</StSmallText>
      <Stbtn>확인</Stbtn>
    </StContainer>
  );
};

export default Nickname;

const StContainer = styled.form`
  ${Container};
  ${FlexCenter};
  flex-flow: column;
  row-gap: 0.3rem;
  padding: ${(props) => props.theme.paddings.xxl};
`;

const StInputWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-flow: column;
  column-gap: 0.5rem;
  margin: 1rem 0rem;
  position: relative;
  width: 100%;
`;

const StInput = styled.input`
  background-color: ${(props) => props.backColor};
  width: 100%;
  height: 3rem;
  border: none;
  padding-left: ${(props) => props.theme.paddings.xsm};
`;

/* 닉네임 중복검사 */
const StCheckBtn = styled.button`
  background-color: #8cd3d4;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 4.5rem;
  height: 2rem;
`;

/* 닉네임 중복검사 완료 */
const StCheckDub = styled.button`
  background-color: ${(props) => props.theme.Colors.blueGreen3};
  color: white;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 6rem;
  height: 2rem;
  ${FlexCenter};
`;

/*유효성검사 출력*/
const StCheck = styled.span`
  color: ${(props) => props.theme.Colors.gray2};
  font-size: ${(props) => props.theme.fontSizes.xsm};
  padding-left: ${(props) => props.theme.paddings.xsm};
`;

/*유효성 검사 오류*/
const StErr = styled.span`
  font-size: 0.7rem;
  color: #ba1a1a;
  padding-left: ${(props) => props.theme.paddings.xsm};
`;

/* 안내 텍스트 */
const StSmallText = styled.div`
  color: ${(props) => props.theme.Colors.gray3};
  font-size: ${(props) => props.theme.fontSizes.xsm};
`;

/*로그인 버튼*/
const Stbtn = styled.button`
  font-size: ${(props) => props.theme.fontSizes.base};
  background-color: ${(props) => props.theme.Colors.blueGreen3};
  color: #ffffff;
  width: 100%;
  height: 3rem;
  margin-top: 3rem;
`;
