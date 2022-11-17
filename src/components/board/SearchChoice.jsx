import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import "moment/locale/ko";
import { useMutation, useQueryClient } from "react-query";
import styled from "styled-components";

// MUI Icon
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { bookmark, postChoice } from "../../api/boardApi";

const SearchChoice = ({ choices }) => {
  /* 검색어 결과 받아오기 */
  const queryClient = useQueryClient();

  /* 북마크 클릭 */
  const [isBookMark, setIsBookMark] = useState(false);

  /* 골라주기 선택 시 payload 설정을 위한 useState 작성 */
  const [choiceNum, setChoiceNum] = useState(0);
  const [isChoice, setIsChoice] = useState(false);
  const [postChoiceId, setPostChoiceId] = useState(0);

  /* 골라주기 선택 시 put */
  const choiceSubmit = async (e, choiceId) => {
    e.preventDefault();
    setChoiceNum(Number(e.target.value));
    setIsChoice(!isChoice);
    setPostChoiceId(choiceId);
  };

  /* 골라주기 mutation */
  const choiceMutation = useMutation(postChoice, {
    onSuccess: () => {
      queryClient.invalidateQueries("getChoiceScroll");
    },
  });

  /* 북마크 전환 */
  const bookmarkChange = (choiceId) => {
    setIsBookMark(!isBookMark);
    setPostChoiceId(choiceId);
  };

  /* 북마크 mutation */
  const bookmarkMutation = useMutation(bookmark, {
    onSuccess: () => {
      queryClient.invalidateQueries("getChoiceScroll");
    },
  });

  /* useEffect를 사용하여 setState값 할당 후 서버와 통신 (골라주기 선택) */
  useEffect(() => {
    if (choiceNum !== 0) {
      choiceMutation.mutate({
        choiceId: postChoiceId,
        choiceNum,
        isChoice,
      });
    }
  }, [isChoice]);

  /* useEffect를 사용하여 setState값 할당 후 서버와 통신 (북마크) */
  useEffect(() => {
    if (postChoiceId !== 0) {
      bookmarkMutation.mutate({
        choiceId: postChoiceId,
        isBookMark,
      });
    }
  }, [isBookMark]);

  return (
    // <div>aaa</div>
    <StContainer>
      {choices?.map((choice) => {
        /* 마감시간 비교를 위한 변수 설정 */
        const nowTime = Date.now();
        const newEndTime = new Date(choice.endTime).getTime();
        return (
          <StWrap key={choice.choiceId}>
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
                style={{
                  color: `${(props) => props.theme.fontColors.fong1}`,
                }}
              >
                {choice.choiceCount}
              </span>
              <span
                style={{
                  color: `${(props) => props.theme.fontColors.fong1}`,
                }}
              >
                {newEndTime > nowTime ? (
                  <span key={choice.endTime}>
                    <Moment fromNow>{choice.endTime}</Moment>&nbsp; 마감
                  </span>
                ) : (
                  <span>마감되었습니다.</span>
                )}
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
          </StWrap>
        );
      })}
    </StContainer>
  );
};

export default SearchChoice;

const StContainer = styled.div`
  padding: 0rem ${(props) => props.theme.paddings.xxl};
`;

const StWrap = styled.div`
  background-color: ${(props) => props.theme.boxColors.gray1};
  margin-bottom: ${(props) => props.theme.margins.xxl};
  padding: ${(props) => props.theme.paddings.lg};
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
