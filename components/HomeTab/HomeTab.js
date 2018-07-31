import React, { Component } from "react";
import ScrollableTabView, {
  ScrollableTabBar
} from "react-native-scrollable-tab-view";
import { Text, View } from "react-native";

import Dinner from "./Dinner";
import Breakfast from "./Breakfast";
import Lunch from "./Lunch";
import Brunch from "./Brunch";
import Recommend from "./Recommend";

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
              borderColor: "transparent",
            }}
          />
        )}
        tabBarBackgroundColor="transparent"
        tabBarActiveTextColor="#000"
        tabBarInactiveTextColor="#666"
        tabBarTextStyle={{ fontSize: 14 }}
        tabBarUnderlineStyle={{
          backgroundColor: "#ff2d65",
          width: 30,
          marginLeft: 20,
          height: 2,
        }}
      >
        <Recommend tabLabel="Recommend" />
        <Breakfast tabLabel="Breakfast" />
        <Brunch tabLabel="Brunch" />
        <Lunch tabLabel="Lunch" />
        <Dinner tabLabel="Dinner" />
      </ScrollableTabView>
    );
  }
}
