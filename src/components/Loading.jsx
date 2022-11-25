import React from "react";
import styled from "styled-components";
import CircularProgress from "@mui/material/CircularProgress";
import logoSquare from "../image/logo/logoSquare.svg";

const Loading = () => {
  return (
    <StLoading>
      <CircularProgress />
      <StImg src={logoSquare} alt="logoBird" />
    </StLoading>
  );
};

export default Loading;

const StLoading = styled.div`
  width: 100%;
  position: absolute;
  top: 40%;
  display: flex;
  flex-flow: column;
  align-items: center;
  row-gap: 3rem;
`;

const StImg = styled.img`
  width: 8rem;
  height: 8rem;
`;
