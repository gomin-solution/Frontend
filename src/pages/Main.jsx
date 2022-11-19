import React, { useEffect } from "react";
import { Header3 } from "../elements/Header";
import Footer from "../elements/Footer";
import Banner from "../components/main/Banner";
import Recommend from "../components/main/Recommend";
import DailyMessage from "../components/main/DailyMessage";
import styled from "styled-components";
import AnswerAndBookmark from "../components/main/AnswerAndBookmark";
import TotalCount from "../components/main/TotalCount";
import { useQuery } from "react-query";
import { getMain } from "../api/mainApi";

function Main() {
  const { data } = useQuery("getMain", getMain, {
    refetchOnWindowFocus: false,
  });
  const recommend = data?.data.advice;
  const totalCount = data?.data.totalCount;

  console.log("recommend", recommend);
  console.log("totalCount", totalCount);

  return (
    <>
      <Header3 title={"메인페이지"} />
      <StContainer>
        <Banner />
        <StPaddingWrap>
          <Recommend recommend={recommend} />
          <StHr />
          <DailyMessage />
          <AnswerAndBookmark />
          <TotalCount totalCount={totalCount} />
        </StPaddingWrap>
      </StContainer>
      <Footer title={"메인"} />
    </>
  );
}

export default Main;

const StContainer = styled.div`
  width: 100%;
  position: absolute;
  height: calc(100vh - 9rem);
  overflow-y: scroll;
`;

const StPaddingWrap = styled.div`
  height: 100%;
  padding: 0rem ${(props) => props.theme.paddings.xxl};
`;

const StHr = styled.hr`
  height: 0.1rem;
  background-color: #dde1f9;
  margin-bottom: ${(props) => props.theme.paddings.xxl};
  border: none;
`;
