import styled from "styled-components";
import { Container } from "../shared/css";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getAlarms, removeAlarm } from "../api/alarm";
import CloseIcon from "@mui/icons-material/Close";
import { Header1 } from "../elements/Header";
import { useNavigate } from "react-router-dom";
import alarm from "../image/empty/alarm.jpg";

const Alarm = () => {
  const nav = useNavigate();
  const queryClient = useQueryClient();

  /* 알림 내용 전부 가져오기 */
  const { data: res } = useQuery("getAlarms", getAlarms, {
    refetchOnWindowFocus: false,
  });

  /* 알림 삭제 */
  const removeMutate = useMutation(removeAlarm, {
    onSuccess: () => {
      queryClient.invalidateQueries("getAlarms");
    },
    retry: false,
    refetchOnWindowFocus: false,
  });

  const removeHandler = (e, idx) => {
    e.stopPropagation();
    removeMutate.mutate(idx);
  };

  return (
    <>
      <Header1 title={"알림"} />
      <Stcontainer>
        {res?.data?.alarms.length ? (
          <>
            {res?.data?.alarms.map((alarm, idx) => (
              <StWrap key={idx}>
                <StInnerWrap onClick={() => nav(`/${alarm.link}`)}>
                  <span style={{ fontWeight: "600" }}>{alarm.body}</span>
                  <StCloseIcon onClick={(e) => removeHandler(e, idx)}>
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
          </>
        ) : (
          <>
            <Stimg src={alarm} alrt="alarm" />
          </>
        )}
      </Stcontainer>
    </>
  );
};

export default Alarm;

const Stcontainer = styled.div`
  ${Container};
  height: calc(100vh - 4rem);
  margin-top: 4rem;
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

const Stimg = styled.img`
  width: 100%;
`;
