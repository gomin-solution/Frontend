import { io } from "socket.io-client";

export let socket = io(process.env.REACT_APP_API, {
  path: "/socket.io",
  transports: ["websocket"],
});
