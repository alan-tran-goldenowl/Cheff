import React from 'react';
import moment from 'moment';
import { Calendar, LocaleConfig } from 'react-native-calendars';

import styles from './styles';

LocaleConfig.locales.vn = {
  monthNames: [
    'Tháng 1',
    'Tháng 2',
    'Tháng 3',
    'Tháng 4',
    'Tháng 5',
    'Tháng 6',
    'Tháng 7',
    'Tháng 8',
    'Tháng 9',
    'Tháng 10',
    'Tháng 11',
    'Tháng 12',
  ],
  monthNamesShort: ['Tháng 1',
    'Tháng 2',
    'Tháng 3',
    'Tháng 4',
    'Tháng 5',
    'Tháng 6',
    'Tháng 7',
    'Tháng 8',
    'Tháng 9',
    'Tháng 10',
    'Tháng 11',
    'Tháng 12'],

  dayNames: [
    'Chủ nhật',
    'Thứ hai',
    'Thứ ba',
    'Thứ tư',
    'Thứ năm',
    'Thứ sáu',
    'Thứ bảy',
  ],
  dayNamesShort: ['CN', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'],
};
LocaleConfig.defaultLocale = 'vn';

const MyCalendar = ({
  moveToListPlan,
  mealPlan,
  onPressLeftCalendar,
  onPressRightCalendar,
}) => {
  const getMarkedDays = () => {
    const marked = {};
    mealPlan.forEach(item => {
      const day = moment(item.value.date).format('YYYY-MM-DD');
      marked[day] = {
        marked: true,
        dotColor: 'red',
      };
    });
    return marked;
  };

  const themeCalendar = {
    'stylesheet.calendar.header': {
      header: styles.headerCalendar,
      dayHeader: styles.dayHeaderCalendar,
    },
    'stylesheet.day.basic': {
      dot: styles.dotCalendar,
      selectedDot: styles.selectedDotCalendar,
    },
  };

  const loadMarkedDates = () => {
    const currentDateKey = moment().format('YYYY-MM-DD');
    const markedDays = getMarkedDays();
    const markedDates = {
      [currentDateKey]: {
        selected: true,
        selectedColor: 'black',
      },
      ...markedDays,
    };

    return markedDates;
  };

  const onPressArrowLeft = () => {
    onPressLeftCalendar();
  };

  const onPressArrowRight = () => {
    onPressRightCalendar();
  };

  const markedDates = loadMarkedDates();

  const onDayPress = day => {
    const marked = getMarkedDays();
    if (marked[day.dateString]) {
      moveToListPlan(day.dateString);
    }
  };

  return (
    <Calendar
      firstDay={1}
      style={styles.calendar}
      theme={themeCalendar}
      monthFormat="MMMM, yyyy"
      markedDates={markedDates}
      onDayPress={day => onDayPress(day)}

      onPressArrowLeft={substractMonth => {
        onPressArrowLeft();
        substractMonth();
      }}
      onPressArrowRight={addMonth => {
        onPressArrowRight();
        addMonth();
      }}
    />
  );
};

export default MyCalendar;
