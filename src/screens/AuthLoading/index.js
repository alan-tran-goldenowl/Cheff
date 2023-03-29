import React, {useEffect} from 'react';
import {View, Image} from 'react-native';

import images from 'assets/images';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const AuthLoadingScreen = ({navigation}) => {
  useEffect(() => {
    onAuthStateChanged();
  }, []);

  const onAuthStateChanged = () => {
    firebase.auth().onAuthStateChanged(async user => {
      if (user) {
        navigation.navigate('App');
      } else {
        navigation.navigate('Auth');
      }
    });
  };

  return (
    <View style={{flex: 1}}>
      <Image source={images.background} />
    </View>
  );
};

export default AuthLoadingScreen;
