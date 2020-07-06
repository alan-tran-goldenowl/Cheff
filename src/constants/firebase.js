import * as Firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCHCLOZB3G5xMpZv0JqF5LoA4wJQ7bLIos",
  authDomain: "cheff-app-mobile-4e38e.firebaseapp.com",
  databaseURL: "https://cheff-app-mobile-4e38e.firebaseio.com",
  projectId: "cheff-app-mobile-4e38e",
  storageBucket: "cheff-app-mobile-4e38e.appspot.com",
  messagingSenderId: "720924385775",
  appId: "1:720924385775:web:840092e40f80281b98d61a",
};

Firebase.initializeApp(config);
export default Firebase;
