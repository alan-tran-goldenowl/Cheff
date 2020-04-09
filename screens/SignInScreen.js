import React from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from 'react-native';
import * as Facebook from 'expo-facebook';

import FireBase from '../firebase';
import { storageHelper } from '../utils';

import styles from '../styles/SignInStyle';

const APP_ID = '534372374169887';
export default class SignInScreen extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };

  state = {
    showLoginOptions: false,
  };

  componentDidMount() {
    FireBase.auth().onAuthStateChanged(async (user) => {
      if (!user) {
        return this.setState({
          showLoginOptions: true,
        });
      }

      storageHelper.setAsyncStorage('userInfo', {
        photoURL: user.photoURL,
        displayName: user.displayName,
      })
        .then(() => this.props.navigation.navigate('Main'))
        .catch(() => {});
    });
  }

  logInViaFacebook = async () => {
    try {
      await Facebook.initializeAsync(APP_ID, 'Cheff');
      const {
        type,
        token,
      } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile'],
      });
      if (type !== 'success') {
        throw new Error('Sorry, unexpected error');
      }

      const credential = FireBase.auth.FacebookAuthProvider.credential(token);
      FireBase
        .auth()
        .signInWithCredential(credential)
        .then(({ user }) => {
          storageHelper.setAsyncStorage('userInfo', {
            photoURL: user.photoURL,
            displayName: user.displayName,
          })
            .then(() => this.props.navigation.navigate('Main'))
            .catch(() => {});
        })
        .catch((err) => {
          throw err;
        });
    } catch (err) {
      Alert(`Login failed: ${err}`);
    }
  }

  render() {
    return (
      <ImageBackground
        style={{ flex: 1 }}
        source={require('../assets/images/background.png')}
      >
        <View
          style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}
        >
          {/* login via Google */}
          {/* <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Main')}
            style={styles.textSignInGG}
          >
            <Image
              source={require('../assets/images/btn_gg.png')}
              style={styles.image}
            />
            <Text style={styles.textGG}>
              Google
            </Text>
          </TouchableOpacity> */}

          {/* login via Facebook */}
          {
            this.state.showLoginOptions && (
            <TouchableOpacity
              style={styles.textSignInFb}
              onPress={this.logInViaFacebook}
            >
              <Image
                style={styles.image}
                source={require('../assets/images/btn_fb.png')}
              />
              <Text style={styles.textFB}>
                Facebook
              </Text>
            </TouchableOpacity>
            )
          }
        </View>
      </ImageBackground>
    );
  }
}
