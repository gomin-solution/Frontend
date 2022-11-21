import React, { useState } from "react";
import { useQuery } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
import getSearch from "../api/searchApi";
import Footer from "../elements/Footer";
import { Header2 } from "../elements/Header";
import Dial from "../components/board/Dial";
import styled from "styled-components";
import SearchChoice from "../components/board/SearchChoice";
import SearchAdvice from "../components/board/SearchAdvice";
import Choice from "../components/board/Choice";

const Search = () => {
  const nav = useNavigate();

  return (
    <>
      <Header2 title={"고민 접기"} />
      <Stcontainer>
        <StInnerWrap>
          <StBtn1 onClick={() => nav("/board-choice")}>골라주기</StBtn1>
          <StBtn2 onClick={() => nav("/board-advice")}>답해주기</StBtn2>
        </StInnerWrap>
        <Choice />
      </Stcontainer>
      <div style={{ position: "absolute", bottom: "2.5rem", right: "0.5rem" }}>
        <Dial />
      </div>
      <Footer title={"고민 접기"} />
    </>
  );
};

export default Search;

const Stcontainer = styled.div`
  width: 100%;
  position: absolute;
  overflow: auto;
  height: calc(100vh - 8rem);
`;

const StInnerWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${(props) => props.theme.margins.xxl};
  column-gap: 6rem;
`;

const StBtn1 = styled.button`
  width: 4rem;
  margin-bottom: ${(props) => props.theme.margins.xxl};
  padding-bottom: 0.4rem;
  box-shadow: 0rem 0.1rem 0rem 0rem gray;
  font-weight: ${(props) => props.theme.fontWeights.lg};
`;

const StBtn2 = styled.button`
  width: 4rem;
  margin-bottom: ${(props) => props.theme.margins.xxl};
  padding-bottom: 0.4rem;
  font-weight: ${(props) => props.theme.fontWeights.lg};
`;
