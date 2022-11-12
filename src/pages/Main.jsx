import React from "react";
import { Header3 } from "../elements/Header";
import Choice from "../components/choice/Choice";
import Advice from "../components/advice/Advice";
import styled from "styled-components";
import { getMain } from "../api/mainApi";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

function Main() {
  const { isLoading } = useQuery("getMain", getMain, {
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <span>LOADING</span>;

  return (
    <>
      <Header3 title={"메인페이지"} />
      {/* 모바일 하단 잘림 방지  */}
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
        <SwSlide url={"#"} />
        <SwSlide url={"#"} />
        <SwSlide url={"#"} />
      </SwFeat>
      <Choice />
      <Advice />
    </>
  );
}

export default Main;

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
