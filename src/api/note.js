import instance from "./api";

/* 쪽지하기 all rooms get */
export const getRooms = async () => {
  const res = await instance.get(`/rooms`);
  return res;
};

/* 이전 쪽지내용 전부 get */
export const getNotes = async (roomId) => {
  const res = await instance.get(`/rooms/${roomId}`);
  return res;
};
