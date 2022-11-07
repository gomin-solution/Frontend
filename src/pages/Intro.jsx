import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Layout from "../components/layout/Layout";
import styled from "styled-components";

const Intro = () => {
  return (
    <Layout>
      <StSwiper
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </StSwiper>
    </Layout>
  );
};

export default Intro;

const StSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
`;
