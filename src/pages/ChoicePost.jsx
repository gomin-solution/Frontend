import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Layout from "../components/layout/Layout";
import Slider from "@mui/material/Slider";

function ChoicePost() {
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
      <Test>
        <div>투표</div>
        <input type="text" placeholder="제곧내" required />
        <p>선택지</p>
        <input type="text" placeholder="선택1" required />
        <input type="text" placeholder="선택2" required />
        <p>투표기간</p>

        <label>마감시간</label>
        <Slider
          aria-label="Temperature"
          defaultValue={4}
          valueLabelDisplay="auto"
          step={4}
          marks
          min={4}
          max={24}
        />
        <StSelect required>
          <option>1시간</option>
          <option>2시간</option>
          <option>4시간</option>
          <option>8시간</option>
          <option>12시간</option>
          <option>24시간</option>
          <option>36시간</option>
          <option>48시간</option>
        </StSelect>
        <button>완료</button>
      </Test>
    </Layout>
  );
}

export default ChoicePost;

const Test = styled.form`
  margin: 10px;
  background-color: beige;
`;

const StSelect = styled.select`
  width: 300px;
  text-align: center;
`;
