import React from 'react';
import {
  TouchableOpacity,
  Text,
} from 'react-native';

import styles from './styles';

const Button = ({
  onPress,
  title,
  buttonStyle,
  titleStyle,
  disabled,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, buttonStyle]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[styles.text, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
