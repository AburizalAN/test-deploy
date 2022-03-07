// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: 'AIzaSyBcaEXNXGRZbcowvnkJbioqWnuxCh7Cr7c',
    authDomain: 'awal-mula-79087.firebaseapp.com',
    databaseURL:
      'https://awal-mula-79087-default-rtdb.asia-southeast1.firebasedatabase.app',
    projectId: 'awal-mula-79087',
    storageBucket: 'awal-mula-79087.appspot.com',
    messagingSenderId: '341462125487',
    appId: '1:341462125487:web:c41feeb08c968316d33d5a',
    measurementId: 'G-K71YG6HB5B',
  });

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);
 // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification?.icon || '/logo_main.png'
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
