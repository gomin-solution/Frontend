import { ChooseNaviAlert } from "../elements/Alert";
import { instance } from "./api";

/* 쪽지하기 all rooms get */
export const getRooms = async () => {
  const res = await instance.get(`/rooms`);
  return res;
};

/* 이전 쪽지내용 전부 get */
export const getNotes = async (roomId, setMessage) => {
  const res = await instance.get(`/rooms/${roomId}`);
  setMessage(res.data.notes);
  return res;
};

/* 쪽지 방 나가기 */
export const outRoom = async (roomId) => {
  await instance.delete(`/rooms/${roomId}`);
};
