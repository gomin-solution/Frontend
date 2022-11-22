import { useSetRecoilState } from "recoil";
import instance from "./api";

const getSearch = async (search) => {
  const res = await instance.get(`/search/${search}`);
  return res.data;
};

export default getSearch;
