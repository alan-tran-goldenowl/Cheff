import React from "react";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/LinksScreen";
import SettingsScreen from "../screens/SettingsScreen";

export default createBottomTabNavigator(
  {
    Home: HomeScreen,
    Links: LinksScreen,
    Settings: SettingsScreen
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        if (routeName === "Home")
          return (
            <TabBarIcon
              focused={focused}
              name={
                Platform.OS === "ios"
                  ? `ios-information-circle${focused ? "" : "-outline"}`
                  : "md-information-circle"
              }
            />
          );
        return (
          <TabBarIcon
            focused={focused}
            name={
              Platform.OS === "ios"
                ? `ios-link${focused ? "" : "-outline"}`
                : "md-link"
            }
          />
        );
      }
    })
  }
);
