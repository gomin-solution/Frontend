import { Switch } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Btn1 } from "../../elements/Btn";

function AdviceForm({ category }) {
  const nav = useNavigate();
  const onSubmit = () => {
    nav("/board");
  };

  return (
    <form onSubmit={onSubmit}>
      <StCate>{category}</StCate>
      <Stinput type="text" placeholder="제목을 입력해주세요." />
      <StText placeholder="내용을 입력해주세요." />
      <StAdult>참여자 연령선택</StAdult>
      <StCheckAdult>
        <span style={{ marginRight: "2rem" }}>성인만</span>
        <Switch
          sx={{
            width: 80,
            height: 47,
            "& .MuiSwitch-thumb": { width: 38, borderRadius: 3, height: 22 },
            "& .MuiSwitch-track": {
              borderRadius: 3,
              marginTop: -0.4,
            },
          }}
        />
      </StCheckAdult>
      <Btn1 text={"완료"} />
    </form>
  );
}

export default AdviceForm;

const StCate = styled.div`
  width: 3.2rem;
  height: 1.8rem;
  font-size: ${(props) => props.theme.fontSizes.sm};
  background-color: ${(props) => props.theme.boxColors.gray2};

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Stinput = styled.input`
  width: 100%;
  height: 2.8rem;

  border: none;
  background-color: ${(props) => props.theme.boxColors.gray1};
  padding: ${(props) => props.theme.paddings.base};
  margin: ${(props) => props.theme.margins.lg} 0rem;
  font-size: ${(props) => props.theme.fontSizes.sm};
`;

const StText = styled.textarea`
  width: 100%;
  height: 18rem;

  border: none;
  background-color: ${(props) => props.theme.boxColors.gray1};
  padding: ${(props) => props.theme.paddings.base};
`;

const StAdult = styled.p`
  margin-top: 2.5rem;
  font-size: ${(props) => props.theme.fontSizes.base};
`;

const StCheckAdult = styled.div`
  font-size: ${(props) => props.theme.fontSizes.sm};
  margin-bottom: 1.5rem;
`;
