import React from 'react';
import {
  Text,
  View,
  ActivityIndicator,
} from 'react-native';

import styles from './styles';

const LoadingDialog = ({ title = 'Loading...' }) => (
  <View style={styles.container}>
    <View style={styles.mainView}>
      <ActivityIndicator />
      <Text numberOfLines={1} style={styles.title}>{title}</Text>
    </View>
  </View>
);

export default LoadingDialog;
