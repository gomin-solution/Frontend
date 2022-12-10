self.importScripts("https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js");
self.importScripts(
  "https://www.gstatic.com/firebasejs/9.15.0/firebase-messaging.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyA_h2WDyKraS3exOKzELMTqRDGEUq7lgHE",
  authDomain: "gomin-9afcf.firebaseapp.com",
  projectId: "gomin-9afcf",
  storageBucket: "gomin-9afcf.appspot.com",
  messagingSenderId: "477387012639",
  appId: "1:477387012639:web:078e41944fc1d3863e332a",
  measurementId: "G-EWW8PR9820",
});

const firebaseMessaging = firebase.messaging();
