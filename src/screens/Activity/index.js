import React, { Component } from 'react';
import { View } from 'react-native';
import Header from 'components/Header';
import ScrollableView from 'react-native-scrollable-tab-view';


// My components
import TabView from './TabView';
// Data
import { activityData } from './data';


export default class ActivityScreen extends Component {
  static navigationOptions = {
    headerShown: false,
  }

  renderHeader() {
    return (
      <Header
        title="Activity"
        iconLeft={require('assets/images/icon_side_menu.png')}
        onPressLeft={() => this.props.navigation.navigate('Settings')}
        iconRight={require('assets/images/ic_push_notification.png')}
      />

    );
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        {this.renderHeader()}
        <ScrollableView
          tabBarInactiveTextColor="gray"
          tabBarActiveTextColor="#000"
          tabBarUnderlineStyle={{ backgroundColor: '#000', height: 1 }}
        >
          <TabView key={1} tabLabel="Today" list={activityData} />
          <TabView key={2} tabLabel="This week" list={activityData} />
          <TabView key={3} tabLabel="This month" list={activityData} />
        </ScrollableView>
      </View>

    );
  }
}
