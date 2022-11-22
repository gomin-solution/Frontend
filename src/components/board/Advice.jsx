import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useAdviceInfiniteScroll } from "../../api/boardAdviceApi";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { MenuDial2, MenuDial6 } from "../../elements/MenuDial";

const Advice = () => {
  /* filter 적용 */
  const [categoryId, setCategoryId] = useState(0);
  const [filterId, setFilterId] = useState(0);

  /* 골라주기 get initeScroll */
  const { getAdvice, fetchNextPage, isSuccess, hasNextPage } =
    useAdviceInfiniteScroll(categoryId, filterId);
  /* 사용자가 div 요소를 보면 inView가 true, 안보면 false로 자동으로 변경 */
  const { ref, inView } = useInView();

  const nav = useNavigate();

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
                  <StAdviceList
                    ref={ref}
                    key={advice.adviceId}
                    onClick={() => {
                      nav(`/board-advice/${advice.adviceId}`);
                    }}
                  >
                    <p
                      style={{
                        marginBottom: "0.5rem",
                        fontWeight: "600",
                      }}
                    >
                      {advice.categoryId}
                      {advice.title}
                    </p>
                    <StContent>{advice.content}</StContent>
                    <StWrap>
                      <div style={{ fontSize: "0.875rem" }}>
                        <span>조회수 {advice.viewCount}&nbsp;&nbsp;</span>
                        <span>댓글수 {advice.commentCount}</span>
                      </div>
                      <span style={{ fontSize: "0.875rem" }}>
                        {advice.createdAt.slice(0, 10)}
                      </span>
                    </StWrap>
                  </StAdviceList>
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

const StAdviceList = styled.div`
  background-color: #f6f6f6;
  height: 6rem;
  margin-bottom: ${(props) => props.theme.margins.xsm};
  padding: ${(props) => props.theme.paddings.sm};
`;

const StContent = styled.p`
  width: 100%;
  overflow: hidden;
  margin-top: ${(props) => props.theme.margins.sm};
  margin-bottom: ${(props) => props.theme.margins.xsm};
  text-overflow: ellipsis; // 말줄임 적용
  white-space: nowrap; // 문장이 길어지면 다음 줄로 넘기는 것을 없앰
  overflow: hidden;
`;

const StWrap = styled.div`
  color: #999999;
  display: flex;
  justify-content: space-between;
`;
