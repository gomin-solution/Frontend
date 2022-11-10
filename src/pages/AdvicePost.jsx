import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import styled from "styled-components";
import AdviceForm from "../components/form/AdviceForm";

function AdvicePost() {
  const nav = useNavigate();
  const location = useLocation();
  const category = location.state;

  return (
    <Layout>
      <button
        onClick={() => {
          nav(-1);
        }}
      >
        이전으로
      </button>
      <AdviceForm category={category} />
    </Layout>
  );
}

export default AdvicePost;

const Test = styled.div``;
