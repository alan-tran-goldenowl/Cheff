import React from "react";
import { createMaterialTopTabNavigator } from "react-navigation";
import Dinner from "../screens/Dinner";
import Breakfast from "../screens/Breakfast";
import Lunch from "../screens/Lunch";
import Brunch from "../screens/Brunch";
import Recommend from "../screens/Recommend";

export default createMaterialTopTabNavigator(
  {
    Recommend: { screen: Recommend },
    Breakfast: { screen: Breakfast },
    Brunch: { screen: Brunch },
    Lunch: { screen: Lunch },
    Dinner: { screen: Dinner }
  },
  {
    barStyle: { backgroundColor: "red" },
    tabBarOptions: {
      upperCaseLabel: false,
      scrollEnabled: true,
      activeTintColor: "#000",
      inactiveTintColor: "#666",

      indicatorStyle: {
        backgroundColor: "#ff2d65",
        width: 80,
        marginLeft: 20
      },
      style: {
        backgroundColor: "transparent"
      },
      tabStyle: {
        width: 120
      },
      labelStyle: {
        fontSize: 14,
        textTransform: 'capitalize'
      }
    }
  }
);
