import { useForm } from "react-hook-form";
import { useMutation, useQuery, useQueryClient } from "react-query";
import styled from "styled-components";
import { getMyPage, nicknameChange, passwordChange } from "../api/settingApi";
import {
  ErrorAlert,
  NicknameAlert,
  OkayAlert,
  OkayNaviAlert,
} from "../elements/Alert";
import { Header1 } from "../elements/Header";
import { Container } from "../shared/css";

function MyInfoChange() {
  const queryClient = useQueryClient();
  /* react-hook-form 사용 */
  const { register, handleSubmit, reset } = useForm();

  const { data: res } = useQuery("getMyPage", getMyPage, {
    refetchOnWindowFocus: false,
    retry: false,
    onError: () => {
      ErrorAlert("비정상적인 접근입니다.", "/main");
    },
  });
  const userInfo = res?.data.mypage;

  const { mutate: nickMutation } = useMutation(nicknameChange, {
    onSuccess: () => {
      queryClient.invalidateQueries("getMyPage");
      OkayAlert("닉네임이 변경되었습니다.");
    },
    onError: (err) => {
      if (err?.response.data.errorMessage === "중복된 닉네임 입니다") {
        ErrorAlert("중복된 닉네임입니다.");
      } else {
        ErrorAlert("잘못된 형식입니다.");
      }
    },
  });

  const passMutation = useMutation(passwordChange, {
    onSuccess: () => {
      OkayNaviAlert("비밀번호가 변경되었습니다.", "/setting");
    },
    onError: (err) => {
      if (err?.response.data.errorMessage === "비밀번호 오류") {
        ErrorAlert("현재 비밀번호와 다릅니다.");
      } else if (
        err?.response.data.errorMessage === "비밀번호를 변경할 수 없습니다."
      ) {
        ErrorAlert("카카오로 가입하신 유저는\n 비밀번호 변경이 불가합니다.");
      } else {
        ErrorAlert("잘못된 형식입니다.");
      }
    },
  });

  const nickHandler = () => {
    NicknameAlert(userInfo?.nickname, nickMutation);
  };

  const passHandler = (e) => {
    if (e.newPassword !== e.confirm) {
      ErrorAlert("새 비밀번호를 다시 확인해주세요.");
    } else {
      passMutation.mutate({
        password: e.password,
        newPassword: e.newPassword,
      });
      reset();
    }
  };

  return (
    <>
      <Header1 title="개인정보 변경" navi="/setting" />
      <Stcontainer>
        <StTitle style={{ marginBottom: "0" }}>닉네임 변경</StTitle>
        <StCheck>특수문자를 제외하여 8글자 이하로 작성해주세요.</StCheck>
        <form className="set" onSubmit={handleSubmit(nickHandler)}>
          <StDiv>{userInfo?.nickname}</StDiv>
          <button className="nickBtn">변경</button>
        </form>
        {!userInfo?.isKakao && (
          <form onSubmit={handleSubmit(passHandler)}>
            <StTitle style={{ marginTop: "3rem", marginBottom: "0" }}>
              비밀번호 변경
            </StTitle>
            <StCheck>
              영문, 숫자, 특수문자(!@#$%^&*) 포함 8~20글자로 작성해주세요.{" "}
              <br />
              카카오로 가입하신 유저는 비밀번호 변경이 불가합니다.
            </StCheck>
            <StLabel>현재 비밀번호 입력</StLabel>
            <StInput type="password" maxLength="20" {...register("password")} />
            <StLabel style={{ marginTop: "2rem" }}>새 비밀번호 입력</StLabel>
            <StInput type="password" {...register("newPassword")} />
            <StLabel>새 비밀번호 확인</StLabel>
            <StInput type="password" maxLength="20" {...register("confirm")} />
            <button className="passBtn">비밀번호 변경</button>
          </form>
        )}
      </Stcontainer>
    </>
  );
}

export default MyInfoChange;

/*반응형 맞춤 */
const Stcontainer = styled.div`
  ${Container};
  margin-top: 4rem;
  height: calc(100vh - 4rem);
  padding: ${(props) => props.theme.paddings.xxl};

  button {
    font-size: ${(props) => props.theme.fontSizes.base};
    background-color: ${(props) => props.theme.Colors.blueGreen3};
    color: #ffffff;
  }

  .set {
    display: flex;

    .nickBtn {
      margin-left: 1rem;
      width: 5rem;
    }
  }

  .passBtn {
    width: 100%;
    margin-top: 1.5rem;
    height: 2.5rem;
  }
`;

/*타이틀 */
const StTitle = styled.div`
  margin: 1rem 0;
  font-size: ${(props) => props.theme.fontSizes.xl};
  font-weight: ${(props) => props.theme.fontWeights.lg};
`;

/*라벨링 */
const StLabel = styled.div`
  margin: 0.5rem 0;
`;

const StInput = styled.div`
  background-color: ${(props) => props.theme.Colors.blueGray1};
  width: 100%;
  height: 2.5rem;
  border: none;
  font-size: ${(props) => props.theme.fontSizes.base};
  padding-left: ${(props) => props.theme.paddings.sm};
`;

const StDiv = styled.div`
  background-color: ${(props) => props.theme.Colors.blueGray1};
  width: 100%;
  height: 2.5rem;
  border: none;
  font-size: ${(props) => props.theme.fontSizes.base};
  padding-left: ${(props) => props.theme.paddings.sm};

  display: flex;
  align-items: center;
`;

/*유효성검사 출력*/
const StCheck = styled.p`
  color: ${(props) => props.theme.Colors.gray3};
  font-size: ${(props) => props.theme.fontSizes.xsm};
  margin-bottom: 1rem;
`;
