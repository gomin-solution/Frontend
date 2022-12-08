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
      <StWrap>
        <StSkipBtn onClick={() => nav("/main")}>skip</StSkipBtn>
        <StSwFeat
          spaceBetween={0}
          centeredSlides={true}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          <StSwiperSlide>
            <StIntro>
              <img src={introA} alt="introA" />
            </StIntro>
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
          <StSwiperSlide style={{ ".swiper-button-next": { display: "none" } }}>
            <StInnerWrap>
              <StImg src={logoSquare} alt="logo" />
              <StNav bottom="28" onClick={() => nav("/login")}>
                로그인하러 가기
              </StNav>
              <StNav bottom="22" onClick={() => nav("/main")}>
                고민접기 둘러보기
              </StNav>
            </StInnerWrap>
          </StSwiperSlide>
        </StSwFeat>
      </StWrap>
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

const StSkipBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.5rem 0.7rem;
  color: ${(props) => props.theme.Colors.blueGray1};
  font-size: ${(props) => props.theme.fontSizes.lg};
  cursor: pointer;
  z-index: 99;
`;

const StWrap = styled.div`
  position: absolute;
  top: 10%;
  width: 100%;
`;

const StSwFeat = styled(Swiper)`
  &.swiper .swiper-pagination-bullet {
    display: none;
  }
  .swiper-button-prev {
    display: none;
  }
  .swiper-button-next {
    color: white;
    &::after {
      font-size: ${(props) => props.theme.fontSizes.xxl};
      font-weight: ${(props) => props.theme.fontWeights.lg};
      position: absolute;
      bottom: 0;
    }
  }
`;

const StSwiperSlide = styled(SwiperSlide)`
  width: 80%;
  height: 100%;
  ${FlexCenter};
`;

const StIntro = styled.div`
  width: 100%;
  height: 100%;
`;

const StInnerWrap = styled.div`
  ${FlexCenter};
  flex-flow: column;
  width: 100%;
  row-gap: 1.5rem;
  padding: ${(props) => props.theme.paddings.xxl};
`;

const StImg = styled.img`
  margin: 3rem;
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
