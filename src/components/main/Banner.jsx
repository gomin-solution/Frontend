import styled from "styled-components";
import bannerA from "../../image/banner/bannerA.png";
import bannerB from "../../image/banner/bannerB.png";
import bannerC from "../../image/banner/bannerC.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { useNavigate } from "react-router-dom";

export default function App() {
  const nav = useNavigate();

  return (
    <>
      <StSwFeat
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
        <StSwSlide url={bannerA} onClick={() => nav("/intro")} />
        <StSwSlide url={bannerB} />
        <StSwSlide url={bannerC} />
      </StSwFeat>
    </>
  );
}

const StSwFeat = styled(Swiper)`
  height: 11rem;
  &.swiper .swiper-pagination-bullet {
    background-color: ${(props) => props.theme.Colors.blueGray3};
    width: 0.4rem;
    height: 0.4rem;
  }
`;

const StSwSlide = styled(SwiperSlide)`
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center;
  cursor: pointer;
`;
