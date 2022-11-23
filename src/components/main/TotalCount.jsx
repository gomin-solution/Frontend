import dayjs from "dayjs";
import React from "react";
import styled from "styled-components";

const TotalCount = ({ totalCount }) => {
  const nowTime = dayjs().format("YYYY-MM-DD HH:mm");

  return (
    <StContainer>
      <StWrap>
        <div style={{ display: "flex", flexFlow: "column" }}>
          <StTitle>지금까지 해결된 고민</StTitle>
          <div style={{ fontSize: "0.875rem" }}>{nowTime} 기준</div>
        </div>
        <div style={{ fontSize: "3.5rem", fontWeight: "600" }}>
          {totalCount}
        </div>
      </StWrap>
    </StContainer>
  );
};

export default TotalCount;

const StContainer = styled.div`
  background-color: #f4f2fb;
  width: 100%;
  height: 6rem;
`;

const StWrap = styled.div`
  background-color: #f4f2fb;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 2.5rem;
  padding: 0rem ${(props) => props.theme.paddings.xsm};
`;

const StTitle = styled.div`
  margin: 1rem 0rem;
  font-size: 1.25rem;
  font-weight: ${(props) => props.theme.fontWeights.lg};
`;
