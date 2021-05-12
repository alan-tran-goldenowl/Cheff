import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import Icon from '@expo/vector-icons/FontAwesome';

import styles from './styles';

const CustomDatePicker = ({
  title,
  value,
  date,
  icon,
  isVisible,
  onConfirm,
  onCancel,
  mode,
  onPress,
  containerStyle,
  error,
  minimumDate,
}) => (
  <View style={containerStyle}>
    {title ? <Text style={styles.title}>{title}</Text> : null}
    <TouchableOpacity
      onPress={onPress}
      style={styles.date}
    >
      <Text style={styles.value}>{value}</Text>
      <Icon
        name={icon ?? 'calendar'}
        size={20}
      />
    </TouchableOpacity>
    <DateTimePicker
      display="spinner"
      isVisible={isVisible}
      onConfirm={onConfirm}
      onCancel={onCancel}
      mode={mode}
      is24Hour={false}
      date={date}
      minimumDate={minimumDate}
    />
    {!!error && <Text style={styles.errorText}>{error}</Text> }
  </View>
);

export default CustomDatePicker;
