import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { putIsOpen } from "../../api/mainApi";
import Lottie from "react-lottie";

/*스타일 관련 */
import styled from "styled-components";
import { Alert4 } from "../../elements/Alert";
import animationData from "../../image/dailyMessage/letter_lottie.json";
import letterOpen from "../../image/dailyMessage/letterOpen.svg";
import letterClose from "../../image/dailyMessage/letterClose.svg";
import { FlexCenter } from "../../shared/css";

const DailyMessage = ({ isCookie, dailyMessage, isOpen }) => {
  const queryClient = useQueryClient();

  /* lottie 속성값 설정 */
  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  /* 행운 편지 열람 */
  const [open, setOpen] = useState(true);
  const openMessage = useMutation(putIsOpen, {
    onSuccess: () => {
      queryClient.invalidateQueries("getMain");
    },
  });

  const messageHandler = () => {
    if (isCookie) {
      if (!isOpen) {
        setOpen(false);
        setTimeout(() => Alert4(`${dailyMessage}`), [2000]);
        setTimeout(() => {
          openMessage.mutate();
        }, [2500]);
      } else {
        Alert4(`${dailyMessage}`);
      }
    } else {
      Alert4("로그인 후 이용해주세요.");
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
          {isCookie ? (
            <div onClick={messageHandler}>
              <Lottie
                options={defaultOptions}
                height="12rem"
                width="12rem"
                isStopped={open}
              />
            </div>
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
  height: 13rem;
  margin-bottom: ${(props) => props.theme.margins.sm};
  background-color: ${(props) => props.theme.Colors.bg3};
  padding: ${(props) => props.theme.paddings.xxl};
`;

const StTitle = styled.div`
  text-align: center;
  font-size: ${(props) => props.theme.fontSizes.xl};
  font-weight: ${(props) => props.theme.fontWeights.lg};
`;

const StWrap = styled.div`
  height: 100%;
  ${FlexCenter};
`;

const StOpen = styled.img`
  width: 10rem;
  height: 10rem;
`;

const StClose = styled.img`
  width: 10rem;
  height: 10rem;
`;
