import * as Firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDYRE921ZLqxw2bgoBVRq_uswE6_nqm5ZQ',
  authDomain: 'cheff-app-mobile.firebaseapp.com',
  databaseURL: 'https://cheff-app-mobile.firebaseio.com',
  projectId: 'cheff-app-mobile',
  storageBucket: 'cheff-app-mobile.appspot.com',
  messagingSenderId: '895663982996',
  appId: '1:895663982996:web:7c9a0d65e7c10c1da12781',
};

Firebase.initializeApp(config);

export default Firebase;
