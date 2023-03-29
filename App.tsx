import React from 'react';
import {StyleSheet, View} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Provider} from 'react-redux';
import {ReactReduxFirebaseProvider} from 'react-redux-firebase';

import {store, rrfProps} from 'stores';
// import images from 'assets/images';
import NavigationRoot from 'navigation/SwitchNavigation';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
              <NavigationRoot />
            </View>
          </SafeAreaView>
        </ReactReduxFirebaseProvider>
      </Provider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
