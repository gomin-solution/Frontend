import styled from "styled-components";
import { Header1 } from "../elements/Header";
import { Container, FlexCenter } from "../shared/css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { socket } from "../api/socketio";
import { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { getAlarms, removeAlarm } from "../api/alarm";
import CloseIcon from "@mui/icons-material/Close";

const Alarm = () => {
  /* 기존 알림 내용 담기 */
  const [alarms, setAlarms] = useState([]);

  /* 알림 내용 전부 가져오기 */
  // useQuery("getAlarms", getAlarms, {
  //   refetchOnWindowFocus: false,
  // });

  /* 알림 삭제 */
  const { mutate } = useMutation(removeAlarm);

  /* 알림 받기 */
  socket.on("mission_alarm", (data) => {
    console.log("알림 테스트", data);
    // setAlarms([
    //   ...alarms,
    //   {
    //     alarms: data,
    //   },
    // ]);
  });

  return (
    <>
      <Header1 title={"알림"} />
      <Stcontainer>
        <StInnerWrap>
          <StTopWrap style={{ display: "felx" }}>
            <StText1>보상</StText1>
            <StCloseIcon onClick={() => mutate()}>
              <CloseIcon />
            </StCloseIcon>
          </StTopWrap>
          <StBottomWrap>
            <StColumn>
              <span>미션완료!</span>
              <span>지금 바로 리워드 보상을 받으세요!</span>
              <StText2>16:51</StText2>
            </StColumn>
            <StIcon>
              <ArrowForwardIosIcon />
            </StIcon>
          </StBottomWrap>
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
  height: 6.5rem;
  margin-bottom: ${(props) => props.theme.margins.lg};
  padding: ${(props) => props.theme.paddings.xsm};
  ${FlexCenter};
  flex-flow: column;
`;

const StTopWrap = styled.div`
  width: 100%;
  ${FlexCenter}
  justify-content: space-between;
`;

const StBottomWrap = styled.div`
  width: 100%;
  ${FlexCenter};
  justify-content: space-between;
`;

const StColumn = styled.div`
  ${FlexCenter};
  align-items: flex-start;
  flex-flow: column;
`;

const StCloseIcon = styled.span`
  color: ${(props) => props.theme.Colors.blueGreen3};
  ${FlexCenter}
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
