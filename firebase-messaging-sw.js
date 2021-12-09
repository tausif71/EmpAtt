// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.7.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.7.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: "AIzaSyAc5UTq8YcCblJFyQzJTl6wrjkVSCsBuEs",
    authDomain: "attendancepwa-e8305.firebaseapp.com",
    projectId: "attendancepwa-e8305",
    storageBucket: "attendancepwa-e8305.appspot.com",
    messagingSenderId: "751666883415",
    appId: "1:751666883415:web:85d36539a916d3d20a6c12",
    measurementId: "G-WDBEL9GXEY"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
