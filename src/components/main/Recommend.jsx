import React from "react";
import styled from "styled-components";

const Recommend = ({ recommend }) => {
  const categories = [
    { topic: "전체", categoryId: 0 },
    { topic: "여행", categoryId: 1 },
    { topic: "진로", categoryId: 2 },
    { topic: "쇼핑", categoryId: 3 },
    { topic: "연애", categoryId: 4 },
    { topic: "친구", categoryId: 5 },
    { topic: "반려동물", categoryId: 6 },
    { topic: "선물", categoryId: 7 },
    { topic: "건강", categoryId: 8 },
    { topic: "코디", categoryId: 9 },
    { topic: "육아", categoryId: 10 },
    { topic: "생활", categoryId: 11 },
    { topic: "기타", categoryId: 12 },
  ];

  return (
    <StContainer>
      <StWrap>
        <StInnerWrap>
          <StLeftText>추천글</StLeftText>
          <span style={{ color: "#7999FF" }}>
            [{categories[recommend?.categoryId].topic}]
          </span>
          <span>&nbsp;{recommend?.title}</span>
        </StInnerWrap>
      </StWrap>
    </StContainer>
  );
};

export default Recommend;

const StContainer = styled.div`
  margin-bottom: ${(props) => props.theme.paddings.xxl};
`;

const StWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StInnerWrap = styled.div`
  display: flex;
  align-items: center;
`;

const StLeftText = styled.div`
  background-color: #7999ff;
  color: white;
  padding: 0.3rem;
  margin-right: ${(props) => props.theme.margins.xsm};
`;
