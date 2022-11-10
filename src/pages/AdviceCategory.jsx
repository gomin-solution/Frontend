import { useNavigate } from "react-router-dom";
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
      <button
        onClick={() => {
          nav(-1);
        }}
      >
        이전으로
      </button>
      <p>카테고리</p>
      <div>
        {adviceCategory.map((item) => {
          return (
            <button
              onClick={() => {
                onCategory(item);
              }}
              key={item}
            >
              {item}
            </button>
          );
        })}
      </div>
    </Layout>
  );
}

export default AdviceCategory;
