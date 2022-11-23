import React from "react";
import styled from "styled-components";
import a from "../../image/banner/a.png";
import b from "../../image/banner/b.png";
import c from "../../image/banner/c.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <>
      <SwFeat
        spaceBetween={0}
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
    </>
  );
}

const SwFeat = styled(Swiper)`
  height: 11rem;
  margin-bottom: 1rem;
  &.swiper .swiper-pagination-bullet {
    background-color: white;
    width: 0.4rem;
    height: 0.4rem;
  }
`;

const SwSlide = styled(SwiperSlide)`
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center;
`;
