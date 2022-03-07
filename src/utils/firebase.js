import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import localforage from 'localforage';

// Replace this firebaseConfig object with the congurations for the project you created on your firebase console.
var firebaseConfig = {
  apiKey: 'AIzaSyBcaEXNXGRZbcowvnkJbioqWnuxCh7Cr7c',
  authDomain: 'awal-mula-79087.firebaseapp.com',
  databaseURL:
    'https://awal-mula-79087-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'awal-mula-79087',
  storageBucket: 'awal-mula-79087.appspot.com',
  messagingSenderId: '341462125487',
  appId: '1:341462125487:web:c41feeb08c968316d33d5a',
  measurementId: 'G-K71YG6HB5B',
};

initializeApp(firebaseConfig);
function tokenInlocalforage() {
  return localforage.getItem('fcm_token');
}

export const requestForToken = async () => {
  const messaging = getMessaging();

  const tokenInLocalForage = await tokenInlocalforage();
  if (tokenInLocalForage !== null) {
    return tokenInLocalForage;
  }

  return getToken(messaging, {
    vapidKey:
      'BBg7yEgUkBUzp5-kRcgBNa0nWFe8avkTN6J0K1ZIJMVbTGBH0GeqeicFBv6mxWun-zS7HACE-CfeKtTce_a5LfI',
  })
    .then((currentToken) => {
      if (currentToken) {
        localforage.setItem('fcm_token', currentToken);
        // Perform any other neccessary action with the token

        return currentToken;
      } else {
        // Show permission request UI
        console.log(
          'No registration token available. Request permission to generate one.'
        );

        return null;
      }
    })
    .catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
    });
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    const messaging = getMessaging();

    onMessage(messaging, (payload) => {
      console.log('payload', payload);
      resolve(payload);
    });
  });
