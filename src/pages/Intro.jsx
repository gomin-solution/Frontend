import styled from "styled-components";
import { Lottie } from "@crello/react-lottie";
import introA from "../image/intro/introA.json";
import introB from "../image/intro/introB.json";
import introC from "../image/intro/introC.json";
import introD from "../image/intro/introD.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Container, FlexCenter } from "../shared/css";

const Intro = () => {
  /* lottie 속성값 설정 */
  const defaultOptionsA = {
    loop: true,
    animationData: introA,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptionsB = {
    loop: true,
    animationData: introB,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptionsC = {
    loop: true,
    animationData: introC,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptionsD = {
    loop: true,
    animationData: introD,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Stcontainer>
      <StSwiper
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        <StSwiperSlide>
          <Lottie config={defaultOptionsA} height="100%" width="100%" />
        </StSwiperSlide>
        <StSwiperSlide>
          <Lottie config={defaultOptionsB} height="100%" width="100%" />
        </StSwiperSlide>
        <StSwiperSlide>
          <Lottie config={defaultOptionsC} height="100%" width="100%" />
        </StSwiperSlide>
        <StSwiperSlide>
          <Lottie config={defaultOptionsD} height="100%" width="100%" />
        </StSwiperSlide>
      </StSwiper>
    </Stcontainer>
  );
};

export default Intro;

/*반응형 맞춤 */
const Stcontainer = styled.div`
  ${Container};
`;

const StSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
`;

const StSwiperSlide = styled(SwiperSlide)`
  width: 80%;
  height: 100%;
  ${FlexCenter};
`;
