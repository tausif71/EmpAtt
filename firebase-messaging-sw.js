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
    apiKey: "AIzaSyAB8_2kw-VQmDRoAKL3LjtjXuxsAAP5dyo",
    authDomain: "my-test-project-39efb.firebaseapp.com",
    databaseURL: "https://my-test-project-39efb.firebaseio.com",
    projectId: "my-test-project-39efb",
    storageBucket: "my-test-project-39efb.appspot.com",
    messagingSenderId: "533938119774",
    appId: "1:533938119774:web:37e59a6541af6a805380cf",
    vapidKey: "BAeBOI_h2cdqTh7KZnn-FSOfNlgc1vEncANL39BtOgrDmKSvxrtrYFYLvVhjiUf44Ky4HMYyI9qhDPXMRh_eIqc"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();