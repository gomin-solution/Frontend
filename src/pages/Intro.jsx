import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Container, FlexCenter } from "../shared/css";
import { Lottie } from "@crello/react-lottie";
import introA from "../image/intro/introA.gif";
import introB from "../image/intro/introB.json";
import introC from "../image/intro/introC.json";
import introD from "../image/intro/introD.json";
import logoSquare from "../image/logo/logoSquare.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Intro = () => {
  const nav = useNavigate();

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
        spaceBetween={0}
        centeredSlides={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        <StSwiperSlide>
          <StSkipBtn onClick={() => nav("/main")}>Skip</StSkipBtn>
          <img src={introA} alt="introA" />
        </StSwiperSlide>
        <StSwiperSlide>
          <Lottie config={defaultOptionsB} height="90%" width="90%" />
        </StSwiperSlide>
        <StSwiperSlide>
          <Lottie config={defaultOptionsC} height="90%" width="90%" />
        </StSwiperSlide>
        <StSwiperSlide>
          <Lottie config={defaultOptionsD} height="90%" width="90%" />
        </StSwiperSlide>
        <StSwiperSlide>
          <StInnerWrap>
            <img src={logoSquare} alt="logo" />
            <StNav bottom="28" onClick={() => nav("/login")}>
              로그인하러 가기
            </StNav>
            <StNav bottom="22" onClick={() => nav("/main")}>
              고민접기 둘러보기
            </StNav>
          </StInnerWrap>
        </StSwiperSlide>
      </StSwiper>
    </Stcontainer>
  );
};

export default Intro;

/*반응형 맞춤 */
const Stcontainer = styled.div`
  ${Container};
  background-color: ${(props) => props.theme.Colors.blueGray3};
  cursor: grab;
`;

const StSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
  .swiper-pagination-bullet-active {
    background: #a7eff0 !important;
  }
  .swiper-pagination-bullet {
    background: #00a1a3;
    opacity: 1;
  }
  .swiper-pagination-bullets {
    top: 10px;
    height: 5%;
  }

  //페이지 넘기는 버튼
  .swiper-button-next {
    top: 93%;
    right: 1rem;
    width: 3rem;
    border-radius: 3rem;

    background-color: #a7eff0;
    &::after {
      color: #4a6363;
      font-size: 1.3rem;
      font-weight: 900;
    }
  }

  .swiper-button-prev {
    display: none;
  }
`;

const StSkipBtn = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: ${(props) => props.theme.Colors.blueGray1};
  font-size: ${(props) => props.theme.fontSizes.lg};
  cursor: pointer;
  z-index: 99;
`;

const StSwiperSlide = styled(SwiperSlide)`
  width: 100%;
  height: 100%;
  ${FlexCenter};

  img {
    width: 100%;
  }
`;

const StNav = styled.div`
  background-color: ${(props) => props.theme.Colors.blueGray1};
  color: ${(props) => props.theme.Colors.blueGreen3};
  ${FlexCenter};
  width: 80%;
  height: 3rem;
  font-size: ${(props) => props.theme.fontSizes.lg};
  font-weight: ${(props) => props.theme.fontWeights.lg};
  cursor: pointer;
`;

const StInnerWrap = styled.div`
  ${FlexCenter};
  flex-flow: column;
  width: 100%;
  row-gap: 1.5rem;
  padding: ${(props) => props.theme.paddings.xxl};
  img {
    width: 50%;
    margin: 3rem;
  }
`;
