import { Header4 } from "../elements/Header";
import styled from "styled-components";
import Footer from "../elements/Footer";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { getRooms } from "../api/room";
import { Container } from "../shared/css";

const Room = () => {
  const nav = useNavigate();

  const { data: res } = useQuery("getRooms", getRooms);
  const rooms = res?.data;

  return (
    <>
      <Header4 title={"쪽지"} />
      <Stcontainer>
        {rooms?.map((room) => (
          <StWrap
            key={room.roomId}
            onClick={() => nav(`/rooms/${room.roomId}`)}
          >
            <StInnerWrap>
              <span style={{ fontWeight: "600" }}>{room.title}</span>
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
      <Footer title={"쪽지"} />
    </>
  );
};

export default Room;

const Stcontainer = styled.div`
  ${Container};
  height: calc(100vh - 9rem);
  padding: ${(props) => props.theme.paddings.xl};
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
  padding: ${(props) => props.theme.paddings.xl};
`;

const StInnerWrap = styled.div`
  display: flex;
  margin-bottom: ${(props) => props.theme.margins.xsm};
  overflow: hidden;

  span {
    text-overflow: ellipsis; // 말줄임 적용
    white-space: nowrap; // 문장이 길어지면 다음 줄로 넘기는 것을 없앰
    overflow: hidden;
  }
`;

const StSet = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
