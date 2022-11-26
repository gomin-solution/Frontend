import instance from "./api";

export const getMyPost = async () => {
  const res = await instance.get("/mypost");
  return res.data;
};
