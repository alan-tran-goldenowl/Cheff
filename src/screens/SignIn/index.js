import React from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import * as Facebook from 'expo-facebook';
import * as Google from 'expo-google-app-auth';

import images from 'assets/images';
import { FireBase, FbConfig, GgConfig } from 'constants';
import styles from './styles';

const SignInScreen = ({ navigation }) => {
  const handleLoginSuccess = async credential => {
    FireBase.auth()
      .signInWithCredential(credential)
      .then(({ user }) => {
        console.log(user);
        navigation.navigate('App');
      })
      .catch(err => console.log(err));
  };

  const logInViaFacebook = async () => {
    // TODO: failure with iOS
    console.log(FbConfig.APP_ID);
    try {
      await Facebook.initializeAsync(FbConfig.APP_ID);
      const { type, token } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['email'],
      });
      if (type !== 'success') {
        throw new Error('Sorry, unexpected error');
      }
      console.log('token', token);
      // await FireBase.auth().setPersistence(FireBase.auth.Auth.Persistence.LOCAL);
      const credential = FireBase.auth.FacebookAuthProvider.credential(token);
      console.log('credential', credential);
      handleLoginSuccess(credential);
    } catch (err) {
      console.log(err);
      alert(`Login failed: ${err}`);
    }
  };

  const logInViaGoogle = async () => {
    try {
      const {
        type, accessToken, user, idToken,
      } = await Google.logInAsync({
        iosClientId: GgConfig.IOS_CLIENT_ID,
        androidClientId: GgConfig.ANDROID_CLIENT_ID,
        scopes: ['profile', 'email'],
      });
      if (type !== 'success') {
        throw new Error('Sorry, unexpected error');
      }
      const credential = FireBase.auth.GoogleAuthProvider.credential(
        idToken,
        accessToken,
      );
      console.log(credential);
      handleLoginSuccess(credential);
    } catch (err) {
      alert(`Login failed: ${err}`);
    }
  };

  return (
    <ImageBackground style={styles.container} source={images.background}>
      <View style={styles.viewBtn}>
        {/* login via Google */}
        <TouchableOpacity onPress={logInViaGoogle} style={styles.textSignInGG}>
          <Image source={images.btn_gg} style={styles.image} />
          <Text style={styles.textGG}>Google</Text>
        </TouchableOpacity>
        {/* login via Facebook */}
        <TouchableOpacity
          style={styles.textSignInFb}
          onPress={logInViaFacebook}
        >
          <Image style={styles.image} source={images.btn_fb} />
          <Text style={styles.textFB}>Facebook</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default SignInScreen;
