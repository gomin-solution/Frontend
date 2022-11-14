import React from "react";
import styled from "styled-components";

const Choice = () => {
  return <StContainer>Choice</StContainer>;
};

export default Choice;

const StContainer = styled.div`
  padding: 0rem ${(props) => props.theme.paddings.xxl} 0rem;
`;
