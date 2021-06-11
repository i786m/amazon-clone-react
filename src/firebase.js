import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDuC7b0qJNB3iCjFy9e1TDtuFMprOEwJ0Q',
  authDomain: 'clone-faa4c.firebaseapp.com',
  projectId: 'clone-faa4c',
  storageBucket: 'clone-faa4c.appspot.com',
  messagingSenderId: '508724837698',
  appId: '1:508724837698:web:ca85f9ca7a28d115601cdb',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
