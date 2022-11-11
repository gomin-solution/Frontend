import React from "react";
import styled from "styled-components";
import a from "../../image/a.png";
import b from "../../image/b.png";
import c from "../../image/c.png";
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
      <Sw
        spaceBetween={30}
        centeredSlides={true}
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
        <SwiperSlide>
          <StImg src={a} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <StImg src={b} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <StImg src={c} alt="" />
        </SwiperSlide>
      </Sw>
    </>
  );
}

const Sw = styled(Swiper)`
  background-color: gray;
  height: 172px;
  &.swiper .swiper-pagination-bullet {
    background-color: white;
  }
`;

const StImg = styled.img`
  background-size: auto;
  background-repeat: no-repeat;
`;
