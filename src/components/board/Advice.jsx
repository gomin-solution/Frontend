import React from "react";
import styled from "styled-components";

const Advice = () => {
  return <StContainer>Advice</StContainer>;
};

export default Advice;

const StContainer = styled.div`
  padding: 0rem ${(props) => props.theme.paddings.xxl} 0rem;
`;
