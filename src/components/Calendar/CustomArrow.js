import React from 'react';
import { Text } from 'react-native';
import moment from 'moment';

const CustomArrow = ({ direction, currentMonth }) => {
  let monthName;
  if (direction === 'right') {
    monthName = moment(currentMonth)
      .add(1, 'months')
      .format('MMM');
  } else {
    monthName = moment(currentMonth)
      .subtract(1, 'months')
      .format('MMM');
  }
  return <Text style={{ color: 'gray' }}>{monthName.toUpperCase()}</Text>;
};
export default CustomArrow;
