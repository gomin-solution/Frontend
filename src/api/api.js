import axios from "axios";
import { getCookie, removeCookie, setCookie } from "./cookie";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API,
  withCredentials: true,
});

/* interceptor: request */
instance.interceptors.request.use(
  /* 요청이 전달되기 전에 작업 수행 */
  (config) => {
    const accToken = getCookie("accessToken");
    config.headers.authorization = `Bearer ${accToken}`;
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
      /* accessToken 만료 시 status: 405 */
      if (response.data.msg === "만료" && response.status === 405) {
        const refToken = getCookie("refreshToken");
        /* accessToken get */
        try {
          const accToken = getCookie("accessToken");
          const res = await axios({
            method: "get",
            url: process.env.REACT_APP_API,
            headers: {
              authorization: `Bearer ${accToken}`,
              refreshToken: `${refToken}`,
            },
          });
          /* accessToken 변경 */
          originalRequest.headers.authorization = res.data.accessToken;
          removeCookie("accessToken");
          setCookie("accessToken", res.data.accessToken);
          return axios(originalRequest);
        } catch (error) {
          /* accessToken 변경 실패 시 */
          removeCookie("accessToken");
          removeCookie("refreshToken");
          window.location.href = "/login";
        }
        /* refreshToken 만료 시 status: 403 */
      } else if (
        response.data.msg === "다시 로그인 해주세요." &&
        response.status === 403
      ) {
        removeCookie("accessToken");
        removeCookie("refreshToken");
        window.location.href = "/login";
      }
    } catch (error) {
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);
