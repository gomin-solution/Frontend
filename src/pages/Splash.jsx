import React, { useEffect } from "react";
import { Lottie } from "@crello/react-lottie";
import animationData from "../image/splash/simbol.json";
import { Container, FlexCenter } from "../shared/css";
import styled from "styled-components";

const Splash = () => {
  /* lottie 속성값 설정 */
  const defaultOptions = {
    loop: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    setTimeout(() => {
      window.location.href = "/main";
    }, 4300);
  }, []);

  return (
    <StContainer>
      <Lottie config={defaultOptions} width="14rem" height="14rem" />
    </StContainer>
  );
};

export default Splash;

const StContainer = styled.div`
  ${Container};
  ${FlexCenter};
`;

// const StWrap = styled.div`
//   ${FlexCenter};
// `;
