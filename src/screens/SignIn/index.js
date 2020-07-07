import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import * as Facebook from 'expo-facebook';

import { FireBase, FbConfig } from 'constants';
import { storageHelper } from 'utils';
import styles from './styles';


const  SignInScreen = ({ navigation }) =>  {
  const [showLoginOptions, setShowLoginOptions] = useState(false);

  const onAuthStateChanged = () => {
    FireBase.auth().onAuthStateChanged(async (user) => {
      if (!user) {
        return setShowLoginOptions(true);
      }

      storageHelper.setAsyncStorage('userInfo', {
        photoURL: user.photoURL,
        displayName: user.displayName,
      })
        .then(() => navigation.navigate('Main'))
        .catch(() => {});
    });
  };

  useEffect(() => {
    onAuthStateChanged()
  }, []);

  const logInViaFacebook = async () => {
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
      alert(`Login failed: ${err}`);
    }
  };

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
          onPress={() => navigation.navigate('Main')}
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
