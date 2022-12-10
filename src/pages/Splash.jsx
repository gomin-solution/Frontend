import React, { useEffect } from "react";
import { Lottie } from "@crello/react-lottie";
import animationData from "../image/splash/simbol.json";
import { Container, FlexCenter } from "../shared/css";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { userKeyAtom } from "../state/atom";
import { getCookie } from "../api/cookie";
import { useNavigate } from "react-router-dom";

const Splash = () => {
  const nav = useNavigate();

  /* lottie 속성값 설정 */
  const defaultOptions = {
    loop: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const userKey = useRecoilValue(userKeyAtom);
  useEffect(() => {
    setTimeout(() => {
      if (userKey) {
        nav("/main");
      } else {
        nav("/intro");
      }
    }, 2500);
  }, [userKey]);

  /* token 없을 시 userKey 삭제: 로그아웃하지 않고 브라우저 종료한 경우 대비 */
  useEffect(() => {
    const accToken = getCookie("accessToken");
    if (!accToken) {
      localStorage.removeItem("recoil-persist");
    }
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
