import React from 'react';
import { View } from 'react-native';
import ScrollableView from 'react-native-scrollable-tab-view';
import { FireBase } from 'constants';

import { useSelector } from 'react-redux';

import {
  onCurrentWeek, onCurrentMonth, isToday, groupDataByDate,
} from 'utils';
import TabView from './TabView';

// Data

const WhatToBuyScreen = () => {
  const userFirebase = FireBase.auth().currentUser;

  const todoData = useSelector(({ firebase: { ordered: { Plan_To_do } } }) => {
    const data = (Plan_To_do[userFirebase.uid]) || [];
    const parseData = data.map(item => ({ ...item.value, id: item.key })) ?? [];

    return parseData.reverse();
  });


  const getListInWeek = () => {
    const data = todoData
      .filter(item => onCurrentWeek(item.date))
      .sort((a, b) => b.date - a.date);

    return groupDataByDate(data);
  };

  const getListInMonth = () => {
    const data = todoData
      .filter(item => onCurrentMonth(item.date))
      .sort((a, b) => b.date - a.date);

    return groupDataByDate(data);
  };

  const getListToday = () => {
    const data = todoData.filter(item => isToday(item.date));
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
