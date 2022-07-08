importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-messaging.js');
  firebase.initializeApp({
 apiKey: "AIzaSyAvy3mKilnCvK4Eq4HoORmjjtgcGZFekyY",
  authDomain: "attendanceapp-96453.firebaseapp.com",
  projectId: "attendanceapp-96453",
  storageBucket: "attendanceapp-96453.appspot.com",
  messagingSenderId: "742454421899",
  appId: "1:742454421899:web:3ea83cf38023555fb5278e",
  measurementId: "G-E0GKCKY7XY"
});
  const messaging = firebase.messaging();