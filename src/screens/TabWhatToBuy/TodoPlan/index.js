import React from 'react';
import { View, SafeAreaView } from 'react-native';
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

  const todoData = useSelector(
    ({
      firebase: {
        ordered: { Plan_To_do },
      },
    }) => {
      const data = (Plan_To_do && Plan_To_do[userFirebase?.uid]) || [];
      const parseData = data?.map(item => ({ ...item.value, id: item.key })) ?? [];

      return parseData.reverse();
    },
  );

  const getListInWeek = () => {
    const data = todoData
      .filter(item => onCurrentWeek(item.date));

    return groupDataByDate(data);
  };

  const getListInMonth = () => {
    const data = todoData
      .filter(item => onCurrentMonth(item.date));

    return groupDataByDate(data);
  };

  const getListToday = () => {
    const data = todoData.filter(item => isToday(item.date));
    return groupDataByDate(data);
  };

  return (
    <SafeAreaView
      style={{ flex: 1 }}
    >
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <ScrollableView
          tabBarInactiveTextColor="gray"
          tabBarActiveTextColor="#000"
          tabBarUnderlineStyle={{ backgroundColor: '#000', height: 1 }}
        >
          <TabView key={1} tabLabel="Hôm nay" list={getListToday()} />
          <TabView key={2} tabLabel="Trong tuần" list={getListInWeek()} />
          <TabView key={3} tabLabel="Trong tháng" list={getListInMonth()} />
        </ScrollableView>
      </View>
    </SafeAreaView>
  );
};
export default WhatToBuyScreen;
