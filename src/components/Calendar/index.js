import React from 'react';
import moment from 'moment';
import { Calendar } from 'react-native-calendars';

import CustomArrow from './CustomArrow';
import styles from './styles';

const MyCalendar = ({
  moveToListPlan, mealPlan, onPressLeftCalendar, onPressRightCalendar, currentMonth,
}) => {
  const getMarkedDays = () => {
    const marked = {};
    mealPlan.forEach((item) => {
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

  const onDayPress = (day) => {
    if (markedDates[day.dateString]) {
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
      onDayPress={(day) => onDayPress(day)}
      renderArrow={(direction) => (
        <CustomArrow direction={direction} currentMonth={currentMonth} />
      )}
      onPressArrowLeft={(substractMonth) => {
        onPressArrowLeft();
        substractMonth();
      }}
      onPressArrowRight={(addMonth) => {
        onPressArrowRight();
        addMonth();
      }}
    />
  );
};

export default MyCalendar;
