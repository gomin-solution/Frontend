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
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useNavigate } from "react-router-dom";

const Intro = () => {
  const nav = useNavigate();

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
      <StWrap>
        <StSwFeat
          spaceBetween={0}
          centeredSlides={true}
          pagination={{ clickable: true }}
          navigation={false}
          modules={[Pagination, Navigation]}
        >
          <StSwiperSlide>
            <StPagenation>
              <NavigateNextIcon style={{ fontSize: "2rem" }} />
            </StPagenation>
            <Lottie config={defaultOptionsA} height="100%" width="100%" />
          </StSwiperSlide>
          <StSwiperSlide>
            <StPagenation>
              <NavigateNextIcon style={{ fontSize: "2rem" }} />
            </StPagenation>
            <Lottie config={defaultOptionsB} height="100%" width="100%" />
          </StSwiperSlide>
          <StSwiperSlide>
            <StPagenation>
              <NavigateNextIcon style={{ fontSize: "2rem" }} />
            </StPagenation>
            <Lottie config={defaultOptionsC} height="100%" width="100%" />
          </StSwiperSlide>
          <StSwiperSlide>
            <StNav top="0" onClick={() => nav("/login")}>
              로그인하러 가기
              <NavigateNextIcon style={{ fontSize: "2rem" }} />
            </StNav>
            <StNav top="6" onClick={() => nav("/main")}>
              고민접기 둘러보기
              <NavigateNextIcon style={{ fontSize: "2rem" }} />
            </StNav>
            <Lottie config={defaultOptionsD} height="100%" width="100%" />
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

const StWrap = styled.div`
  position: absolute;
  top: 10%;
  width: 100%;
`;

const StSwFeat = styled(Swiper)`
  &.swiper .swiper-pagination-bullet {
    display: none;
  }
`;

const StSwiperSlide = styled(SwiperSlide)`
  width: 80%;
  height: 100%;
  ${FlexCenter};
`;

const StPagenation = styled.div`
  color: ${(props) => props.theme.Colors.blueGray1};
  position: absolute;
  top: 0;
  right: 0;
  margin: 1rem;
  z-index: 99;
`;

const StNav = styled.div`
  color: ${(props) => props.theme.Colors.blueGray2};
  ${FlexCenter};
  justify-content: flex-end;
  width: 10rem;
  position: absolute;
  top: ${(props) => props.top}%;
  right: 0;
  margin: 1rem;
  border-bottom: 0.1rem solid ${(props) => props.theme.Colors.blueGray2};
  z-index: 99;
  cursor: pointer;
`;
