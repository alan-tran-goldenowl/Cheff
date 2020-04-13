import React, { Component } from 'react';
import { Text } from 'react-native';
import moment from 'moment';

class CustomArrow extends Component {
  render() {
    const { direction, currentMonth } = this.props; // only 2 values ["left", "right"]

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
  }
}
export default CustomArrow;
