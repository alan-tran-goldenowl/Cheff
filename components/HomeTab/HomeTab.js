import React, { Component } from 'react';
import ScrollableTabView, {
  ScrollableTabBar,
} from 'react-native-scrollable-tab-view';
import { Text, View } from 'react-native';

import Dinner from './Dinner';
import Breakfast from './Breakfast';
import Lunch from './Lunch';
import Brunch from './Brunch';
import Recommend from './Recommend';

import { responsive } from '../../utils';

export default class HomeTab extends Component {
  render() {
    return (
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
          marginLeft: responsive({ d: 25 }),
          height: 2,
        }}
      >
        <Recommend tabLabel="Recommend" {...this.props} />
        <Breakfast tabLabel="Breakfast" {...this.props} />
        <Brunch tabLabel="Brunch" {...this.props} />
        <Lunch tabLabel="Lunch" {...this.props} />
        <Dinner tabLabel="Dinner" {...this.props} />
      </ScrollableTabView>
    );
  }
}
