import React from "react";
import styled from "styled-components";

const Recommend = ({ recommend }) => {
  return (
    <StContainer>
      <StWrap>
        <StInnerWrap>
          <StLeftText>추천글</StLeftText>
          <span style={{ color: "#7999FF" }}>[{recommend?.title}]</span>
          <span>&nbsp;{recommend?.title}</span>
        </StInnerWrap>
      </StWrap>
    </StContainer>
  );
};

export default Recommend;

const StContainer = styled.div`
  margin-bottom: ${(props) => props.theme.paddings.xxl};
`;

const StWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StInnerWrap = styled.div`
  display: flex;
  align-items: center;
`;

const StLeftText = styled.div`
  background-color: #7999ff;
  color: white;
  padding: 0.3rem;
  margin-right: ${(props) => props.theme.margins.xsm};
`;
