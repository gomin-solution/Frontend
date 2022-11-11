import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Header4 } from "../components/header/Header";
import Layout from "../components/layout/Layout";

function AdviceCategory() {
  const nav = useNavigate();
  const adviceCategory = [
    "여행",
    "진로",
    "쇼핑",
    "연애",
    "친구",
    "반려동물",
    "선물",
    "건강",
    "코디",
    "육아",
    "생활",
    "기타",
  ];

  const onCategory = (e) => {
    nav("/post/advice", { state: e });
  };

  return (
    <Layout>
      <Header4 title={"글 작성"} />
      <StCate>카테고리 선택</StCate>
      <CateSet>
        {adviceCategory.map((item) => {
          return (
            <CateBox
              onClick={() => {
                onCategory(item);
              }}
              key={item}
            >
              {item}
            </CateBox>
          );
        })}
      </CateSet>
    </Layout>
  );
}

export default AdviceCategory;

/*카테고리 명시*/
const StCate = styled.div`
  font-size: 24px;
  text-align: center;
  margin-top: 76px;
  margin-bottom: 40px;
  background-color: aqua;
`;

/*카테고리 박스*/
const CateBox = styled.div`
  background-color: #eaeaea;
  width: 102px;
  height: 102px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

/*카테고리 정렬*/
const CateSet = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 14.5px;
  /* background-color: beige; */
`;
