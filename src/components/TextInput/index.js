import React from 'react';
import {
  View,
  Text,
  TextInput,
} from 'react-native';

import styles from './styles';

const CustomTextInput = ({ title, placeholder, value, onChangeText }) => {
  return (
    <View style={styles.viewTextInput}>
      <Text style={styles.textInput}>
        {title}
      </Text>
      <TextInput
        multiline={false}
        style={styles.text}
        placeholder={placeholder}
        value={value}
        underlineColorAndroid="transparent"
        onChangeText={onChangeText}
      />
    </View>
  )
}

export default CustomTextInput;
