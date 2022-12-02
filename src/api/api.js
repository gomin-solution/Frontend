import axios from "axios";
import { Alert1 } from "../elements/Alert";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API,
  withCredentials: true,
});

/* interceptor: response */
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    console.log(error);
    try {
      if (
        error.response.data.errMsg === "다시 로그인 해주세요." ||
        error.response.data.errMsg === "다시 로그인 해주세요"
      ) {
        localStorage.removeItem("recoil-persist");
        return Alert1("재로그인이 필요합니다.", "/login");
      }
    } catch (error) {
      console.log(error);
    }
    return Promise.reject(error);
  }
);
