import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import * as Facebook from 'expo-facebook';
import * as Google from 'expo-google-app-auth';

import { FireBase, FbConfig, GgConfig } from 'constants';
import styles from './styles';

const  SignInScreen = ({ navigation }) =>  {
  const [showLoginOptions, setShowLoginOptions] = useState(false);

  useEffect(() => {
    onAuthStateChanged();
  }, []);

  const onAuthStateChanged = () => {
    FireBase.auth().onAuthStateChanged(async (user) => {
      if (!user) {
        return setShowLoginOptions(true);
      }
      navigation.navigate('Main')
    });
  };

  const handleLoginSuccess = async (credential) => {
    FireBase
      .auth()
      .signInWithCredential(credential)
      .then(({ user }) => {
        navigation.navigate('Main')
      })
      .catch((err) => {
        return err;
      });
  }

  const logInViaFacebook = async () => { // TODO: failure with iOS
    try {
      await Facebook.initializeAsync(FbConfig.APP_ID, FbConfig.APP_NAME);
      const {
        type,
        token,
      } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile', 'email'],
      });
      if (type !== 'success') {
        throw new Error('Sorry, unexpected error');
      }

      const credential = FireBase.auth.FacebookAuthProvider.credential(token);
      handleLoginSuccess(credential);
    } catch (err) {
      alert(`Login failed: ${err}`);
    }
  };

  const logInViaGoogle = async () => {
    try {
      const { type, accessToken, user, idToken} = await Google.logInAsync({
        iosClientId: GgConfig.IOS_CLIENT_ID,
        androidClientId: GgConfig.ANDROID_CLIENT_ID,
        scopes: ['profile', 'email'],
      });
      if (type !== 'success') {
        throw new Error('Sorry, unexpected error');
      }
      const credential = FireBase.auth.GoogleAuthProvider.credential(
        idToken,
        accessToken
      );
      handleLoginSuccess(credential);
    } catch(err) {
      alert(`Login failed: ${err}`);
    };
  }

  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require('assets/images/background.png')}
    >
    { showLoginOptions &&
      <View
        style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}
      >
        {/* login via Google */}
        <TouchableOpacity
          onPress={logInViaGoogle}
          style={styles.textSignInGG}
        >
          <Image
            source={require('assets/images/btn_gg.png')}
            style={styles.image}
          />
          <Text style={styles.textGG}>
            Google
          </Text>
        </TouchableOpacity>
        {/* login via Facebook */}
        <TouchableOpacity
          style={styles.textSignInFb}
          onPress={logInViaFacebook}
        >
          <Image
            style={styles.image}
            source={require('assets/images/btn_fb.png')}
          />
          <Text style={styles.textFB}>
            Facebook
          </Text>
        </TouchableOpacity>
      </View>
    }
    </ImageBackground>
  );
}

export default SignInScreen;
