import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/layout/Layout";

function Post() {
  const nav = useNavigate();
  return (
    <Layout>
      <button
        onClick={() => {
          nav("/");
        }}
      >
        홈버튼
      </button>
      <button
        onClick={() => {
          nav("/post/category");
        }}
      >
        조언하기
      </button>
      <button
        onClick={() => {
          nav("/post/choice");
        }}
      >
        투표하기
      </button>
    </Layout>
  );
}

export default Post;
