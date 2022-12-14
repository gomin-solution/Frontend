import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAdviceInfiniteScroll } from "../../api/boardAdviceApi";
import AdviceList from "../AdviceList";
import styled from "styled-components";

const Advice = ({ categoryId, filterId }) => {
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
      <StListWrap>
        {isSuccess && getAdvice?.pages
          ? getAdvice?.pages.map((page) => (
              <React.Fragment key={page.currentPage}>
                {page.advices.map((advice) => (
                  <AdviceList
                    newRef={ref}
                    advice={advice}
                    key={advice.adviceId}
                  />
                ))}
              </React.Fragment>
            ))
          : null}
        <div style={{ marginTop: "4rem" }} />
      </StListWrap>
    </StContainer>
  );
};

export default Advice;

const StContainer = styled.div`
  margin-bottom: ${(props) => props.theme.paddings.sm};
  padding: 0rem 1.5rem;
`;

const StListWrap = styled.div`
  height: 100%;
`;
