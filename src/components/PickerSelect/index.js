import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  Switch
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import AntIcon from '@expo/vector-icons/AntDesign';

import images from 'assets/images';
import styles from './styles';

const CustomSwitch = ({
  title,
  value,
  items,
  onValueChange,
  containerStyle
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.title}>{title}</Text>
      <RNPickerSelect
        onValueChange={onValueChange}
        value={value}
        Icon={() => <AntIcon name="down" />}
        items={items}
      />
    </View>
  )
}

export default CustomSwitch;
