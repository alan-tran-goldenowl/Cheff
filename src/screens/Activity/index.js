import React from 'react';
import { View } from 'react-native';
import Header from 'components/Header';
import ScrollableView from 'react-native-scrollable-tab-view';
import { FireBase } from 'constants';

import { useSelector } from 'react-redux';
// My components
import images from 'assets/images';
import { onCurrentWeek, onCurrentMonth, isToday } from 'utils';
import TabView from './TabView';

// Data

const ActivityScreen = ({ navigation }) => {
  const userFirebase = FireBase.auth().currentUser;

  const activityData = useSelector(({ firebase: { data: { Activity } } }) => {
    const data = (Activity && Activity[userFirebase.uid]) || [];

    return Object.values(data).reverse();
  });

  const renderHeader = () => (
    <Header
      title="Activity"
      iconLeft={images.icon_side_menu}
      onPressLeft={() => navigation.navigate('Settings')}
      // iconRight={images.ic_push_notification}
    />

  );

  const getListInWeek = () => {
    const data = activityData.filter(item => onCurrentWeek(item?.timeStamp * 1000));
    return data;
  };

  const getListInMonth = () => {
    const data = activityData.filter(item => onCurrentMonth(item?.timeStamp * 1000));
    return data;
  };

  const getListToday = () => {
    const data = activityData.filter(item => isToday(item?.timeStamp * 1000));
    return data;
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
export default ActivityScreen;
