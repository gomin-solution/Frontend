import styled from "styled-components";
import { Container, FlexCenter } from "../shared/css";
// import { socket } from "../api/socketio";
import { useMutation, useQueryClient } from "react-query";
import { removeAlarm } from "../api/alarm";
import CloseIcon from "@mui/icons-material/Close";
import { AlarmAlert } from "../elements/Alert";
import { Header1 } from "../elements/Header";
import { Container } from "../shared/css";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getAlarms, removeAlarm } from "../api/alarm";
import CloseIcon from "@mui/icons-material/Close";

const Alarm = () => {
  const queryClient = useQueryClient();

  /* 알림 내용 전부 가져오기 */
  const { data: res } = useQuery("getAlarms", getAlarms, {
    refetchOnWindowFocus: false,
  });

  /* 알림 삭제 */
  const { mutate } = useMutation(removeAlarm, {
    onSuccess: () => {
      queryClient.invalidateQueries("getAlarms");
    },
    retry: false,
    refetchOnWindowFocus: false,
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

  // return (
  //   <>
  //     <Header1 title={"알림"} />
  //     <Stcontainer>
  //       {/* 여기서 map 돌리기 */}
  //       <StInnerWrap>
  //         <StTopWrap style={{ display: "felx" }}>
  //           <StText1>보상</StText1>
  //           <StCloseIcon>
  //             <CloseIcon />
  //           </StCloseIcon>
  //         </StTopWrap>
  //         <StBottomWrap>
  //           <StColumn>
  //             <span>미션완료!</span>
  //             <span>지금 바로 리워드 보상을 받으세요!</span>
  //             <StText2>16:51</StText2>
  //           </StColumn>
  //         </StBottomWrap>
  //       </StInnerWrap>
  return (
    <>
      <Header4 title={"알림"} />
      <Stcontainer>
        {res?.data?.alarms.map((alarm, idx) => (
          <StWrap key={idx}>
            <StInnerWrap>
              <span style={{ fontWeight: "600" }}>{alarm.body}</span>
              <StCloseIcon onClick={() => mutate(alarm)}>
                <CloseIcon />
              </StCloseIcon>
            </StInnerWrap>
            <StSet style={{ fontSize: "0.875rem", color: "#474747" }}>
              지금 바로 확인해보세요.
              <span style={{ fontSize: "0.75rem", color: "#737878" }}>
                {alarm.date}
              </span>
            </StSet>
          </StWrap>
        ))}
      </Stcontainer>
      <Footer title={"쪽지함"} />
    </>
  );
};

export default Alarm;

const Stcontainer = styled.div`
  ${Container};
  height: calc(100vh - 9rem);
  padding: ${(props) => props.theme.paddings.xl};
  margin-top: 4rem;
  &::-webkit-scrollbar {
    background: none;
  }
  &::-webkit-scrollbar-thumb {
    background: none;
  }
`;

const StWrap = styled.div`
  background-color: ${(props) => props.theme.Colors.blueGray2};
  width: 100%;
  height: 5rem;
  margin-bottom: ${(props) => props.theme.margins.sm};
  padding: ${(props) => props.theme.paddings.base};
`;

const StInnerWrap = styled.div`
  display: flex;
  justify-content: space-between;
  overflow: hidden;

  span {
    text-overflow: ellipsis; // 말줄임 적용
    white-space: nowrap; // 문장이 길어지면 다음 줄로 넘기는 것을 없앰
    overflow: hidden;
  }
`;

const StCloseIcon = styled.span`
  color: ${(props) => props.theme.Colors.blueGreen3};
  flex-grow: 0;
  flex-shrink: 0;
  cursor: pointer;
`;

const StSet = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
