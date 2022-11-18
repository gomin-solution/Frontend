import React from "react";
import styled from "styled-components";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Recommend = () => {
  return (
    <StContainer>
      <StWrap>
        <StInnerWrap>
          <StLeftText>추천</StLeftText>
          <span style={{ color: "#7999FF" }}>[연애]</span>
          <span>&nbsp;이대로 괜찮을까요?</span>
        </StInnerWrap>
        <KeyboardArrowDownIcon />
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
