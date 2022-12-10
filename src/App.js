//패키지 관련
import Router from "./router/Router";
import GlobalStyle from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { ErrorBoundary } from "react-error-boundary";
import Theme from "./shared/theme";
import ErrorFallback from "./components/ErrorFallback";
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyA_h2WDyKraS3exOKzELMTqRDGEUq7lgHE",
  authDomain: "gomin-9afcf.firebaseapp.com",
  projectId: "gomin-9afcf",
  storageBucket: "gomin-9afcf.appspot.com",
  messagingSenderId: "477387012639",
  appId: "1:477387012639:web:078e41944fc1d3863e332a",
  measurementId: "G-EWW8PR9820",
};

const app = initializeApp(firebaseConfig);
const firebaseMessaging = getMessaging(app);

//DeviceToken을 생성합니다
getToken(firebaseMessaging, { vapidKey: process.env.REACT_APP_FCM_VAPID_KEY })
  .then((deviceToken) => {
    console.log("deviceToken", deviceToken);
  })
  .catch((error) => {
    console.log(error);
  });

//포그라운드 시에 알림을 받습니다
onMessage(firebaseMessaging, (payload) => {
  console.log(payload);
});

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Router />
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
