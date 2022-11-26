import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useAdviceInfiniteScroll } from "../../api/boardAdviceApi";
import AdviceList from "../AdviceList";

import styled from "styled-components";
import { MenuDial2, MenuDial6 } from "../../elements/MenuDial";

const Advice = () => {
  /* filter 적용 */
  const [categoryId, setCategoryId] = useState(0);
  const [filterId, setFilterId] = useState(0);

  /* 답해주기 get initeScroll */
  const { getAdvice, fetchNextPage, isSuccess, hasNextPage } =
    useAdviceInfiniteScroll(categoryId, filterId);

  /* 사용자가 div 요소를 보면 inView가 true, 안보면 false로 자동으로 변경 */
  const { ref, inView } = useInView();

  /* useEffect를 사용하여 골라주기 데이터 가져오기 */
  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <StContainer>
      <StNavWrap>
        <MenuDial6 setCategoryId={setCategoryId} />
        <MenuDial2 setFilterId={setFilterId} />
      </StNavWrap>
      <StListWrap>
        {isSuccess && getAdvice?.pages
          ? getAdvice?.pages.map((page) => (
              <React.Fragment key={page.currentPage}>
                {page.advices.map((advice) => (
                  <AdviceList ref={ref} advice={advice} key={advice.adviceId} />
                ))}
              </React.Fragment>
            ))
          : null}
      </StListWrap>
    </StContainer>
  );
};

export default Advice;

const StContainer = styled.div`
  margin-bottom: ${(props) => props.theme.paddings.sm};
  padding: 0rem 1.5rem;
`;

const StNavWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const StListWrap = styled.div`
  height: 100%;
`;
