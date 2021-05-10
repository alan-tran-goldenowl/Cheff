import React from 'react';
import { View } from 'react-native';
import ScrollableView from 'react-native-scrollable-tab-view';
import { FireBase } from 'constants';
import moment from 'moment';

import { useSelector } from 'react-redux';

import {
  onCurrentWeek, onCurrentMonth, isToday, groupDataByDate,
} from 'utils';
import TabView from './TabView';

// Data

const WhatToBuyScreen = () => {
  const userFirebase = FireBase.auth().currentUser;

  const activityData = useSelector(({ firebase: { data: { Plan_To_do } } }) => {
    const data = (Plan_To_do && Plan_To_do[userFirebase.uid]) || [];
    return Object.values(data).reverse();
  });


  const getListInWeek = () => {
    const data = activityData.filter(item => onCurrentWeek(item.date));


    return groupDataByDate(data);
  };

  const getListInMonth = () => {
    const data = activityData.filter(item => onCurrentMonth(item.date));

    return groupDataByDate(data);
  };

  const getListToday = () => {
    const data = activityData.filter(item => isToday(item.date));
    return groupDataByDate(data);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollableView
        tabBarInactiveTextColor="gray"
        tabBarActiveTextColor="#000"
        tabBarUnderlineStyle={{ backgroundColor: '#000', height: 1 }}
      >
        <TabView key={1} tabLabel="Today" list={getListToday()} />
        <TabView key={2} tabLabel="This week" list={getListInWeek()} />
        <TabView key={3} tabLabel="This month" list={getListInMonth()} />
      </ScrollableView>
    </View>

  );
};
export default WhatToBuyScreen;
