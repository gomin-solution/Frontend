import { useState } from "react";
import { useForm } from "react-hook-form";
import instance from "../api/api";

/*스타일 관련*/
import styled from "styled-components";
import { Header5 } from "../elements/Header";
import { Alert0, Alert3 } from "../elements/Alert";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { Container, FlexCenter } from "../shared/css";

const Signup = () => {
  /* 아이디, 닉네임 중복체크 */
  const [idDub, setIdDub] = useState(false);
  const [nickDub, setNickDub] = useState(false);

  /* react-hook-form 사용 */
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  /* password 변수에 키 값 할당 */
  const password = watch("password");

  /* 회원가입 제출 */
  const onSubmit = async (data) => {
    if (idDub === false || nickDub === false) {
      return window.alert("아이디와 닉네임 모두 중복확인 해주세요.");
    }
    try {
      const res = await instance.post("/signup", data);
      if (res.status === 200) {
        Alert3(`${data?.userId}님\n환영합니다.`);
      }
    } catch (error) {
      Alert0("중복확인을 다시 진행해주세요.");
    }
  };

  /* 아이디 중복검사 */
  const idCheck = async () => {
    const userId = watch("userId");
    await instance
      .post("/signup/check", { userId: userId })
      .then(() => {
        Alert0("사용가능한 아이디입니다.");
        setIdDub(true);
      })
      .catch(() => {
        Alert0("중복된 아이디입니다.");
      });
  };

  /* 닉네임 중복검사 */
  const nickCheck = async () => {
    const nickname = watch("nickname");
    await instance
      .post("/signup/check", { nickname: nickname })
      .then(() => {
        Alert0("사용가능한 닉네임입니다.");
        setNickDub(true);
      })
      .catch(() => {
        Alert0("중복된 닉네임입니다.");
      });
  };

  return (
    <Stcontainer as="form" onSubmit={handleSubmit(onSubmit)}>
      <Header5 title={"회원가입"} />
      <StFormContainer>
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
                  message: "영문을 반드시 포함한 4~10글자로 작성해주세요.",
                },
              })}
            />
            {idDub ? (
              <StCheckDub type="button">
                <TaskAltIcon />
                <span>&nbsp;중복확인</span>
              </StCheckDub>
            ) : (
              <StCheckBtn type="button" onClick={idCheck}>
                중복확인
              </StCheckBtn>
            )}
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
                  message: "특수문자를 제외하여 8글자 이하로 작성해주세요.",
                },
              })}
            />
            {nickDub ? (
              <StCheckDub type="button">
                <TaskAltIcon />
                <span>&nbsp;중복확인</span>
              </StCheckDub>
            ) : (
              <StCheckBtn type="button" onClick={nickCheck}>
                중복확인
              </StCheckBtn>
            )}
          </StInputInnerWrap>
          {errors?.nickname?.message === undefined ? (
            <StCheck>특수문자를 제외하여 8글자 이하로 작성해주세요.</StCheck>
          ) : (
            <StErr>{errors?.nickname?.message}</StErr>
          )}
          {/* ----- 비밀번호 ----- */}
          <StInput
            type="password"
            placeholder="비밀번호"
            {...register("password", {
              required: "비밀번호를 작성해주세요.",
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
                message: "영문, 숫자, 특수문자 포함 8~20글자로 작성해주세요.",
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
          {/* ----- 비밀번호 확인 ----- */}
          <StInput
            type="password"
            placeholder="비밀번호 확인"
            {...register("confirm", {
              required: "비밀번호를 재입력해주세요.",
              validate: {
                confirmPw: (v) =>
                  v === password || "비밀번호가 일치하지 않습니다.",
              },
            })}
          />
          {errors?.confirm?.message === undefined ? (
            <StCheck>비밀번호와 동일하게 다시 작성해주세요.</StCheck>
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
              name="isAdult"
              value={true}
              required
              {...register("isAdult")}
            />
            <label style={{ marginRight: "30%" }}>예</label>
            <input
              style={{ marginRight: "12px" }}
              type="radio"
              name="isAdult"
              value={false}
              required
              {...register("isAdult")}
            />
            <label>아니오</label>
          </div>
        </StAdult>
      </StFormContainer>
    </Stcontainer>
  );
};

export default Signup;

/*반응형 맞춤 */
const Stcontainer = styled.form`
  ${Container}
  height: calc(100vh - 4rem);
`;

const StFormContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => props.theme.paddings.xxl};
`;

const StInputWrap = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  row-gap: 0.6rem;
`;

const StInputInnerWrap = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const StInput = styled.input`
  background-color: ${(props) => props.theme.Colors.blueGray1};
  width: 100%;
  height: 3rem;
  border: none;
  padding-left: ${(props) => props.theme.paddings.xsm};
`;

const StCheckBtn = styled.button`
  background-color: ${(props) => props.theme.Colors.blueGreen3};
  color: #ffffff;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 4.5rem;
  height: 2rem;
`;

const StCheckDub = styled.button`
  background-color: #7999ff;
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
  color: #ff0a0a;
  padding-left: ${(props) => props.theme.paddings.xsm};
`;

const StAdult = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  margin-bottom: 2rem;
`;
