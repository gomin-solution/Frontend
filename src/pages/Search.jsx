import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../elements/Footer";
import { Header7 } from "../elements/Header";
import Dial from "../components/board/Dial";
import styled from "styled-components";
import Choice from "../components/board/Choice";
import NorthIcon from "@mui/icons-material/North";
import SouthIcon from "@mui/icons-material/South";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const Search = () => {
  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  return (
    <>
      <Header7 title={"고민 접기"} />
      <StDial>
        <Dial />
      </StDial>
      <Footer title={"고민 접기"} />
      <Stcontainer>
        <StRankTitleWrap>
          <span style={{ fontWeight: "600" }}>홍길동님의 답변이 필요해요</span>
          <span style={{ fontSize: "0.875rem" }}>2022. 11. 21. 기준</span>
        </StRankTitleWrap>
        <StRankWrap>
          <span>1 [연애] 이대로 헤어지는 게 맞을까요?</span>
          <NorthIcon style={{ fontSize: "1rem", color: "darkred" }} />
        </StRankWrap>
        <StRankWrap>
          <span>2 [연애] 초반엔 정말 좋았는데</span>
          <SouthIcon style={{ fontSize: "1rem", color: "navy" }} />
        </StRankWrap>
        <hr style={{ marginTop: "2rem" }} />
        <StTitle>최근 검색어</StTitle>
        <Stack direction="row" spacing={1}>
          <Chip label="여행" variant="outlined" onDelete={handleDelete} />
        </Stack>
        <StTitle>추천 검색어</StTitle>
        <Stack direction="row" spacing={1}>
          <Chip label="여행" variant="outlined" />
        </Stack>
      </Stcontainer>
    </>
  );
};

export default Search;

const Stcontainer = styled.div`
  width: 100%;
  position: absolute;
  overflow: auto;
  height: calc(100vh - 8rem);
  padding: ${(props) => props.theme.paddings.xl};
`;

const StDial = styled.div`
  position: absolute;
  bottom: 2.5rem;
  right: 0.5rem;
`;

const StRankTitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${(props) => props.theme.margins.xl};
`;

const StRankWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${(props) => props.theme.margins.xsm};
  font-size: ${(props) => props.theme.fontSizes.sm};
`;

const StTitle = styled.div`
  margin: 2.2rem 0rem 1.2rem;
  font-weight: ${(props) => props.theme.fontWeights.lg}; ;
`;
