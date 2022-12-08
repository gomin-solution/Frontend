import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { putIsOpen } from "../../api/mainApi";
import { Lottie } from "@crello/react-lottie";

/*스타일 관련 */
import styled from "styled-components";
import { ErrorAlert, LoginAlert, OkayAlert } from "../../elements/Alert";
import animationData from "../../image/dailyMessage/letter_lottie.json";
import letterOpen from "../../image/dailyMessage/letterOpen.svg";
import letterClose from "../../image/dailyMessage/letterClose.svg";
import { FlexCenter } from "../../shared/css";

const DailyMessage = ({ dailyMessage, isOpen, userKey }) => {
  const queryClient = useQueryClient();

  /* lottie 속성값 설정 */
  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  /* 행운 편지 열람 */
  const [open, setOpen] = useState("stopped");
  const openMessage = useMutation(putIsOpen, {
    onSuccess: () => {
      queryClient.invalidateQueries("getMain");
    },
    onError: () => {
      ErrorAlert("잠시 후 다시 시도해주세요.");
    },
  });

  const messageHandler = () => {
    if (userKey) {
      if (!isOpen && dailyMessage) {
        setOpen("playing");
        setTimeout(() => OkayAlert(`${dailyMessage}`), [2000]);
        setTimeout(() => {
          openMessage.mutate();
        }, [2500]);
      } else {
        OkayAlert(`${dailyMessage}`);
      }
    } else {
      LoginAlert();
    }
  };

  return (
    <StContainer>
      <StTitle>오늘의 행운 편지</StTitle>
      {isOpen ? (
        <StWrap onClick={messageHandler}>
          <StOpen src={letterOpen} alt="openMessage" />
        </StWrap>
      ) : (
        <>
          {userKey ? (
            <StLottie onClick={messageHandler}>
              <Lottie
                config={defaultOptions}
                height="10rem"
                width="10rem"
                playingState={open}
              />
            </StLottie>
          ) : (
            <StWrap onClick={messageHandler}>
              <StClose src={letterClose} alt="letterClose" />
            </StWrap>
          )}
        </>
      )}
    </StContainer>
  );
};

export default DailyMessage;

const StContainer = styled.div`
  width: 100%;

  margin-bottom: ${(props) => props.theme.margins.sm};
  background-color: ${(props) => props.theme.Colors.bg3};
  padding: ${(props) => props.theme.paddings.xxl};
`;

const StTitle = styled.div`
  text-align: center;
  margin-bottom: ${(props) => props.theme.margins.sm};
  font-size: ${(props) => props.theme.fontSizes.xl};
  font-weight: ${(props) => props.theme.fontWeights.lg};
`;

const StWrap = styled.div`
  ${FlexCenter};
  cursor: pointer;
`;

const StLottie = styled.div`
  ${FlexCenter};
`;

const StOpen = styled.img`
  width: 9rem;
  height: 9rem;
`;

const StClose = styled.img`
  width: 9rem;
  height: 9rem;
`;
