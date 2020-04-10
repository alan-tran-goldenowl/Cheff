import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from 'screens/Home';
import FavouriteScreen from 'screens/Favourite';
import MealPlanScreen from 'screens/MealPlan';
import ActivityScreen from 'screens/Activity';

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
});

export default createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: () => ({
        tabBarIcon: ({ focused }) => (
          <Image
            style={styles.icon}
            resizeMode="center"
            source={
              focused
                ? require('assets/images/ic_home_active.png')
                : require('assets/images/ic_home_unactive.png')
            }
          />
        ),
      }),
    },
    Favourite: {
      screen: FavouriteScreen,
      navigationOptions: () => ({
        tabBarIcon: ({ focused }) => (
          <Image
            style={styles.icon}
            resizeMode="center"
            source={
            focused
              ? require('assets/images/ic_favorite_active.png')
              : require('assets/images/ic_favorite_unactive.png')
          }
          />
        ),
      }),
    },
    MealPlan: {
      screen: MealPlanScreen,
      navigationOptions: () => ({
        tabBarIcon: ({ focused }) => (
          <Image
            style={styles.icon}
            resizeMode="center"
            source={
                  focused
                    ? require('assets/images/ic_plan_active.png')
                    : require('assets/images/ic_plan_unactive.png')
                }
          />
        ),
      }),
    },
    Activity: {
      screen: ActivityScreen,
      navigationOptions: () => ({
        tabBarIcon: ({ focused }) => (
          <Image
            style={styles.icon}
            resizeMode="center"
            source={
                  focused
                    ? require('assets/images/ic_activity_active.png')
                    : require('assets/images/ic_activity_unactive.png')
                }
          />
        ),
      }),
    },
  },
  {
    tabBarOptions: {
      showLabel: false,
    },
  },
);
