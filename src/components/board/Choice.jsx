import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

// MUI Icon
import { useChoiceInfiniteScroll } from "../../api/boardChoiceApi";
import { FilterDial } from "../../elements/MenuDial";
import ChoiceList from "../ChoiceList";

const Choice = () => {
  /* filterId params 전달 */
  const [filterId, setFilterId] = useState(0);

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

  //선택시 이름 바꾸기
  const filters = [
    { filter: "최신순", filterId: 0 },
    { filter: "참여자순", filterId: 1 },
    { filter: "마감순", filterId: 2 },
  ];

  return (
    <StContainer>
      <StNavWrap>
        <FilterDial setFilterId={setFilterId} filters={filters} />
      </StNavWrap>
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

const StNavWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;
