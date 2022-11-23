/* -----------------아래 코드는 블로그에 정리된 거 가져온 것. 노마드코더 강의 듣는중----------------- */

// socket.connect(): 소켓 연결.
// socket.emit("이벤트 명", Data): 이벤트 명을 지정하고 데이터를 보냄.
// socket.on("이벤트 명", 콜백 함수): 해당 이벤트를 받고 콜백함수를 실행.
// socket.disconnect(): 소켓 연결을 끊음.

import { io } from "socket.io-client";

export let socket = io(process.env.REACT_APP_API, {
  path: "/socket.io",
  transports: ["websocket"],
});

// export const initSocketConnection = () => {
//   if (socket) return;
//   socket.connect();
// };

// // 이벤트 명을 지정하고 데이터를 보냄
// export const sendSocketMessage = (cmd, body = null) => {
//   if (socket == null || socket.connected === false) {
//     initiateSocketConnection();
//   }
//   socket.emit("message", {
//     cmd: cmd,
//     body: body,
//   });
// };

// let cbMap = new Map();

// // 해당 이벤트를 받고 콜백 함수를 실행함
// export const socketInfoReceived = (cbType, cb) => {
//   cbMap.set(cbType, cb);

//   if (socket.hasListeners("message")) {
//     socket.off("message");
//   }

//   socket.on("message", (ret) => {
//     for (let [, cbValue] of cbMap) {
//       cbValue(null, ret);
//     }
//   });
// };

// // 소켓 연결을 끊음
// export const disconnectSocket = () => {
//   if (socket == null || socket.connected === false) {
//     return;
//   }
//   socket.disconnect();
//   socket = undefined;
// };
