import { Header5 } from "../elements/Header";
import styled from "styled-components";

import { useForm } from "react-hook-form";
import { addChoice } from "../api/postApi";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import moment from "moment/moment";

function ChoicePost() {
  const nav = useNavigate();
  const { register, handleSubmit } = useForm();

  //데이터 전송하기
  const onChoice = (data) => {
    // console.log(data);
    wrtieChoice.mutate(data);
    nav("/board");
  };

  const wrtieChoice = useMutation(addChoice);

  //현재시간 설정하기
  const nowTime = moment().format("YYYY-MM-DD HH:mm");
  const minTime = moment().add(1, "hour").format().slice(0, -9);
  const maxTime = moment().add(7, "days").format().slice(0, -9);

  return (
    <form as="form" onSubmit={handleSubmit(onChoice)}>
      <Header5 title={"글 작성"} />
      <Stcontainer>
        <StLabel style={{ marginTop: "3rem" }}>고민</StLabel>
        <Stinput
          type="text"
          placeholder="고민을 적어주세요. (50자 이내)"
          maxLength={50}
          required
          {...register("title")}
        />
        <StLabel style={{ marginTop: "4rem" }}>선택지 추가</StLabel>
        <Stinput
          type="text"
          placeholder="선택지1"
          maxLength={10}
          required
          {...register("choice1Name")}
        />
        <Stinput
          type="text"
          placeholder="선택지2"
          maxLength={10}
          required
          {...register("choice2Name")}
        />
        <StLabel style={{ marginTop: "3rem" }}>마감시간</StLabel>
        <Stinput
          type="datetime-local"
          defaultValue={nowTime}
          min={minTime}
          max={maxTime}
          required
          {...register("endTime")}
        />
        <p style={{ marginTop: "1.5rem" }}>
          한번 작성한 게시물은 수정할 수 없습니다.
        </p>
      </Stcontainer>
    </form>
  );
}

export default ChoicePost;

/*반응형 맞춤 */
const Stcontainer = styled.div`
  width: 100%;
  position: absolute;
  overflow: auto;
  padding: ${(props) => props.theme.paddings.xxl};
  height: calc(100vh - 4rem);
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

/*인풋 라벨 */
const StLabel = styled.div`
  font-size: ${(props) => props.theme.fontSizes.base};
  font-weight: ${(props) => props.theme.fontWeights.base};
  margin-bottom: ${(props) => props.theme.margins.sm}; ;
`;
