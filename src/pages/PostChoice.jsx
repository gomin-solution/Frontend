import { useForm } from "react-hook-form";
import { addChoice } from "../api/postApi";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";

import { Header5 } from "../elements/Header";
import { Container } from "../shared/css";
import styled from "styled-components";

function ChoicePost() {
  const queryClient = useQueryClient();
  const nav = useNavigate();
  const { register, handleSubmit } = useForm();

  //데이터 전송하기
  const onChoice = (data) => {
    if (
      data.title.trim() === "" ||
      data.choice1Name.trim() === "" ||
      data.choice2Name.trim() === ""
    ) {
      return alert("게시글 작성을 완료해주세요.");
    } else {
      wrtieChoice.mutate(data);
    }
  };

  const wrtieChoice = useMutation(addChoice, {
    onSuccess: () => {
      queryClient.invalidateQueries("getChoiceScroll");
      nav("/board-choice");
    },
  });

  //현재시간 설정하기
  const nowTime = dayjs().format("YYYY-MM-DD HH:mm");
  const minTime = dayjs().add(1, "hour").format().slice(0, -9);
  const maxTime = dayjs().add(7, "days").format().slice(0, -9);

  return (
    <form as="form" onSubmit={handleSubmit(onChoice)}>
      <Header5 title={"고민 적기"} />
      <Stcontainer>
        <StLabel>제목</StLabel>
        <Stinput
          type="text"
          placeholder="고민을 적어주세요. (50자 이내)"
          maxLength={50}
          {...register("title")}
        />
        <StLabel>선택지 추가</StLabel>
        <Stinput
          type="text"
          placeholder="선택지1 (10자이내)"
          maxLength={10}
          {...register("choice1Name")}
        />
        <Stinput
          type="text"
          placeholder="선택지2 (10자이내)"
          maxLength={10}
          {...register("choice2Name")}
        />
        <StLabel>마감 시간</StLabel>
        <p>마감시간은 최소 1시간 이후부터 7일 이내까지 가능합니다.</p>
        <Stinput
          type="datetime-local"
          defaultValue={nowTime}
          min={minTime}
          max={maxTime}
          required
          {...register("endTime")}
        />
        <p style={{ marginTop: "1.5rem" }}>
          한번 작성한 골라주기 투표 글은 수정할 수 없습니다.
        </p>
      </Stcontainer>
    </form>
  );
}

export default ChoicePost;

/*반응형 맞춤 */
const Stcontainer = styled.div`
  ${Container}
  padding: ${(props) => props.theme.paddings.xxl};
  height: calc(100vh - 4rem);
  p {
    font-size: ${(props) => props.theme.fontSizes.xsm};
  }
`;

/*인풋 창*/
const Stinput = styled.input`
  width: 100%;
  height: 2.8rem;

  border: none;
  background-color: ${(props) => props.theme.Colors.blueGray1};
  padding: ${(props) => props.theme.paddings.base};
  margin-top: ${(props) => props.theme.margins.sm};
  font-size: ${(props) => props.theme.fontSizes.sm};
  ::placeholder {
    color: ${(props) => props.theme.Colors.gray3};
  }
`;

/*인풋 라벨 */
const StLabel = styled.div`
  font-weight: ${(props) => props.theme.fontWeights.base};
  margin-top: 3rem;
  margin-bottom: ${(props) => props.theme.margins.sm}; ;
`;
