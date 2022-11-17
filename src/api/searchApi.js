import instance from "./api";

const getSearch = async (search) => {
  console.log(search);
  const res = await instance.get(`/search/${search}`);
  return res.data;
};

export default getSearch;
