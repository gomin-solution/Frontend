import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import AdviceList from "./AdviceList";

const Advice = () => {
  const nav = useNavigate();

  return (
    <div
      style={{
        marginBottom: `${(props) => props.theme.paddings.sm}`,
        padding: "0rem 1.5rem",
      }}
    >
      <StTextWrap>
        <StBold>실시간 인기 고민글</StBold>
        <span
          style={{ color: "#939393", cursor: "pointer" }}
          onClick={() => nav("#")}
        >
          더보기
        </span>
      </StTextWrap>
      <StListWrap>
        <AdviceList />
        <AdviceList />
        <AdviceList />
      </StListWrap>
    </div>
  );
};

export default Advice;

const StTextWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${(props) => props.theme.margins.sm};
`;

const StBold = styled.span`
  font-weight: ${(props) => props.theme.fontWeights.lg};
`;

const StListWrap = styled.div`
  height: 10rem;
`;
