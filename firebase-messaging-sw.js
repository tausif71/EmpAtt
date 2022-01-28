importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-messaging.js');
firebase.initializeApp({
    apiKey: "AIzaSyAc5UTq8YcCblJFyQzJTl6wrjkVSCsBuEs",
    authDomain: "attendancepwa-e8305.firebaseapp.com",
    projectId: "attendancepwa-e8305",
    storageBucket: "attendancepwa-e8305.appspot.com",
    messagingSenderId: "751666883415",
    appId: "1:751666883415:web:82cbb0080bc6a3f30a6c12",
    measurementId: "G-HTR85R42RM"
});
const messaging = firebase.messaging();