import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const config = {
  apiKey: 'AIzaSyDV9PMygW-ANSe1ZAm9XHirnKiX2rh7VlA',
  authDomain: 'cheff-eca26.firebaseapp.com',
  databaseURL: 'https://cheff-eca26-default-rtdb.firebaseio.com',
  projectId: 'cheff-eca26',
  storageBucket: 'cheff-eca26.appspot.com',
  messagingSenderId: '979466185896',
  appId: '1:979466185896:web:bf3a06a1afce4e5fb6e69d',
};

firebase.initializeApp(config);
export default firebase;
