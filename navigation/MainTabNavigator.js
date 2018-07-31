import React from "react";
import { Platform, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import FavouriteScreen from "../screens/FavoriteScreen";
import MealPlanScreen from "../screens/MealPlanScreen";
import ActivityScreen from "../screens/ActivityScreen";

export default createBottomTabNavigator(
  {
    Home: HomeScreen,
    Favourite: FavouriteScreen,
    MealPlan: MealPlanScreen,
    Activity: ActivityScreen
  },
  {
    tabBarOptions: {
      showLabel: false
    },
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;

        switch (routeName) {
          case "Home":
            return (
              <Image
                style={styles.icon}
                resizeMode={"center"}
                source={
                  focused
                    ? require("../assets/images/ic_home_active.png")
                    : require("../assets/images/ic_home_unactive.png")
                }
              />
            );
          case "Favourite":
            return (
              <Image
                style={styles.icon}
                resizeMode={"center"}
                source={
                  focused
                    ? require("../assets/images/ic_favorite_active.png")
                    : require("../assets/images/ic_favorite_unactive.png")
                }
              />
            );
          case "MealPlan":
            return (
              <Image
                style={styles.icon}
                resizeMode={"center"}
                source={
                  focused
                    ? require("../assets/images/ic_plan_active.png")
                    : require("../assets/images/ic_plan_unactive.png")
                }
              />
            );
          case "Activity":
            return (
              <Image
                style={styles.icon}
                resizeMode={"center"}
                source={
                  focused
                    ? require("../assets/images/ic_activity_active.png")
                    : require("../assets/images/ic_activity_unactive.png")
                }
              />
            );
          default:
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
      }
    })
  }
);

const styles = StyleSheet.create({
  icon: {
    height: 30,
    width: 30,
    marginLeft: 10
  }
});
