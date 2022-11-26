import instance from "./api";

export const getMyPost = async (search) => {
  const res = await instance.get(`/mypost/${search}`);
  return res.data;
};
