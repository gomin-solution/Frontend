import { instance } from "./api";

export const getSearch = async (search) => {
  const res = await instance.get(`/search/${search}`);
  return res.data;
};

export const userSearch = async () => {
  const res = await instance.get(`/search`);
  return res.data;
};
