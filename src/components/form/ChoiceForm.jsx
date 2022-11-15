import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Btn1 } from "../../elements/Btn";

import { useForm } from "react-hook-form";
import { addChoice } from "../../api/postApi";
import { useMutation } from "react-query";

function ChoiceForm() {
  const nav = useNavigate();
  const { register, handleSubmit } = useForm();

  //데이터 전송하기
  const onChoice = (data) => {
    wrtieChoice.mutate(data);
    nav("/board");
  };

  const wrtieChoice = useMutation(addChoice);

  return (
    <>
      <StForm as="form" onSubmit={handleSubmit(onChoice)}>
        <StLabel>고민</StLabel>
        <Stinput
          type="text"
          placeholder="고민을 적어주세요. (20자 이내)"
          maxLength={20}
          required
          {...register("title")}
        />
        <StLabel style={{ marginTop: "4rem" }}>선택지 추가</StLabel>
        <Stinput
          type="text"
          placeholder="선택지1"
          required
          {...register("choice1Name")}
        />
        <Stinput
          type="text"
          placeholder="선택지2"
          maxLength={20}
          required
          {...register("choice2Name")}
        />
        <StLabel style={{ marginTop: "3rem" }}>마감시간</StLabel>
        <StSelect required {...register("endTime")}>
          <option value={Date.now()}>2시간</option>
          <option value={2}>4시간</option>
          <option value={3}>8시간</option>
          <option value={4}>12시간</option>
          <option value={5}>24시간</option>
          <option value={6}>36시간</option>
          <option value={7}>48시간</option>
          <option value={8}>72시간</option>
        </StSelect>
        <Btn1 text={"완료"} />
      </StForm>
    </>
  );
}

export default ChoiceForm;

/*전체 폼 박스 */
const StForm = styled.form`
  margin-top: 5rem;
`;

/*제목 */
const Stinput = styled.input`
  width: 100%;
  height: 2.8rem;

  border: none;
  background-color: ${(props) => props.theme.boxColors.gray1};
  padding: ${(props) => props.theme.paddings.base};
  margin-top: ${(props) => props.theme.margins.sm};
  font-size: ${(props) => props.theme.fontSizes.sm};
`;

const StSelect = styled.select`
  width: 300px;
  text-align: center;
`;

/*인풋 라벨 */
const StLabel = styled.div`
  font-size: ${(props) => props.theme.fontSizes.base};
  font-weight: ${(props) => props.theme.fontWeights.base};
  margin-bottom: ${(props) => props.theme.margins.sm}; ;
`;
