import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import styled from "styled-components";
import AdviceForm from "../components/form/AdviceForm";
import { Header5 } from "../components/header/Header";

function AdvicePost() {
  const nav = useNavigate();
  const location = useLocation();
  const category = location.state;

  return (
    <Layout>
      <Header5 />
      <AdviceForm category={category} />
    </Layout>
  );
}

export default AdvicePost;

const Test = styled.div``;
