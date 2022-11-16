import React from "react";
import { useNavigate } from "react-router-dom";
import { Header3 } from "../elements/Header";
import Choice from "../components/main/Choice";
import Advice from "../components/main/Advice";
import Footer from "../elements/Footer";
import { useQuery } from "react-query";
import { getAllData } from "../api/mainApi";
import a from "../image/banner/a.png";
import b from "../image/banner/b.png";
import c from "../image/banner/c.png";

import styled from "styled-components";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

function Main() {
  const nav = useNavigate();

  const { data, error } = useQuery("getAllData", getAllData);
  if (error) {
    return console.log(error.message);
  }
  const choices = data?.data.mainpage.choice;
  const advices = data?.data.mainpage.advice;

  return (
    <>
      <Header3 title={"메인페이지"} />
      {/* 모바일 하단 잘림 방지  */}
      <StContainer>
        <SwFeat
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
        >
          <SwSlide url={a} />
          <SwSlide url={b} />
          <SwSlide url={c} />
        </SwFeat>
        <StTextWrap>
          <StBold>실시간 인기 고민투표</StBold>
          <StPlus onClick={() => nav("#")}>더보기</StPlus>
        </StTextWrap>
        <Choice choices={choices} />
        <StTextWrap>
          <StBold>실시간 인기 고민글</StBold>
          <StPlus onClick={() => nav("#")}>더보기</StPlus>
        </StTextWrap>
        {advices?.map((advice) => (
          <Advice advice={advice} key={advice.adviceId} />
        ))}
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

const SwFeat = styled(Swiper)`
  background-color: skyblue;
  height: 10rem;
  margin-bottom: 2rem;
  &.swiper .swiper-pagination-bullet {
    background-color: white;
    width: 0.3rem;
    height: 0.3rem;
  }
`;

const SwSlide = styled(SwiperSlide)`
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center;
`;

const StTextWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${(props) => props.theme.margins.sm};
  padding: 0rem ${(props) => props.theme.paddings.xxl};
`;

const StBold = styled.span`
  font-weight: ${(props) => props.theme.fontWeights.lg};
`;

const StPlus = styled.span`
  color: #939393;
  cursor: pointer;
`;
