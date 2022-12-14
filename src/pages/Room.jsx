import { Header4 } from "../elements/Header";
import styled from "styled-components";
import Footer from "../elements/Footer";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getRooms, outRoom } from "../api/room";
import { Container } from "../shared/css";
import CloseIcon from "@mui/icons-material/Close";
import { ChooseAlert, ErrorAlert } from "../elements/Alert";
import room from "../image/empty/room.jpg";

const Room = () => {
  const queryClient = useQueryClient();
  const nav = useNavigate();

  const { data: res } = useQuery("getRooms", getRooms, {
    refetchOnWindowFocus: false,
    retry: false,
    onError: () => {
      ErrorAlert("비정상적인 접근입니다.", "/main");
    },
  });
  const rooms = res?.data;

  /* 쪽지 방 나가기 */
  const { mutate } = useMutation(outRoom, {
    onSuccess: () => {
      queryClient.invalidateQueries("getRooms");
    },
  });
  const roomHandler = (e, roomId) => {
    e.stopPropagation();
    ChooseAlert("쪽지방을 나가시겠습니까?", "확인", mutate, null, roomId);
  };

  return (
    <>
      <Header4 title={"쪽지함"} />
      {rooms && rooms[0] ? (
        <Stcontainer>
          {rooms?.map((room) => (
            <StWrap
              key={room.roomId}
              onClick={() => nav(`/rooms/${room.roomId}`)}
            >
              <StInnerWrap>
                <span style={{ fontWeight: "600" }}>{room.title}</span>
                <StCloseIcon
                  onClick={(e) => {
                    roomHandler(e, room.roomId);
                  }}
                >
                  <CloseIcon />
                </StCloseIcon>
              </StInnerWrap>
              <StSet style={{ fontSize: "0.875rem", color: "#474747" }}>
                {room.nickname}
                <span style={{ fontSize: "0.75rem", color: "#737878" }}>
                  {room.recentDate}
                </span>
              </StSet>
            </StWrap>
          ))}
        </Stcontainer>
      ) : (
        <Stcontainer>
          <StEmpty src={room} alt="empty" />
        </Stcontainer>
      )}
      <Footer title={"쪽지함"} />
    </>
  );
};

export default Room;

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

const StEmpty = styled.img`
  width: 100%;
`;
