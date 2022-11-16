import React, { useEffect, useState } from "react";
import Category from "./Category";

/* css관련 */
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { useAdviceInfiniteScroll } from "../../api/boardApi";
import { useInfiniteQuery } from "react-query";
import { useNavigate } from "react-router-dom";

const Advice = () => {
  // 서버에서 90개씩 받아오도록 해보기
  const infinityQuery = useInfiniteQuery();
  console.log("infinityQuery", infinityQuery);

  const [categoryId, setCategoryId] = useState(0);
  console.log("categoryId", categoryId);

  /* 투표 get initeScroll */
  const { getAdvice, fetchNextPage, isSuccess, hasNextPage, refetch } =
    useAdviceInfiniteScroll(categoryId);
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
        <Category setCategoryId={setCategoryId} />
      </StNavWrap>
      <StListWrap>
        {isSuccess && getAdvice?.pages
          ? getAdvice?.pages.map((page) => (
              <React.Fragment key={page.currentPage}>
                {page?.advices.map((advice) => (
                  <StAdviceList
                    ref={ref}
                    key={advice.adviceId}
                    onClick={() => {
                      nav(`/board/${advice.adviceId}`);
                    }}
                  >
                    <p style={{ marginBottom: "0.5rem", fontWeight: "600" }}>
                      {advice.title}
                    </p>
                    <StContent>{advice.content}</StContent>
                    <StWrap>
                      <div
                        style={{
                          fontSize: `${(props) => props.theme.fontSize.sm}`,
                        }}
                      >
                        <span
                          style={{
                            marginRight: `${(props) => props.theme.margins.sm}`,
                          }}
                        >
                          {advice.viewCount}
                        </span>
                      </div>
                      <span>{advice.createdAt.slice(0, 10)}</span>
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
