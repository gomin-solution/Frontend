//패키지 관련
import Router from "./router/Router";
import GlobalStyle from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { ErrorBoundary } from "react-error-boundary";
import Theme from "./shared/theme";
import ErrorFallback from "./components/ErrorFallback";
import firebase from "firebase";

const config = {
  apiKey: "AIzaSyA_h2WDyKraS3exOKzELMTqRDGEUq7lgHE",
  authDomain: "gomin-9afcf.firebaseapp.com",
  projectId: "gomin-9afcf",
  storageBucket: "gomin-9afcf.appspot.com",
  messagingSenderId: "477387012639",
  appId: "1:477387012639:web:078e41944fc1d3863e332a",
  measurementId: "G-EWW8PR9820",
};
firebase.initializeApp(config);
const messaging = firebase.messaging();

//사용자에게 허가를 받아 토큰을 가져옵니다.
messaging
  .requestPermission()
  .then(function () {
    return messaging.getToken();
  })
  .then(function (token) {
    console.log(token);
  })
  .catch(function (err) {
    console.log("fcm error : ", err);
  });

messaging.onMessage(function (payload) {
  console.log(payload.notification.title);
  console.log(payload.notification.body);
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
