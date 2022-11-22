import React, { useState } from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import getSearch from "../api/searchApi";
import Footer from "../elements/Footer";
import { Header2 } from "../elements/Header";
import styled from "styled-components";
import Choice from "../components/search/Choice";
import Advice from "../components/search/Advice";

const SearchResult = () => {
  const [boardCategory, setBoardCategory] = useState("choice");
  const menu = ["choice", "advice"];

  const { state: keyword } = useLocation();
  const { data } = useQuery(["keyword", keyword], () => getSearch(keyword));
  console.log(data?.choice);
  const choices = data?.choice;
  const advices = data?.advice;

  console.log("choices", choices);
  console.log("advices", advices);

  return (
    <>
      <Header2 title={"고민접기"} />
      <Stcontainer>
        {menu[0] === boardCategory ? (
          <>
            <StInnerWrap>
              <StBtn1 onClick={() => setBoardCategory("choice")}>
                골라주기
              </StBtn1>
              <StBtn2 onClick={() => setBoardCategory("advice")}>
                조언하기
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
                조언하기
              </StBtn1>
            </StInnerWrap>
            <Advice advices={advices} keyword={keyword} />
          </>
        )}
      </Stcontainer>
      <div
        style={{ position: "absolute", bottom: "2.5rem", right: "0.5rem" }}
      ></div>
      <Footer title={"고민접기"} />
    </>
  );
};

export default SearchResult;

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
