// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.

importScripts("https://www.gstatic.com/firebasejs/9.1.3/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.1.3/firebase-messaging-compat.js");

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    // REPLACE BY YOUR FIREBASE CONFIG HERE
    apiKey: "AIzaSyAMF__fZfJr_n4TQN3fqH_3FMwX6cDkql0",
    authDomain: "notificationwebportal.firebaseapp.com",
    projectId: "notificationwebportal",
    storageBucket: "notificationwebportal.appspot.com",
    messagingSenderId: "540556220617",
    appId: "1:540556220617:web:0647a71b177ba2a726d518",
    measurementId: "G-VFQLHPR6MB"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();