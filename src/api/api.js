import axios from "axios";
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
instance.interceptors.response.use((response) => {
  const originalRequest = response?.config;
  if (response.data.message === "토큰 재발급" && response.status === 201) {
    /* accessToken 변경 후 재요청 */
    removeCookie("accessToken");
    setCookie("accessToken", response?.data?.accessToken, {
      maxAge: 60 * 60 * 24 * 15,
    });
    originalRequest.headers.authorization = response?.data?.accessToken;
    return instance.request(originalRequest);
  } else {
    return response;
  }
});

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
postInstance.interceptors.response.use((response) => {
  const originalRequest = response?.config;
  if (response.data.message === "토큰 재발급" && response.status === 201) {
    /* accessToken 변경 후 재요청 */
    removeCookie("accessToken");
    setCookie("accessToken", response?.data?.accessToken, {
      maxAge: 60 * 60 * 24 * 15,
    });
    originalRequest.headers.authorization = response?.data?.accessToken;
    return postInstance.request(originalRequest);
  } else {
    return response;
  }
});
