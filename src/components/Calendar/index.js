import React, { useState } from 'react';
import moment from 'moment';
import { Calendar } from 'react-native-calendars';
import { useSelector } from 'react-redux';
import { useFirebase, useFirebaseConnect } from 'react-redux-firebase';

import CustomArrow from './CustomArrow';
import styles from './styles';

const MyCalendar = ({ moveToListPlan }) => {
  const [currentMonth, setCurrentMonth] = useState(moment());
  const firebase = useFirebase();
  const user = firebase.auth().currentUser;
  useFirebaseConnect(`Meal_Plan/${user.uid}`);
  const mealPlan = useSelector(({ firebase: { ordered: { Meal_Plan = {} } } }) => (Meal_Plan[user.uid] || [])
    .filter((item) => moment(item.value.date).month() === currentMonth.month())); // filter by month

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
    setCurrentMonth(currentMonth.clone().subtract(1, 'months'));
  };

  const onPressArrowRight = () => {
    setCurrentMonth(currentMonth.clone().add(1, 'months'));
  };

  const markedDates = loadMarkedDates();

  const onDayPress = (day) => {
    if (markedDates[day.dateString]) {
      moveToListPlan();
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
