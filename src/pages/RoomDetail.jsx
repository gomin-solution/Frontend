import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { socket } from "../api/socketio";
import { useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";
import { getNotes } from "../api/room";
import { Header1 } from "../elements/Header";
import styled from "styled-components";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { Container } from "../shared/css";
import { useRecoilValue } from "recoil";
import { userKeyAtom } from "../state/atom";

const RoomDetail = () => {
  const chatContainerEl = useRef(null);

  /* params로 roomId 가져오기 */
  const { roomId } = useParams();

  /* 유저키 가져오기 */
  const userKey = useRecoilValue(userKeyAtom);

  /* 기존 쪽지 내용 담기 */
  const [messages, setMessages] = useState([]);

  /* 쪽지 내용 전부 가져오기 */
  useQuery(
    ["getNotes", roomId, setMessages],
    () => getNotes(roomId, setMessages),
    {
      refetchOnWindowFocus: false,
    }
  );

  /* 쪽지 입력 */
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = ({ note }) => {
    const payload = { roomId, note, userKey };
    socket.emit("chat_message", payload);
    reset();
  };

  /* 보낸 쪽지내용 바로 get */
  socket.on("message", (data) => {
    setMessages([
      ...messages,
      {
        note: data.note,
        date: data.date,
        userKey: data.userKey,
      },
    ]);
  });

  /* 마운트 시, userKey, roomId 전달 */
  useEffect(() => {
    const payload = { userKey, roomId };
    socket.emit("enter_room", payload);
  }, [userKey, roomId]);

  useEffect(() => {
    if (!chatContainerEl.current) return;
    const chatContainer = chatContainerEl.current;
    const { scrollHeight, clientHeight } = chatContainer;
    if (scrollHeight > clientHeight) {
      chatContainer.scrollTop = scrollHeight - clientHeight;
    }
  }, [messages.length]);

  return (
    <>
      <Header1 title={"쪽지"} navi="/rooms" roomId={roomId} leave={true} />
      <Stcontainer ref={chatContainerEl}>
        {messages?.map((message, idx) => (
          <StWrap key={idx}>
            <StInnerWrap>
              {userKey === message.userKey ? (
                <span style={{ fontWeight: "600", color: "#9CD67E" }}>
                  보낸 쪽지
                </span>
              ) : (
                <span style={{ fontWeight: "600", color: "#19696A" }}>
                  받은 쪽지
                </span>
              )}
              <span style={{ fontSize: "0.75rem", color: "#737878" }}>
                {message.date}
              </span>
            </StInnerWrap>
            <div style={{ fontSize: "0.875rem", color: "#474747" }}>
              {message.note}
            </div>
          </StWrap>
        ))}
      </Stcontainer>
      <StCommentform onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          required
          {...register("note")}
          placeholder="쪽지 내용을 입력해주세요."
        />
        <button>
          <SendOutlinedIcon />
        </button>
      </StCommentform>
    </>
  );
};

export default RoomDetail;

const Stcontainer = styled.div`
  ${Container};
  height: calc(100vh - 8rem);
  padding: ${(props) => props.theme.paddings.xl};
  overflow: auto;
  &::-webkit-scrollbar {
    background: none;
  }
  &::-webkit-scrollbar-thumb {
    background: none;
  }
`;

const StWrap = styled.div`
  width: 100%;
  padding: ${(props) => props.theme.paddings.xl};
  border-bottom: 0.1rem solid lightgray;
`;

const StInnerWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${(props) => props.theme.margins.base};
`;

/*댓글 입력 폼 */
const StCommentform = styled.form`
  width: 100%;
  height: 3rem;
  padding: 1rem 0.6rem;

  position: absolute;
  bottom: 0px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${(props) => props.theme.Colors.blueGreen3};
  border: none;

  input {
    color: #ffffff;
    border: none;
    width: 100%;
    background-color: transparent;
    ::placeholder {
      color: #ffffff;
    }
  }
  button {
    display: flex;
    color: ${(props) => props.theme.Colors.blueGreen1};
  }
`;
