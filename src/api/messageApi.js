import instance from "./api";

/* messageRoom get */
export const getRoom = async () => {
  const res = await instance.get(`/note`);
  return res;
};

/* message get */
export const getMessage = async (messageId) => {
  const res = await instance.get(`/note/${messageId}`);
  return res;
};
