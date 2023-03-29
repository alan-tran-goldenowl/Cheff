import React from 'react';
import {Image, StyleSheet, Platform} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import HomeScreen from '../screens/Home';
import FavouriteScreen from 'screens/Favourite';
import MealPlanScreen from 'screens/TabMealPlan/MealPlan';
import TodoPlan from 'screens/TabWhatToBuy/TodoPlan';

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
    // marginLeft: 10,
  },
});

export default createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: () => ({
        tabBarIcon: ({focused}) => (
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
        tabBarIcon: ({focused}) => (
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
        tabBarIcon: ({focused}) => (
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
      screen: TodoPlan,
      navigationOptions: () => ({
        tabBarIcon: ({focused}) => (
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={
              focused
                ? require('assets/images/todo_active.png')
                : require('assets/images/todo_inactive.png')
            }
          />
        ),
      }),
    },
  },
  {
    tabBarOptions: {
      showLabel: false,
      style: {
        // alignItems: 'center',
        // minHeight: Platform.OS === 'ios' ? 25 : 45,
        height: 10,
        // height: Platform.OS !== 'ios' ? 25 : 0,
        paddingBottom: 0,
        marginBottom: 0,
      },
    },
  },
);
