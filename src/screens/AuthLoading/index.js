import React, {useEffect} from 'react';
import {
  View,
  Image,
} from 'react-native';
import { FireBase } from 'constants';

const AuthLoadingScreen =({navigation})=> {
  useEffect(() => {
    onAuthStateChanged();
  }, []);

  const onAuthStateChanged = () => {
    FireBase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        navigation.navigate('App')
      }else{
        navigation.navigate('Auth')
      }
    });
  };

    return (
      <View style={{ flex: 1 }}>
        <Image source={require('assets/images/background.png')} />
      </View>
    );
}

export default AuthLoadingScreen
