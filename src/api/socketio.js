import { io } from "socket.io-client";

export const socket = io(process.env.REACT_APP_API, {
  path: "/socket.io",
  transports: ["websocket"],
});

export const alarm = (socketName, messageName, setAlarmList) => {
  socket.on({ socketName }, () => {
    setAlarmList(`${messageName}\n 알림을 확인해주세요.`);
    setTimeout(() => setAlarmList(""), 2000);
  });
};
