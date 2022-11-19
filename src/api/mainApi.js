import instance from "./api";

export const getMain = async () => {
  const res = await instance.get("/");
  return res;
};
