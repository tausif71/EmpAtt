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
    apiKey: "AIzaSyAvy3mKilnCvK4Eq4HoORmjjtgcGZFekyY",
    authDomain: "attendanceapp-96453.firebaseapp.com",
    projectId: "attendanceapp-96453",
    storageBucket: "attendanceapp-96453.appspot.com",
    messagingSenderId: "742454421899",
    appId: "1:742454421899:web:3ea83cf38023555fb5278e",
    measurementId: "G-E0GKCKY7XY"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();