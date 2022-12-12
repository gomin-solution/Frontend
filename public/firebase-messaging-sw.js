importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
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

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload?.data.title;
  const notificationOptions = {
    body: payload?.data.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);

  self.addEventListener("notificationclick", (event) => {
    event.notification.close();

    event.waitUntil(
      clients
        .matchAll({
          type: "window",
        })
        .then((clientList) => {
          for (var i = 0; i < clientList.length; i++) {
            var client = clientList[i];
            if (client.url == "/" && "focus" in client) return client.focus();
          }
          if (self.clients.openWindow)
            return self.clients.openWindow(
              `https://gomin.site/${payload?.data.link}`
            );
        })
    );
  });
});
