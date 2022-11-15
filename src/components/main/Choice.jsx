import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { useMutation, useQueryClient } from "react-query";

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
import { bookmark, postChoice } from "../../api/mainApi";

const Choice = ({ choices }) => {
  const queryClient = useQueryClient();

  const [isBookMark, setIsBookMark] = useState(false);

  /* 투표 선택 시 payload 설정을 위한 useState 작성 */
  const [choiceNum, setChoiceNum] = useState(0);
  const [isChoice, setIsChoice] = useState(false);
  console.log("isChoice", isChoice);
  const [postChoiceId, setPostChoiceId] = useState(0);
  // const [choicesPost, setChoicesPost] = useState({
  //   choiceNum: 0,
  //   isChoice: false,
  //   postChoiceId: 0,
  // })

  const choiceSubmit = async (e, choiceId) => {
    e.preventDefault();
    // setChoicesPost({
    //   choiceNum(e.target.value),
    //   isChoice((prev) => !prev),
    //   postChoiceId(choiceId),
    // })
    setChoiceNum(Number(e.target.value));
    setIsChoice(!isChoice);
    setPostChoiceId(choiceId);
  };

  const choiceMutation = useMutation(postChoice, {
    onSuccess: () => {
      queryClient.invalidateQueries("getMain");
    },
  });

  const bookmarkChange = (choiceId) => {
    setIsBookMark(!isBookMark);
    setPostChoiceId(choiceId);
  };

  const bookmarkMutation = useMutation(bookmark, {
    onSuccess: () => {
      queryClient.invalidateQueries("getMain");
    },
  });

  /* useEffect를 사용하여 setState값 할당 후 서버와 통신 (투표 선택) */
  useEffect(() => {
    if (choiceNum !== 0) {
      choiceMutation.mutate({
        choiceId: postChoiceId,
        choiceNum,
        isChoice,
      });
    }
  }, [isChoice, choiceMutation, postChoiceId, choiceNum]);

  /* useEffect를 사용하여 setState값 할당 후 서버와 통신 (북마크) */
  useEffect(() => {
    if (postChoiceId !== 0) {
      bookmarkMutation.mutate({
        choiceId: postChoiceId,
        isBookMark,
      });
    }
  }, [isBookMark, bookmarkMutation, postChoiceId]);

  console.log("isBookMark", isBookMark);

  return (
    <div style={{ marginBottom: "1rem", padding: "0rem 1.5rem" }}>
      <Sw
        centeredSlides={false}
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {choices?.map((choice) => (
          <SwiperSlide key={choice.choiceId}>
            <StChoiceTextWrap>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Stimg
                  src="https://www.pngitem.com/pimgs/m/391-3918613_personal-service-platform-person-icon-circle-png-transparent.png"
                  alt=""
                />
                <span>{choice.nickname}</span>
              </div>
              {!choice?.isBookMark ? (
                <BookmarkBorderIcon
                  style={{ cursor: "pointer" }}
                  value={isBookMark}
                  onClick={() => bookmarkChange(choice.choiceId)}
                />
              ) : (
                <BookmarkIcon
                  style={{ cursor: "pointer" }}
                  value={isBookMark}
                  onClick={() => bookmarkChange(choice.choiceId)}
                />
              )}
            </StChoiceTextWrap>
            <StChoiceName>{choice.title}</StChoiceName>
            <StTextWrap2>
              <span
                style={{ color: `${(props) => props.theme.fontColors.fong1}` }}
              >
                {choice.choiceCount}
              </span>
              <span
                style={{ color: `${(props) => props.theme.fontColors.fong1}` }}
              >
                {choice.createdAt.slice(0, 10)}
              </span>
            </StTextWrap2>
            <StTextWrap3>
              <span>{choice.choice1Name}</span>
              <span>{choice.choice2Name}</span>
            </StTextWrap3>
            {!choice.isChoice ? (
              <StChoiceWrap>
                <StChoiceBtn
                  onClick={(e) => choiceSubmit(e, choice.choiceId)}
                  value="1"
                  backColor="#9F9F9F"
                >
                  1번
                </StChoiceBtn>
                <StChoiceBtn
                  onClick={(e) => choiceSubmit(e, choice.choiceId)}
                  value="2"
                  backColor="#6D6D6D"
                >
                  2번
                </StChoiceBtn>
              </StChoiceWrap>
            ) : (
              <StChoiceWrap>
                <StChoice1 width={choice.choice1Per}>
                  <StPerText>{choice.choice1Per}%</StPerText>
                </StChoice1>
                <StChoice2 width={choice.choice2Per}>
                  <StPerText>{choice.choice2Per}%</StPerText>
                </StChoice2>
              </StChoiceWrap>
            )}
          </SwiperSlide>
        ))}
      </Sw>
    </div>
  );
};

export default Choice;

const Sw = styled(Swiper)`
  background-color: #f8f8f8;
  padding: ${(props) => props.theme.paddings.xsm};
  position: relative;
  &.swiper .swiper-button-next {
    background: url("https://cdn-icons-png.flaticon.com/512/17/17437.png")
      no-repeat;
    background-size: 100% auto;
    background-position: center;
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
  &.swiper .swiper-pagination-bullet {
    display: none;
  }
`;

const StTextWrap2 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${(props) => props.theme.margins.xxl};
`;

const StTextWrap3 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${(props) => props.theme.margins.xxsm};
`;

const StChoiceTextWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${(props) => props.theme.margins.lg};
`;

const StChoiceName = styled.div`
  font-weight: ${(props) => props.theme.fontWeights.lg};
  margin-bottom: 0.5rem;
`;

const Stimg = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: ${(props) => props.theme.margins.xxsm};
`;

const StChoiceWrap = styled.div`
  width: 100%;
  display: flex;
`;

const StChoiceBtn = styled.button`
  width: 100%;
  height: 2rem;
  background-color: ${(props) => props.backColor};
  color: white;
  font-weight: ${(props) => props.theme.fontWeights.lg};
  border: none;
  cursor: pointer;
`;

const StChoice1 = styled.div`
  background-color: rgb(255, 206, 206);
  width: ${(props) => props.width}%;
  height: 2rem;
  text-align: left;
  display: flex;
  align-items: center;
`;

const StChoice2 = styled.div`
  background-color: #c2c2ff;
  width: ${(props) => props.width}%;
  height: 2rem;
  text-align: right;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const StPerText = styled.span`
  padding: ${(props) => props.theme.paddings.xsm};
`;
