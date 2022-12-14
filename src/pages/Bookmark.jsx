import React, { useState } from "react";
import { useQuery } from "react-query";
import Footer from "../elements/Footer";
import { Header1 } from "../elements/Header";
import styled from "styled-components";
import { getBookmark } from "../api/mainApi";
import Choice from "../components/bookmark/Choice";
import Advice from "../components/bookmark/Advice";
import { Container, FlexCenter } from "../shared/css";

const Bookmark = () => {
  const [boardCategory, setBoardCategory] = useState("choice");
  const menu = ["choice", "advice"];

  const { data } = useQuery("getBookmark", getBookmark);
  const choices = data?.data?.choice;
  const advices = data?.data?.advice;

  return (
    <>
      <Header1 title={"북마크"} navi="/main" />
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
            <Choice choices={choices} reGet="reGet" />
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
            <Advice advices={advices} />
          </>
        )}
      </Stcontainer>
      <div
        style={{ position: "absolute", bottom: "2.5rem", right: "0.5rem" }}
      ></div>
      <Footer title={"메인"} />
    </>
  );
};

export default Bookmark;

const Stcontainer = styled.div`
  ${Container};
  height: calc(100vh - 8rem);
  margin-top: 4rem;
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
