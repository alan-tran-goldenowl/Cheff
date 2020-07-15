import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import AntIcon from '@expo/vector-icons/AntDesign';

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
      <Text style={styles.title}>{title}</Text>
      <RNPickerSelect
        onValueChange={onValueChange}
        value={value}
        Icon={() => <AntIcon name="down" />}
        items={items}
        textInputProps={{ style: styles.title }}
      />
    </View>
    {!!error && <Text style={styles.errorText}>{error}</Text> }
  </View>
);

export default CustomSwitch;
