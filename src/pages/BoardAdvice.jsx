import { useNavigate } from "react-router-dom";

import Advice from "../components/board/Advice";
import Footer from "../elements/Footer";
import { Header2 } from "../elements/Header";
import Dial from "../components/Dial";
import styled from "styled-components";
import { Container, FlexCenter } from "../shared/css";
import ScrollBtn from "../elements/ScrollBtn";
import { useEffect, useRef, useState } from "react";
import { CategoryDial, FilterDial } from "../elements/MenuDial";

function Board() {
  const nav = useNavigate();
  const topBtn = useRef();
  const scrollGet = sessionStorage.getItem("AdviccePosition");
  const [scrollbar, setScrollbar] = useState(false);

  /* filter 적용 */
  const [categoryId, setCategoryId] = useState(0);
  const [filterId, setFilterId] = useState(0);

  const goTop = () => {
    topBtn.current.scrollTo({ top: 0, behavior: "smooth" });
  };

  function logScroll(e) {
    sessionStorage.setItem("AdviccePosition", e.target.scrollTop);
    if (e.target.scrollTop > 1000) {
      setScrollbar(true);
    } else {
      setScrollbar(false);
    }
  }

  useEffect(() => {
    topBtn.current.scrollTo({ top: scrollGet });
  }, []);

  //선택시 이름 바꾸기
  const filters = [
    { filter: "최신순", filterId: 0 },
    { filter: "조회순", filterId: 1 },
    { filter: "댓글순", filterId: 2 },
  ];

  return (
    <>
      <Header2 title={"고민접기"} navi="/board-advice" />
      <StFix>
        <StInnerWrap>
          <StBtn2 onClick={() => nav("/board-choice")}>골라주기</StBtn2>
          <StBtn1 onClick={() => nav("/board-advice")}>답해주기</StBtn1>
        </StInnerWrap>
        <StNavWrap>
          <CategoryDial setCategoryId={setCategoryId} total="total" />
          <FilterDial setFilterId={setFilterId} filters={filters} />
        </StNavWrap>
      </StFix>
      <Stcontainer ref={topBtn} onScroll={logScroll}>
        <Advice categoryId={categoryId} filterId={filterId} />
      </Stcontainer>
      <StDialWrap>
        <Dial />
      </StDialWrap>
      {scrollbar && <ScrollBtn goTop={goTop} />}
      <Footer title={"고민접기"} />
    </>
  );
}

export default Board;

const Stcontainer = styled.div`
  ${Container};
  margin-top: 10rem;
  height: calc(100vh - 14rem);
`;

const StInnerWrap = styled.div`
  ${FlexCenter};
  margin-top: 4rem;
  height: 4rem;

  column-gap: 4rem;
  font-weight: ${(props) => props.theme.fontWeights.lg};
`;

const StBtn1 = styled.div`
  ${FlexCenter};
  color: ${(props) => props.theme.Colors.blueGreen3};
  width: 5rem;
  padding-bottom: 0.4rem;
  border-bottom: 0.1rem solid ${(props) => props.theme.Colors.blueGreen3};
`;

const StBtn2 = styled.div`
  ${FlexCenter};
  width: 5rem;
  padding-bottom: 0.4rem;
`;

const StDialWrap = styled.div`
  position: fixed;
  bottom: 5rem;
  right: 1rem;

  @media (min-width: 450px) {
    position: absolute;
    bottom: 5rem;
    right: 1rem;
  }

  @media (min-width: 900px) and (min-height: 500px) {
    position: absolute;
    bottom: 5rem;
    right: 1rem;
  }
`;

const StNavWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const StFix = styled.div`
  position: fixed;
  width: 100%;
  max-width: 26rem;

  z-index: 99;
  padding: 0rem 1.5rem;
`;
