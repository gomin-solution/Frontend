import { Header1 } from "../elements/Header";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { useParams } from "react-router-dom";
import { socket } from "../api/socketio";
import { useEffect, useState } from "react";
import { decodeCookie } from "../api/cookie";
import { useQuery } from "react-query";
import { getNotes } from "../api/note";

function Message() {
  /* params로 roomId 가져오기 */
  const { roomId } = useParams();
  /* 유저키 가져오기 */
  const userKey = decodeCookie("accessToken")?.userKey;

  /* 쪽지 내용 전부 가져오기 */
  const { data: res } = useQuery(["getNotes", roomId], () => getNotes(roomId));
  console.log("res", res);

  /* 쪽지 입력 */
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = ({ note }) => {
    const payload = { roomId, note, userKey };
    socket.emit("chat_message", payload);
    reset();
  };

  /* 보낸 메시지 화면에 출력 */
  const [reqMessage, setReqMessage] = useState("");
  socket.on("message", (data) => {
    console.log("data", data);
    setReqMessage(data);
  });

  console.log("reqMessage", reqMessage);

  /* 마운트 시, userKey, roomId 전달 */
  useEffect(() => {
    const payload = { userKey, roomId };
    socket.emit("enter_room", payload);
  }, [userKey, roomId]);

  return (
    <>
      <Header1 title={"쪽지"} navi="/note" />
      <Stcontainer>
        <StWrap>
          <StInnerWrap>
            <span style={{ fontWeight: "600" }}>보낸 쪽지</span>
            <span style={{ fontSize: "0.75rem" }}>22022. 11. 22. 15:00</span>
          </StInnerWrap>
          <div style={{ fontSize: "0.875rem" }}>{reqMessage}</div>
        </StWrap>
        <StWrap>
          <StInnerWrap>
            <span style={{ fontWeight: "600" }}>받은 쪽지</span>
            <span style={{ fontSize: "0.75rem" }}>22022. 11. 22. 15:00</span>
          </StInnerWrap>
          <div style={{ fontSize: "0.875rem" }}>
            오늘 점심으로 뭐가 좋을까요?
          </div>
        </StWrap>
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
}

export default Message;

const Stcontainer = styled.div`
  width: 100%;
  position: absolute;
  overflow: auto;
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
  height: 5rem;
  margin-bottom: ${(props) => props.theme.margins.sm};
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

  background-color: #dce7e7;
  border: none;

  input {
    border: none;
    width: 100%;
    background-color: transparent;
  }
  button {
    display: flex;
  }
`;
