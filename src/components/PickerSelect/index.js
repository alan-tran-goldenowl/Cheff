import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Icon from '@expo/vector-icons/Ionicons';

import styles from './styles';

const CustomSwitch = ({
  title,
  value,
  items,
  onValueChange,
  containerStyle,
  error,
}) => (
  <View>
    <View style={[styles.container, containerStyle]}>
      {title ? <Text style={styles.title}>{title}</Text> : null}
      <RNPickerSelect
        onValueChange={onValueChange}
        value={value}
        Icon={() => <Icon name="chevron-down" />}
        items={items}
        textInputProps={{ style: styles.title }}
      />
    </View>
    {!!error && <Text style={styles.errorText}>{error}</Text> }
  </View>
);

export default CustomSwitch;
