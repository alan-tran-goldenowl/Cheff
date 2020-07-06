import React from 'react';
import lodash from 'lodash';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';

import { responsive } from 'utils';
import Tab from './Tab';

const HomeTab = ({ tab, navigation }) => (
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
    {tab.map(item =>
      <Tab
        key={item.key}
        tabLabel={lodash.capitalize(item?.value?.name)}
        typeId={item.key}
        navigation={navigation}
      />
    )}
  </ScrollableTabView>
)

export default HomeTab;
