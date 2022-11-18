import React from "react";
import styled from "styled-components";

const DailyMessage = () => {
  return (
    <StContainer>
      <StTitle>영국에서 온 편지</StTitle>
      <img
        style={{ width: "100%", height: "95%" }}
        src="./envelop.gif"
        alt="DailyMessage"
      />
    </StContainer>
  );
};

export default DailyMessage;

const StContainer = styled.div`
  width: 100%;
  height: 16rem;
  margin-bottom: ${(props) => props.theme.margins.sm};
`;

const StTitle = styled.div`
  text-align: center;
  font-size: ${(props) => props.theme.fontSizes.xl};
  font-weight: ${(props) => props.theme.fontWeights.lg};
`;
