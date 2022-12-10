import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const config = {
  apiKey: "AIzaSyA_h2WDyKraS3exOKzELMTqRDGEUq7lgHE",
  authDomain: "gomin-9afcf.firebaseapp.com",
  projectId: "gomin-9afcf",
  storageBucket: "gomin-9afcf.appspot.com",
  messagingSenderId: "477387012639",
  appId: "1:477387012639:web:078e41944fc1d3863e332a",
  measurementId: "G-EWW8PR9820",
};

const app = initializeApp(config);
const analytics = getAnalytics(app);
const messaging = getMessaging();

//토큰값 얻기
getToken(messaging, {
  vapidKey:
    "BMHX5oMUi21lbqFs6-HnYNyL0UO-J9D2Zv4z2MK9JigzRmtbYLswRBACpOaN-SknNjktQkZ3VSvfMNgN17K0zfw",
})
  .then((currentToken) => {
    console.log("11111", currentToken);
    if (currentToken) {
      // Send the token to your server and update the UI if necessary
      // ...
      console.log("22222", currentToken);
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
