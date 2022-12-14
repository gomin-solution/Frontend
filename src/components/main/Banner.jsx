import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import bannerA from "../../image/banner/bannerA.png";
import bannerB from "../../image/banner/bannerB.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

export const Banner = () => {
  const nav = useNavigate();

  return (
    <>
      <StSwFeat
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <StSwSlide
          url={bannerA}
          onClick={() => window.open("https://forms.gle/18aAS5XKV6hsXqoH9")}
        />
        <StSwSlide url={bannerB} onClick={() => nav("/help")} />
      </StSwFeat>
    </>
  );
};

export default Banner;

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
