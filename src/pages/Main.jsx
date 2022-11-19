import { Header3 } from "../elements/Header";
import Footer from "../elements/Footer";
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
  return (
    <>
      <Header3 title={"메인페이지"} />
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
