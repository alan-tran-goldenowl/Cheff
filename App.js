import React from 'react';
import {
  Platform, StatusBar, StyleSheet, View,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';
import { Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';

import { store, rrfProps } from 'stores';
import images from 'assets/images';
import NavigationRoot from 'navigation/SwitchNavigation';
import PushNotificationHandler from 'components/PushNotificationHandler';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoadingComplete: false,
    };
    console.disableYellowBox = true;
  }

  _loadResourcesAsync = async () => Promise.all([
    Asset.loadAsync([images.robot_dev, images.robot_prod]),
    Font.loadAsync({
      ...Ionicons.font,
      'space-mono': require('assets/fonts/SpaceMono-Regular.ttf'),
    }),
  ]);

  _handleLoadingError = error => {
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    }
    return (
      <SafeAreaProvider>
        <Provider store={store}>
          <ReactReduxFirebaseProvider {...rrfProps}>
            <SafeAreaView style={{ flex: 1 }}>
              <View style={styles.container}>
                {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
                <NavigationRoot />
                <PushNotificationHandler />
              </View>
            </SafeAreaView>
          </ReactReduxFirebaseProvider>
        </Provider>
      </SafeAreaProvider>
    );
  }
}
