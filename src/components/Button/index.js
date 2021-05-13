import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { COLOR } from 'styles/theme';
import styles from './styles';

const Button = ({
  onPress, title, buttonStyle, titleStyle, disabled,
}) => (
  <TouchableOpacity
    style={[
      styles.button,
      buttonStyle,
      { backgroundColor: disabled ? COLOR.BORDER_COLOR : COLOR.BLUE_COLOR },
    ]}
    onPress={onPress}
    disabled={disabled}
  >
    <Text style={[styles.text, titleStyle]}>{title}</Text>
  </TouchableOpacity>
);

export default Button;
