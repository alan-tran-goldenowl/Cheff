import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {
  formatDateTime,
  getDay,
  getHour,
  getMinute,
  getMonth,
  getYear,
  setDate,
  setTime,
} from 'utils/date';
import {COLOR} from 'styles/theme';
import Icon from 'react-native-vector-icons/FontAwesome';

import Title from 'components/Title';
import DateTimePicker from 'react-native-modal-datetime-picker';

import {datePickerStyles as styles} from './styles';

const DATE_FORMAT_TOKEN = 'DD/MM/YYYY';
const TIME_FORMAT_TOKEN = 'HH:mm';

const MODE_MODAL = {
  DATE: 'date',
  TIME: 'time',
};

const DatePicker = ({date = '', onPressDate, onPressTime, onSelectDate}) => {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [modeModal, setModeModal] = useState(MODE_MODAL.DATE);

  const handlePressDate = () => {
    setModeModal('date');
    setIsVisibleModal(true);
    if (onPressDate) {
      onPressDate();
    }
  };

  const handlePressTime = () => {
    setModeModal('time');
    setIsVisibleModal(true);
    if (onPressTime) {
      onPressTime();
    }
  };

  const calculateNewDate = newDate => ({
    year: getYear(newDate),
    month: getMonth(newDate),
    day: getDay(newDate),
  });

  const calculateNewTime = newDate => ({
    hour: getHour(newDate),
    minute: getMinute(newDate),
  });

  const handleSelectDate = newDate => {
    let result = date;
    if (modeModal === MODE_MODAL.DATE) {
      result = setDate(date, calculateNewDate(newDate));
      return onSelectDate(new Date(result).getTime());
    }
    result = setTime(date, calculateNewTime(newDate));
    return onSelectDate(new Date(result).getTime());
  };

  return (
    <>
      <Title>Cài đặt ngày giờ</Title>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={handlePressDate}
          style={[styles.pickerDate, styles.left]}>
          <Icon name="calendar" size={30} color={COLOR.WHITE_COLOR} />
          <View>
            <Text style={[styles.pickerTitle, styles.leftContent]}>
              Chọn ngày
            </Text>
            <Text style={[styles.pickerValue, styles.leftContent]}>
              {formatDateTime(date, DATE_FORMAT_TOKEN)}
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={handlePressTime} style={styles.picker}>
          <Icon name="clock-o" size={30} />
          <View>
            <Text style={styles.pickerTitle}>Chọn giờ</Text>
            <Text style={styles.pickerValue}>
              {formatDateTime(date, TIME_FORMAT_TOKEN)}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <DateTimePicker
        display="spinner"
        isVisible={isVisibleModal}
        onConfirm={newDate => {
          setIsVisibleModal(false);
          handleSelectDate(newDate);
        }}
        onCancel={() => setIsVisibleModal(false)}
        onHide={() => setIsVisibleModal(false)}
        mode={modeModal}
        date={new Date(date)}
      />
    </>
  );
};

export default DatePicker;
