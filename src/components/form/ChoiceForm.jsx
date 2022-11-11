import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Layout from "../layout/Layout";
import Slider from "@mui/material/Slider";
import { useForm } from "react-hook-form";

function ChoiceForm() {
  const nav = useNavigate();
  const { register, handleSubmit } = useForm();
  const onChoice = (data) => {
    console.log(data);
  };
  return (
    <Layout>
      <button
        onClick={() => {
          nav("/");
        }}
      >
        홈버튼
      </button>
      <Test as="form" onSubmit={handleSubmit(onChoice)}>
        <div>투표</div>
        <input
          type="text"
          placeholder="제곧내"
          required
          {...register("title")}
        />
        <p>선택지</p>
        <input
          type="text"
          placeholder="선택1"
          required
          {...register("choice1Name")}
        />
        <input
          type="text"
          placeholder="선택2"
          required
          {...register("choice2Name")}
        />
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
        <StSelect required {...register("endtime")}>
          <option value={1}>2시간</option>
          <option value={2}>4시간</option>
          <option value={3}>8시간</option>
          <option value={4}>12시간</option>
          <option value={5}>24시간</option>
          <option value={6}>36시간</option>
          <option value={7}>48시간</option>
          <option value={8}>72시간</option>
        </StSelect>
        <button type="submit">완료</button>
      </Test>
    </Layout>
  );
}

export default ChoiceForm;

const Test = styled.form`
  margin: 10px;
  background-color: beige;
`;

const StSelect = styled.select`
  width: 300px;
  text-align: center;
`;
