import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import styled from "styled-components";
import AdviceForm from "../components/form/AdviceForm";

function AdvicePost() {
  const location = useLocation();
  const category = location.state;

  return (
    <Layout>
      <AdviceForm category={category} />
    </Layout>
  );
}

export default AdvicePost;

const Test = styled.div``;
