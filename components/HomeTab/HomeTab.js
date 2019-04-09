import React from 'react';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';

import Dinner from './Dinner';
import Breakfast from './Breakfast';
import Lunch from './Lunch';
import Brunch from './Brunch';
import Recommend from './Recommend';

import { responsive } from '../../utils';

const HomeTab = props => (
  <ScrollableTabView
    initialPage={0}
    renderTabBar={tabBarProps => (
      <ScrollableTabBar
        {...tabBarProps}
        style={{
          borderWidth: 0,
          borderColor: 'transparent',
        }}
      />
    )}
    tabBarBackgroundColor="transparent"
    tabBarActiveTextColor="#000"
    tabBarInactiveTextColor="#666"
    tabBarTextStyle={{ fontSize: responsive({ f: 14 }) }}
    tabBarUnderlineStyle={{
      backgroundColor: '#ff2d65',
      width: responsive({ h: 28 }),
      marginLeft: responsive({ d: 35 }),
      height: 2,
    }}
  >
    <Recommend tabLabel="Recommend" {...props} />
    <Breakfast tabLabel="Breakfast" {...props} />
    <Brunch tabLabel="Brunch" {...props} />
    <Lunch tabLabel="Lunch" {...props} />
    <Dinner tabLabel="Dinner" {...props} />
  </ScrollableTabView>
);

export default HomeTab;
