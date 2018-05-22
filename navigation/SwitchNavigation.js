import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

import AuthLoadingScreen from '../screens/AuthLoadingScreen'
import HomeScreen from '../screens/HomeScreen'
import SignInScreen from '../screens/SignInScreen'
import MainTabNavigator from './MainTabNavigator';
// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.

export default createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: MainTabNavigator,
    Auth: createStackNavigator({ SignIn: SignInScreen }),
  },
  {
    initialRouteName: 'AuthLoading',
  }
);
