import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  Switch
} from 'react-native';

import styles from './styles';

const CustomSwitch = ({ image, title, valueSwitch }) => {
  return (
    <View style={styles.container}>
      <View style={styles.viewImage}>
        <Image
          resizeMode="center"
          style={styles.image}
          source={image}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>
          {title}
        </Text>
      </View>
      <View style={styles.switch}>
        <Switch
          thumbColor="white"
          trackColor="#45db5e"
          value={valueSwitch}
          disabled
        />
      </View>
    </View>
  )
}

export default CustomSwitch;
