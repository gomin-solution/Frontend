import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Recommend = ({ recommend }) => {
  const nav = useNavigate();

  return (
    <StContainer>
      <StWrap>
        <StInnerWrap>
          <StLeftText>추천글</StLeftText>
          <div onClick={() => nav(`/board-advice/${recommend?.adviceId}`)}>
            <span style={{ color: "#7999FF" }}>[{recommend?.category}]</span>
            <span>&nbsp;{recommend?.title}</span>
          </div>
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
  font-size: ${(props) => props.theme.fontSizes.sm};
`;

const StLeftText = styled.div`
  background-color: #7999ff;
  color: white;
  padding: 0.3rem;
  margin-right: ${(props) => props.theme.margins.xsm};
`;
