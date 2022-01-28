// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    // REPLACE BY YOUR FIREBASE CONFIG HERE
    apiKey: "AIzaSyAc5UTq8YcCblJFyQzJTl6wrjkVSCsBuEs",
    authDomain: "attendancepwa-e8305.firebaseapp.com",
    projectId: "attendancepwa-e8305",
    storageBucket: "attendancepwa-e8305.appspot.com",
    messagingSenderId: "751666883415",
    appId: "1:751666883415:web:82cbb0080bc6a3f30a6c12",
    measurementId: "G-HTR85R42RM"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();