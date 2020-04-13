import React from 'react';
import {
  View,
  Image,
} from 'react-native';

export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = false; // await AsyncStorage.getItem('userToken');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  }

  // Render any loading content that you like here
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Image source={require('assets/images/background.png')} />
      </View>
    );
  }
}
