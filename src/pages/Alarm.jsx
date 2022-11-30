import styled from "styled-components";
import { Header1 } from "../elements/Header";
import { Container, FlexCenter } from "../shared/css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { socket } from "../api/socketio";
import { useState } from "react";
import { useQuery } from "react-query";
import { getAlarms } from "../api/alarm";

const Alarm = () => {
  /* 기존 알림 내용 담기 */
  const [alarms, setAlarms] = useState([]);

  /* 알림 내용 전부 가져오기 */
  useQuery("getAlarms", getAlarms, {
    refetchOnWindowFocus: false,
  });

  /* 알림 실시간 get */
  socket.on("alarm", (data) => {
    console.log("통신 테스트");
    setAlarms([
      ...alarms,
      {
        title: data.title,
        content: data.content,
        date: data.date,
      },
    ]);
  });

  return (
    <>
      <Header1 title={"알림"} />
      <Stcontainer>
        <StInnerWrap>
          <StColumn>
            <StText1>보상</StText1>
            <span>미션완료!</span>
            <span>지금 바로 리워드 보상을 받으세요!</span>
            <StText2>16:51</StText2>
          </StColumn>
          <StIcon>
            <ArrowForwardIosIcon />
          </StIcon>
        </StInnerWrap>
      </Stcontainer>
    </>
  );
};

export default Alarm;

/*반응형 맞춤 */
const Stcontainer = styled.div`
  ${Container};
  height: calc(100vh - 4rem);
  padding: ${(props) => props.theme.paddings.xxl};
`;

const StInnerWrap = styled.div`
  background-color: ${(props) => props.theme.Colors.blueGray1};
  width: 100%;
  height: 6rem;
  ${FlexCenter};
  justify-content: space-between;
  margin-bottom: ${(props) => props.theme.margins.lg};
  padding: ${(props) => props.theme.paddings.lg};
`;

const StColumn = styled.div`
  ${FlexCenter};
  align-items: flex-start;
  flex-flow: column;
`;

const StText1 = styled.span`
  color: ${(props) => props.theme.Colors.blueGreen2};
  font-size: ${(props) => props.theme.fontSizes.sm};
  font-weight: ${(props) => props.theme.fontWeights.lg};
`;

const StText2 = styled.span`
  color: ${(props) => props.theme.Colors.blueGray3};
  font-size: ${(props) => props.theme.fontSizes.sm};
`;

const StIcon = styled.span`
  color: ${(props) => props.theme.Colors.blueGray3};
`;
