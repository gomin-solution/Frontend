import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import instance from "../../shared/api";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";

const Choice = () => {
  const { choiceId } = useParams();

  const [choice1per, setChoice1per] = useState(30);
  const [choice2per, setChoice2per] = useState(70);

  const [isChange, setIsChange] = useState(true);

  //
  const [choiceNum, setChoiceNum] = useState(0);
  const [isChoice, setIsChoice] = useState(false);

  const choiceSubmit = async (e) => {
    setChoiceNum(e.target.value);
    setIsChoice(!isChoice);
    const payload = {
      choiceNum,
      isChoice,
    };
    const res = await instance.post(`/choice/${choiceId}`, payload);
    setChoice1per(res.choice1per);
    setChoice2per(res.choice2per);
    setIsChange(!isChange);
  };

  // useEffect(async () => {
  //   const res = await instance.get("/choice");
  //   setChoice1per(res.choice1per);
  //   setChoice2per(res.choice2per);
  // });

  return (
    <>
      <div>오늘의 인기글</div>
      <div>
        <span>더보기</span>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div>
              <Stimg src="" alt="" />
              <span>닉네임</span>
              <span>날짜</span>
            </div>
            <p>제목</p>
            <p>000명 참여중</p>
            <div>
              <span>1번: 직장인</span>
              <span>2번: 프리랜서</span>
            </div>
            {isChange ? (
              <StChoiceWrap>
                <button onClick={choiceSubmit} value="1">
                  1번
                </button>
                <button onClick={choiceSubmit} value="2">
                  2번
                </button>
              </StChoiceWrap>
            ) : (
              <StChoiceWrap>
                <StChoice1 width={choice1per}>{choice1per}%</StChoice1>
                <StChoice2 width={choice2per}>{choice2per}%</StChoice2>
              </StChoiceWrap>
            )}
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Choice;

const Stimg = styled.img`
  width: 1rem;
  height: 1rem;
  border-radius: 1rem;
`;

const StChoiceWrap = styled.div`
  width: 100%;
  display: flex;
`;

const StChoice1 = styled.div`
  background-color: rgb(255, 206, 206);
  width: ${(props) => props.width}%;
  text-align: left;
`;

const StChoice2 = styled.div`
  background-color: #c2c2ff;
  width: ${(props) => props.width}%;
  text-align: right;
`;
