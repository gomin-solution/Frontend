import axios from "axios";
import { OkayNaviAlert } from "../elements/Alert";
import { getCookie, removeCookie, setCookie } from "./cookie";

/* ----------------instance---------------- */
export const instance = axios.create({
  baseURL: process.env.REACT_APP_API,
  withCredentials: true,
});

// /* interceptor: request */
instance.interceptors.request.use(
  /* 요청이 전달되기 전에 작업 수행 */
  (config) => {
    const accToken = getCookie("accessToken");
    const refToken = getCookie("refreshToken");
    config.headers = {
      authorization: `Bearer ${accToken}`,
      refreshToken: `Bearer ${refToken}`,
      "Content-Type": "application/json; charset=utf-8",
    };
    return config;
  },
  (error) => {
    /* 요청 오류가 있는 작업 수행 */
    return Promise.reject(error);
  }
);

/* interceptor: response */
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    try {
      const { response, config } = error;
      const originalRequest = config;
      /* accessToken 만료: 405에러 */
      if (response.data.message === "만료" && response.status === 405) {
        const refToken = getCookie("refreshToken");
        /* 새로운 accessToken 요청 */
        try {
          const accToken = getCookie("accessToken");
          const res = await axios({
            method: "get",
            url: process.env.REACT_APP_API,
            headers: {
              authorization: `Bearer ${accToken}`,
              refreshToken: `Bearer ${refToken}`,
            },
          });
          /* accessToken 변경 후 재요청 */
          originalRequest.headers.authorization = res.data.accessToken;
          removeCookie("accessToken");
          setCookie("accessToken", res.data.accessToken, {
            maxAge: 60 * 60 * 24 * 15,
          });
          return instance.request(originalRequest);
        } catch (error) {
          /* accessToken 변경 실패 시 */
          removeCookie("accessToken");
          removeCookie("refreshToken");
          return OkayNaviAlert("재로그인이 필요합니다.", "/login", "userKey");
        }
        /* refreshToken 만료 시 status: 403 */
      } else if (
        response.data.message === "다시 로그인 해주세요." &&
        response.status === 403
      ) {
        removeCookie("accessToken");
        removeCookie("refreshToken");
        localStorage.removeItem("userKey");
        return OkayNaviAlert("재로그인이 필요합니다.", "/login", "userKey");
      }
    } catch (error) {
      console.log(error);
    }
    return Promise.reject(error);
  }
);

/* ----------------postInstance---------------- */
export const postInstance = axios.create({
  baseURL: process.env.REACT_APP_API,
  withCredentials: true,
});

// /* interceptor: request */
postInstance.interceptors.request.use(
  /* 요청이 전달되기 전에 작업 수행 */
  (config) => {
    const accToken = getCookie("accessToken");
    const refToken = getCookie("refreshToken");
    config.headers = {
      authorization: `Bearer ${accToken}`,
      refreshToken: `Bearer ${refToken}`,
      "Content-Type": "multipart/form-data",
    };
    return config;
  },
  (error) => {
    /* 요청 오류가 있는 작업 수행 */
    return Promise.reject(error);
  }
);

/* interceptor: response */
postInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    try {
      const { response, config } = error;
      const originalRequest = config;
      /* accessToken 만료: 405에러 */
      if (response.data.message === "만료" && response.status === 405) {
        const refToken = getCookie("refreshToken");
        /* 새로운 accessToken 요청 */
        try {
          const accToken = getCookie("accessToken");
          const res = await axios({
            method: "get",
            url: process.env.REACT_APP_API,
            headers: {
              authorization: `Bearer ${accToken}`,
              refreshToken: `Bearer ${refToken}`,
            },
          });
          /* accessToken 변경 후 재요청 */
          originalRequest.headers.authorization = res.data.accessToken;
          removeCookie("accessToken");
          setCookie("accessToken", res.data.accessToken, {
            maxAge: 60 * 60 * 24 * 15,
          });
          return postInstance.request(originalRequest);
        } catch (error) {
          /* accessToken 변경 실패 시 */
          removeCookie("accessToken");
          removeCookie("refreshToken");
          return OkayNaviAlert("재로그인이 필요합니다.", "/login");
        }
        /* refreshToken 만료 시 status: 403 */
      } else if (
        response.data.message === "다시 로그인 해주세요." &&
        response.status === 403
      ) {
        removeCookie("accessToken");
        removeCookie("refreshToken");
        return OkayNaviAlert("재로그인이 필요합니다.", "/login");
      }
    } catch (error) {
      console.log(error);
    }
    return Promise.reject(error);
  }
);
