import React from "react";
import styled from "styled-components";

const TotalCount = ({ totalCount }) => {
  return (
    <StContainer>
      <StWrap>
        <div style={{ fontSize: "0.8rem" }}>지금까지 해결된 고민</div>
        <div style={{ fontSize: "3rem", fontWeight: "600" }}>{totalCount}</div>
      </StWrap>
    </StContainer>
  );
};

export default TotalCount;

const StContainer = styled.div`
  background-color: #f4f2fb;
  width: 100%;
  height: 9rem;
`;

const StWrap = styled.div`
  background-color: #f4f2fb;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;
  padding: 0rem ${(props) => props.theme.paddings.xsm};
  margin-top: ${(props) => props.theme.margins.xxl};
`;
