import * as Firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBjWCJBOdKholf07iBzx1n_SwYCFa1FKYk',
  authDomain: 'goldenowl-cheff.firebaseapp.com',
  databaseURL: 'https://goldenowl-cheff.firebaseio.com',
  projectId: 'goldenowl-cheff',
  storageBucket: 'goldenowl-cheff.appspot.com',
  messagingSenderId: '910907954370',
  appId: '1:910907954370:web:e8bb2ddd5e5d7548f6d75b',
  measurementId: 'G-JRZ0N09XS3',
};

Firebase.initializeApp(config);

export default Firebase;
