import axios from "axios";
import { getCookie } from "./cookie";

const myToken = getCookie();
const refToken = getCookie();

const instance = axios.create({
  baseURL: process.env.REACT_APP_API,
  headers: {
    authorization: `Bearer ${myToken}`,
  },
});

// instance.interceptors.request.use((config) => {
//   config.headers.authorization = `Bearer ${myToken}`;
//   config.headers.refreshtoken = `${refToken}`;

//   return config;
// });

// instance.interceptors.response.use(
//   (config) => {
//     if (config.status === 201 && config.data.msg.includes("재발급")) {
//       return axios({
//         ...config.config,
//         headers: {
//           accessToken: `Bearer ${config.data.authorization}`,
//           refreshToken: `Bearer ${config.data.refreshtoken}`,
//         },
//       }).then(() => {
//         localStorage.setItem("accessToken", config.data.authorization);
//         localStorage.setItem("refreshToken", config.data.refreshtoken);
//       });
//     } else {
//       return config;
//     }
//   },
//   (error) => {
//     if (
//       error.response.status === 401 &&
//       error.response.data.errMsg.includes("만료")
//     ) {
//       localStorage.clear();
//     }
//     return Promise.reject(error);
//   }
// );

export default instance;
