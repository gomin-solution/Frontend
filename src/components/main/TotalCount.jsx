import React from "react";
import styled from "styled-components";

const TotalCount = () => {
  return (
    <StContainer>
      <div style={{ fontSize: "1.5rem" }}>누적 고민접기 완료 수</div>
      <div style={{ fontSize: "3rem", fontWeight: "600" }}> 563</div>
    </StContainer>
  );
};

export default TotalCount;

const StContainer = styled.div`
  background-color: #f4f2fb;
  width: 100%;
  height: 9rem;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  row-gap: 1rem;
  padding: 0rem ${(props) => props.theme.paddings.xsm};
  margin-top: ${(props) => props.theme.margins.xxl};
`;
