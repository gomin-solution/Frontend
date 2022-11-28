import axios from "axios";
import { getCookie, removeCookie, setCookie } from "./cookie";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API,
  withCredentials: true,
});

/* REQUEST INTERCEPTORS ----------------------------------------------------- */
instance.interceptors.request.use(
  // 요청이 전달되기 전에 작업 수행
  (config) => {
    const accToken = getCookie("accessToken");
    config.headers.authorization = `Bearer ${accToken}`;
    console.log("여기", accToken);
    return config;
  },
  (error) => {
    // 요청 오류가 있는 작업 수행
    return Promise.reject(error);
  }
);

/* RESPONSE INTERCEPTORS ---------------------------------------------------- */
instance.interceptors.response.use(
  (response) => {
    // 응답 데이터가 있는 작업 수행 : STATUS CODE 2XX
    return response;
  },
  async (error) => {
    // 응답 오류가 있는 작업 수행 : STATUS CODE WITHOUT 2XX
    try {
      const { response, config } = error;
      const originalRequest = config;
      // ACCESSTOKEN FAILED : 405 / REFRESHTOKEN FAILED : 403
      /* GET ACCESSTOKEN FAILED --------------------------------------------------- */
      if (response.data.msg === "만료" && response.status === 405) {
        const refToken = getCookie("refreshToken");
        /* GET : NEW ACCESSTOKEN ---------------------------------------------------- */
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
          /* CHANGE ACCESSTOKEN ------------------------------------------------------- */
          originalRequest.headers.authorization = res.data.accessToken;
          removeCookie("accessToken");
          setCookie("accessToken", res.data.accessToken);
          return axios(originalRequest);
        } catch (error) {
          /* CHANGE ACCESSTOKEN FAILED ------------------------------------------------ */
          removeCookie("accessToken");
          removeCookie("refreshToken");
          // window.location.href = "/login";
        }
        /* GET REFRESHTOKEN FAILED -------------------------------------------------- */
      } else if (
        response.data.msg === "다시 로그인 해주세요." &&
        response.status === "403"
      ) {
        removeCookie("accessToken");
        removeCookie("refreshToken");
        // window.location.href = "/login";
      }
    } catch (error) {
      // window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);
