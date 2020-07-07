import React from 'react';
import {
  Text,
  View,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

import { responsive } from 'utils';

const LoadingDialog = ({ title = 'Loading...' }) =>  {
  return (
    <View style={styles.container}>
      <View style={styles.mainView}>
        <ActivityIndicator />
        <Text numberOfLines={1} style={styles.title}>{title}</Text>
      </View>
    </View>
  );
}

export default LoadingDialog;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: '#0000004D',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
  },
  mainView: {
    borderRadius: responsive({ d: 12 }),
    backgroundColor: '#ffffff',
    width: responsive({ h: 100 }),
    height: responsive({ h: 100 }),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: '#ffffff'
  },
  title: {
    marginTop: responsive({ d: 20 }),
    color: '#a1aebc',
    fontSize: responsive({ f: 14 }),
  },
});
