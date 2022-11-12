import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import AdviceList from "./AdviceList";

const Advice = () => {
  const nav = useNavigate();

  return (
    <div style={{ padding: "0px 20px" }}>
      <StTextWrap style={{ marginBottom: "12px" }}>
        <span style={{ fontWeight: "600" }}>이주의 고민글</span>
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
  margin-bottom: 12px;
`;

const StListWrap = styled.div`
  height: 148px;
  overflow-x: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
