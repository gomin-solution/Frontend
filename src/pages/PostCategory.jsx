import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Header1 } from "../elements/Header";

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
    nav("/post-advice", { state: e });
  };

  return (
    <>
      <Header1 title={"글 작성"} />
      <Stcontainer>
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
      </Stcontainer>
    </>
  );
}

export default AdviceCategory;

/*반응형 맞춤 */
const Stcontainer = styled.div`
  width: 100%;
  position: absolute;
  overflow: auto;
  height: calc(100vh - 5rem);
`;

/*카테고리 명시*/
const StCate = styled.div`
  font-size: ${(props) => props.theme.fontSizes.xxl};
  text-align: center;
  margin-top: 4rem;
  margin-bottom: 2.5rem;
`;

/*카테고리 네모 박스*/
const CateBox = styled.button`
  font-size: ${(props) => props.theme.fontSizes.xl};
  background-color: #eaeaea;
  width: 6.4rem;
  height: 6.4rem;
  border: none;
`;

/*카테고리 정렬*/
const CateSet = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;
