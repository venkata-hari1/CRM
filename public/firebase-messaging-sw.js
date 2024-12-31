importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

const firebaseConfig = {
  apiKey: "AIzaSyBtrE737nyn2e63wDcM24qTyJ-zcUTDMv8",
  authDomain: "realestate-8da47.firebaseapp.com",
  projectId: "realestate-8da47",
  storageBucket: "realestate-8da47.appspot.com",
  messagingSenderId: "327827073236",
  appId: "1:327827073236:web:3f98c89dcba097fee5f341",
  measurementId: "G-PTWSWJWF5F"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
})
