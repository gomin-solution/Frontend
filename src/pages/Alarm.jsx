import styled from "styled-components";
import { Container, FlexCenter } from "../shared/css";
// import { socket } from "../api/socketio";
import { useMutation, useQueryClient } from "react-query";
import { removeAlarm } from "../api/alarm";
import CloseIcon from "@mui/icons-material/Close";
import { AlarmAlert } from "../elements/Alert";
import { Header1 } from "../elements/Header";

const Alarm = () => {
  const queryClient = useQueryClient();

  /* 알림 내용 전부 가져오기 */
  // useQuery("getAlarms", getAlarms, {
  //   refetchOnWindowFocus: false,
  // });

  /* 알림 삭제 */
  const { mutate } = useMutation(removeAlarm, {
    onSuccess: () => {
      queryClient.invalidateQueries("aaaaaa");
    },
  });

  /* 알림 받기 */
  // socket.on("mission_alarm", (data) => {
  //   console.log("알림 테스트", data);
  //   // setAlarms([
  //   //   ...alarms,
  //   //   {
  //   //     alarms: data,
  //   //   },
  //   // ]);
  // });

  return (
    <>
      <Header1 title={"알림"} />
      <Stcontainer>
        {/* 여기서 map 돌리기 */}
        <StInnerWrap>
          <StTopWrap style={{ display: "felx" }}>
            <StText1>보상</StText1>
            <StCloseIcon>
              <CloseIcon />
            </StCloseIcon>
          </StTopWrap>
          <StBottomWrap>
            <StColumn>
              <span>미션완료!</span>
              <span>지금 바로 리워드 보상을 받으세요!</span>
              <StText2>16:51</StText2>
            </StColumn>
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
  margin-top: 4rem;
`;

const StInnerWrap = styled.div`
  background-color: ${(props) => props.theme.Colors.blueGray1};
  width: 100%;
  height: 7rem;

  padding: ${(props) => props.theme.paddings.sm};
  ${FlexCenter};
  flex-flow: column;

  border-bottom: 0.1rem solid lightgray;
`;

const StTopWrap = styled.div`
  width: 100%;
  ${FlexCenter}
  justify-content: space-between;
  margin-top: ${(props) => props.theme.margins.sm};
`;

const StBottomWrap = styled.div`
  width: 100%;
  ${FlexCenter};
  justify-content: space-between;
  margin-bottom: ${(props) => props.theme.margins.xsm};
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
  font-size: ${(props) => props.theme.fontSizes.lg};
  font-weight: ${(props) => props.theme.fontWeights.lg};
`;

const StText2 = styled.span`
  color: ${(props) => props.theme.Colors.blueGray3};
  font-size: ${(props) => props.theme.fontSizes.sm};
`;
