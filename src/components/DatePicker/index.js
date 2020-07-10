import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import Icon from '@expo/vector-icons/FontAwesome';
import images from 'assets/images';

import styles from './styles';
import moment from 'moment';

const CustomDatePicker = ({
  title,
  value,
  date,
  isVisible,
  onConfirm,
  onCancel,
  mode,
  onPress,
  containerStyle,
  error,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity
        onPress={onPress}
        style={styles.date}
      >
        <Text style={styles.value}>{value}</Text>
        <Icon
          name='angle-down'
          size={20}
        />
      </TouchableOpacity>
      <DateTimePicker
        isVisible={isVisible}
        onConfirm={onConfirm}
        onCancel={onCancel}
        mode={mode}
        is24Hour={false}
        date={date}
        minimumDate={new Date()}
      />
      {!!error && <Text style={styles.errorText}>{error}</Text> }
    </View>
  )
}

export default CustomDatePicker;
