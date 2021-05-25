import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import * as Facebook from 'expo-facebook';
import * as Google from 'expo-google-app-auth';
import Loading from 'components/Loading';
import images from 'assets/images';
import { FireBase, FbConfig, GgConfig } from 'constants';
import * as AppleAuthentication from 'expo-apple-authentication';
import { responsive } from 'utils';
import styles from './styles';

const SignInScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  const handleLoginSuccess = async credential => {
    FireBase.auth()
      .signInWithCredential(credential)
      .then(({ user }) => {
        setLoading(false);
        console.log(user);
        navigation.navigate('App');
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  };

  const logInViaFacebook = async () => {
    // TODO: failure with iOS
    console.log(FbConfig.APP_ID);

    try {
      setLoading(true);
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
      setLoading(false);

      // alert(`Login failed: ${err}`);
    }
  };

  const logInViaGoogle = async () => {
    setLoading(true);

    try {
      const { type, accessToken, idToken } = await Google.logInAsync({
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
      console.log(err);
    }
  };

  return (
    <ImageBackground style={styles.container} source={images.background}>
      <View style={styles.viewBtn}>
        {loading && <Loading />}
        <AppleAuthentication.AppleAuthenticationButton
          buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
          buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
          cornerRadius={5}
          style={{
            height: responsive({ h: 40 }), marginVertical: 25, width: '90%', justifyContent: 'space-between',
          }}
          onPress={async () => {
            setLoading(true);

            try {
              const credential = await AppleAuthentication.signInAsync({
                requestedScopes: [
                  AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                  AppleAuthentication.AppleAuthenticationScope.EMAIL,
                ],
              });

              console.log(credential);

              // signed in
            } catch (e) {
              if (e.code === 'ERR_CANCELED') {
                // handle that the user canceled the sign-in flow
                console.log(e);
              } else {
                // handle other errors
                console.log(e);
              }
            } finally {
              setLoading(false);
            }
          }}
        />
        {/* login via Google */}
        <TouchableOpacity
          disabled={loading}
          onPress={logInViaGoogle}
          style={styles.textSignInGG}
        >
          <Image source={images.btn_gg} style={styles.image} />
          <Text style={styles.textGG}>Google</Text>
        </TouchableOpacity>
        {/* login via Facebook */}
        <TouchableOpacity
          disabled={loading}
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
