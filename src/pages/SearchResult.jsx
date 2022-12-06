import React, { useState } from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { getSearch } from "../api/searchApi";
import Footer from "../elements/Footer";
import { Header1 } from "../elements/Header";
import styled from "styled-components";
import Choice from "../components/search/Choice";
import Advice from "../components/search/Advice";
import { Container, FlexCenter } from "../shared/css";

const SearchResult = () => {
  const [boardCategory, setBoardCategory] = useState("choice");
  const menu = ["choice", "advice"];

  const { state: keyword } = useLocation();
  const { data } = useQuery(["getSearch", keyword], () => getSearch(keyword));
  const choices = data?.choice;
  const advices = data?.advice;

  return (
    <>
      <Header1 title={"검색 결과"} />
      <Stcontainer>
        {menu[0] === boardCategory ? (
          <>
            <StInnerWrap>
              <StBtn1 onClick={() => setBoardCategory("choice")}>
                골라주기
              </StBtn1>
              <StBtn2 onClick={() => setBoardCategory("advice")}>
                답해주기
              </StBtn2>
            </StInnerWrap>
            <Choice choices={choices} keyword={keyword} />
          </>
        ) : (
          <>
            <StInnerWrap>
              <StBtn2 onClick={() => setBoardCategory("choice")}>
                골라주기
              </StBtn2>
              <StBtn1 onClick={() => setBoardCategory("advice")}>
                답해주기
              </StBtn1>
            </StInnerWrap>
            <Advice advices={advices} keyword={keyword} />
          </>
        )}
      </Stcontainer>
      <div
        style={{ position: "absolute", bottom: "2.5rem", right: "0.5rem" }}
      ></div>
      <Footer title={"고민 접기"} />
    </>
  );
};

export default SearchResult;

const Stcontainer = styled.div`
  ${Container};
  height: calc(100vh - 8rem);
`;

const StInnerWrap = styled.div`
  ${FlexCenter};
  margin-top: ${(props) => props.theme.margins.xxl};
  column-gap: 4rem;
  font-weight: ${(props) => props.theme.fontWeights.lg};
`;

const StBtn1 = styled.div`
  ${FlexCenter};
  color: ${(props) => props.theme.Colors.blueGreen3};
  width: 5rem;
  margin-bottom: ${(props) => props.theme.margins.xxl};
  padding-bottom: 0.4rem;
  border-bottom: 0.1rem solid ${(props) => props.theme.Colors.blueGreen3};
`;

const StBtn2 = styled.div`
  ${FlexCenter};
  width: 5rem;
  margin-bottom: ${(props) => props.theme.margins.xxl};
  padding-bottom: 0.4rem;
`;
