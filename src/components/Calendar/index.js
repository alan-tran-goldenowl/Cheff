import React, { Component } from 'react';
import moment from 'moment';
import { Calendar, LocaleConfig } from 'react-native-calendars';

import CustomArrow from './CustomArrow';

class MyCalendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentMonth: moment(),
    };

    // this.loadCustomNameCalendar();

    this.themeCalendar = {
      'stylesheet.calendar.header': {
        header: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingLeft: 10,
          paddingRight: 10,
          alignItems: 'center',
          borderBottomWidth: 1,
          borderTopWidth: 1,
          borderColor: '#ddd',
        },
        dayHeader: {
          marginTop: 2,
          marginBottom: 7,
          width: 32,
          textAlign: 'center',
          color: 'black',
        },
      },
      'stylesheet.day.basic': {
        dot: {
          width: 6,
          height: 6,
          marginTop: -30,
          marginLeft: 30,
          borderRadius: 3,
          opacity: 1,
        },
        selectedDot: {
          backgroundColor: 'red',
        },
      },
    };
  }


  // loadCustomNameCalendar = () => {
  //   // custom text month and day on calendar
  //   LocaleConfig.locales.en = {
  //     monthNames: [
  //       'JANUARY',
  //       'FEBRUARY',
  //       'MARCH',
  //       'APRIL',
  //       'MAY',
  //       'JUNE',
  //       'JULY',
  //       'AUGUST',
  //       'SEPTEMBER',
  //       'OCTOBER',
  //       'NOVEMBER',
  //       'DECEMBER',
  //     ],
  //     dayNamesShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  //   };

  //   LocaleConfig.defaultLocale = 'en';
  // }

  loadMarkedDates = (dates) => {
    const currentDateKey = dates.format('YYYY-MM-DD');
    const markedDates = {
      [currentDateKey]: {
        selected: true,
        // marked: true,
        selectedColor: 'black',
        // dotColor: 'red',
      },
      '2020-04-05': {
        marked: true,
        dotColor: 'red',
      },
      '2020-04-03': {
        marked: true,
        dotColor: 'red',
      },
    };

    return markedDates;
  }

  render() {
    const { currentMonth } = this.state;
    const markedDates = this.loadMarkedDates(currentMonth);

    return (
      <Calendar
        firstDay={1}
        style={{ width: '100%', paddingLeft: 0, paddingRight: 0 }}
        theme={this.themeCalendar}
        monthFormat="MMMM, yyyy"
        current={currentMonth.toDate()}
        markedDates={markedDates}
        // handle press day
        onDayPress={() => {
          this.props.moveToListPlan();
        }}
        // Handler which gets executed on day long press. Default = undefined
        onDayLongPress={() => {
        }}
        // Replace default arrows with custom ones (direction can be 'left' or 'right')
        renderArrow={(direction) => (
          <CustomArrow direction={direction} currentMonth={currentMonth} />
        )}
        onPressArrowLeft={(substractMonth) => {
          substractMonth();
          this.setState((prevState) => {
            prevState.currentMonth.subtract(1, 'months');
          });
        }}
        onPressArrowRight={(addMonth) => {
          addMonth();
          this.setState((prevState) => {
            prevState.currentMonth.add(1, 'months');
          });
        }}
      />
    );
  }
}

export default MyCalendar;
