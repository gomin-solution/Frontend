import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import instance from "../../shared/api";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

// MUI Icon
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const Choice = () => {
  const { choiceId } = useParams();
  const nav = useNavigate();

  const [choice1per, setChoice1per] = useState(30);
  const [choice2per, setChoice2per] = useState(70);

  const [isBookmark, setIsBookmark] = useState(false);
  const [isChange, setIsChange] = useState(false);

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

  const bookmarkChange = () => {
    setIsBookmark(!isBookmark);
  };

  return (
    <div style={{ marginBottom: "36px", padding: "0px 20px" }}>
      <StTextWrap>
        <span style={{ fontWeight: "600" }}>이주의 고민투표</span>
        <span style={{ cursor: "pointer" }} onClick={() => nav("#")}>
          더보기
        </span>
      </StTextWrap>
      <div>
        <Sw
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          <SwiperSlide>
            <StChoiceTextWrap>
              <div>
                <Stimg
                  src="https://www.pngitem.com/pimgs/m/391-3918613_personal-service-platform-person-icon-circle-png-transparent.png"
                  alt=""
                />
                <span>닉네임</span>
              </div>
              {!isBookmark ? (
                <BookmarkBorderIcon
                  style={{ cursor: "pointer" }}
                  value={isBookmark}
                  onClick={bookmarkChange}
                />
              ) : (
                <BookmarkIcon
                  style={{ cursor: "pointer" }}
                  value={isBookmark}
                  onClick={bookmarkChange}
                />
              )}
            </StChoiceTextWrap>
            <p style={{ fontWeight: "600", marginBottom: "6px" }}>
              퇴사 후... 직장인 vs 프리랜서
            </p>
            <StTextWrap2>
              <span style={{ color: "#999999" }}>000명 참여중</span>
              <span style={{ color: "#999999" }}>2022. 11. 12.</span>
            </StTextWrap2>
            <StTextWrap3>
              <span>직장인</span>
              <span>프리랜서</span>
            </StTextWrap3>
            {!isChange ? (
              <StChoiceWrap>
                <StChoiceBtn
                  onClick={choiceSubmit}
                  value="1"
                  backColor="#9F9F9F"
                >
                  1번
                </StChoiceBtn>
                <StChoiceBtn
                  onClick={choiceSubmit}
                  value="2"
                  backColor="#6D6D6D"
                >
                  2번
                </StChoiceBtn>
              </StChoiceWrap>
            ) : (
              <StChoiceWrap>
                <StChoice1 width={choice1per}>{choice1per}%</StChoice1>
                <StChoice2 width={choice2per}>{choice2per}%</StChoice2>
              </StChoiceWrap>
            )}
          </SwiperSlide>
        </Sw>
      </div>
    </div>
  );
};

export default Choice;

const Sw = styled(Swiper)`
  background-color: #f8f8f8;
  padding: 10px;
  position: relative;
  &.swiper .swiper-button-next {
    background: url("https://cdn-icons-png.flaticon.com/512/17/17437.png")
      no-repeat;
    background-size: 100% auto;
    background-position: center;
    /* opacity: 0.2; */
    position: absolute;
    top: 30%;
    right: 3%;
    opacity: 0.2;
    &::after {
      display: none;
    }
  }
  &.swiper .swiper-button-prev {
    &::after {
      display: none;
    }
  }
`;

const StTextWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;

const StTextWrap2 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const StTextWrap3 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
`;

const StChoiceTextWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const Stimg = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 6px;
`;

const StChoiceWrap = styled.div`
  width: 100%;
  display: flex;
`;

const StChoiceBtn = styled.button`
  width: 100%;
  height: 32px;
  background-color: ${(props) => props.backColor};
  color: white;
  font-weight: 600;
  border: none;
  cursor: pointer;
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
