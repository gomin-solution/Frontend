import React, { useEffect } from "react";
import { Lottie } from "@crello/react-lottie";
import animationData from "../image/splash/simbol.json";
import { Container, FlexCenter } from "../shared/css";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { userKeyAtom } from "../state/atom";

const Splash = () => {
  /* lottie 속성값 설정 */
  const defaultOptions = {
    loop: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const userKey = useRecoilValue(userKeyAtom);
  console.log("userKey", userKey);
  useEffect(() => {
    setTimeout(() => {
      if (userKey) {
        window.location.href = "/main";
      } else {
        window.location.href = "/intro";
      }
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
