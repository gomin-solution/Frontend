import styled from "styled-components";
import { FlexCenter } from "../shared/css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import { socket } from "../api/socketio";
import { useMutation, useQueryClient } from "react-query";
import { removeAlarm } from "../api/alarm";
import CloseIcon from "@mui/icons-material/Close";
import Swal from "sweetalert2";

const Alarm = ({ setOpen }) => {
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

  const test = () => {
    Swal.fire({
      text: "Toast with custom target",
      target: "#custom-target",
      customClass: {
        container: "position-absolute",
      },
      toast: true,
      position: "bottom-right",
    });
  };

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
      <div onClick={test}>aaaaa</div>
      <Stcontainer>
        {/* 여기서 map 돌리기 */}
        <StInnerWrap>
          <StTopWrap style={{ display: "felx" }}>
            <StText1>보상</StText1>
            <StCloseIcon onClick={() => setOpen((prev) => !prev)}>
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
  background-color: gray;
  height: 25rem;
  margin: 0.5rem ${(props) => props.theme.paddings.xxsm};
  z-index: 99;
  position: absolute;
  right: 0;
  box-shadow: 0rem 0rem 0.5rem gray;
  overflow-x: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const StInnerWrap = styled.div`
  background-color: ${(props) => props.theme.Colors.blueGray1};
  width: 100%;
  height: 6.5rem;
  padding: ${(props) => props.theme.paddings.xsm};
  ${FlexCenter};
  flex-flow: column;
  border-bottom: 0.1rem solid lightgray;
`;

const StTopWrap = styled.div`
  width: 100%;
  ${FlexCenter}
  justify-content: space-between;
  margin-top: ${(props) => props.theme.margins.xsm};
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
