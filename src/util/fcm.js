import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const config = {
  apiKey: "AIzaSyDE0q3G3C6Hd-LBgYhWIhI1VaOVoQO1taY",
  authDomain: "gomin-ab538.firebaseapp.com",
  projectId: "gomin-ab538",
  storageBucket: "gomin-ab538.appspot.com",
  messagingSenderId: "439444583442",
  appId: "1:439444583442:web:b03aecb30bf27279e894cb",
  measurementId: "G-5D35YZPYBZ",
};

const app = initializeApp(config);
const analytics = getAnalytics(app);
const messaging = getMessaging();

//토큰값 얻기
getToken(messaging, {
  vapidKey:
    "BDNR9byaFUWAFSdJja9uLE8Zy8l4vE4sq26eNdo2ZjAG2s1yiGeUApZVFPDOaqcO2oUAptVNOuyh78Vz3YysRmE",
})
  .then((currentToken) => {
    if (currentToken) {
      // Send the token to your server and update the UI if necessary
      // ...
      console.log(currentToken);
    } else {
      // Show permission request UI
      console.log(
        "No registration token available. Request permission to generate one."
      );
      // ...
    }
  })
  .catch((err) => {
    console.log("An error occurred while retrieving token. ", err);
    // ...
  });

//포그라운드 메시지 수신
onMessage(messaging, (payload) => {
  console.log("Message received. ", payload);
  // ...
});
