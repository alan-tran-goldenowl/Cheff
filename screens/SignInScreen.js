import React from 'react';
import {
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import * as firebase from 'firebase';
import Expo from 'expo';

import styles from '../styles/SignInStyle';

const firebaseConfig = {
  apiKey: 'AIzaSyCBcidAJQ-aQ2C213UZ5ZVxNc0WkpP4esg',
  authDomain: 'cheff-f3d45.firebaseapp.com',
  databaseURL: 'https://cheff-f3d45.firebaseio.com',
  projectId: 'cheff-f3d45',
  storageBucket: 'cheff-f3d45.appspot.com',
  messagingSenderId: '1073567917248',
};
firebase.initializeApp(firebaseConfig);

export default class SignInScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  checkUserAuthencation = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        this.props.navigation.navigate('Main');
      } else {
        this.logIn();
      }
    });
  }

  logIn = async () => {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(
      '1704319859617231',
      {
        permissions: ['public_profile'],
      },
    );
    if (type === 'success') {
      // Get the user's name using Facebook's Graph API
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}`,
      );
      console.log(`Logged in! Hi ${(await response.json()).name}!`);
      const credential = firebase.auth.FacebookAuthProvider.credential(token);

      firebase
        .auth()
        .signInAndRetrieveDataWithCredential(credential)
        .catch((error) => {
          console.log('Login Facebook failled', error);
        });
    }
  }

  render() {
    return (
      <ImageBackground
        source={require('../assets/images/background.png')}
        style={{ flex: 1 }}
      >
        <View
          style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}
        >
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Main')}
            style={styles.textSignInGG}
          >
            <Image
              source={require('../assets/images/btn_gg.png')}
              style={styles.image}
            />
            <Text style={styles.textGG}>Google</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={this.checkUserAuthencation}
            style={styles.textSignInFb}
          >
            <Image
              source={require('../assets/images/btn_fb.png')}
              style={styles.image}
            />
            <Text style={styles.textFB}>Facebook</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
