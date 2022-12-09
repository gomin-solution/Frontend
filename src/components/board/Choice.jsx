import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

// MUI Icon
import { useChoiceInfiniteScroll } from "../../api/boardChoiceApi";
import ChoiceList from "../ChoiceList";

const Choice = ({ filterId }) => {
  /* 투표 get initeScroll */
  const { getChoice, fetchNextPage, isSuccess, hasNextPage } =
    useChoiceInfiniteScroll(filterId);

  /* 사용자가 div 요소를 보면 inView가 true, 안보면 false로 자동으로 변경 */
  const { ref, inView } = useInView();

  /* useEffect를 사용하여 마지막 항목을 바라볼 때 다음 페이지 데이터 요청하기 */
  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <StContainer>
      {isSuccess && getChoice?.pages
        ? getChoice?.pages.map((page) => (
            <React.Fragment key={page.currentPage}>
              {page?.choices.map((choice) => {
                return (
                  <ChoiceList
                    newRef={ref}
                    choice={choice}
                    key={choice.choiceId}
                    getMutation="getChoiceScroll"
                  />
                );
              })}
            </React.Fragment>
          ))
        : null}
    </StContainer>
  );
};

export default Choice;

const StContainer = styled.div`
  padding: 0rem ${(props) => props.theme.paddings.xxl};
`;
