import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

import AuthLoadingScreen from '../screens/AuthLoadingScreen'
import SignInScreen from "../screens/SignInScreen";
import SearchScreen from "../screens/SearchScreen";
import EditProfile from "../screens/EditProfile";
import FoodDetail from "../screens/FoodDetail";
import CreatePlan from "../screens/CreatePlan";
import MainScreen from "./MainTabNavigator";
import LinksScreen from "../screens/LinksScreen";
import SettingsScreen from "../screens/SettingsScreen";
// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.

const AppStack = createStackNavigator({
  Main: MainScreen,
  Search: SearchScreen,
  EditProfile: EditProfile,
  FoodDetail: FoodDetail,
  CreatePlan: CreatePlan,
  Links: LinksScreen,
  Settings: SettingsScreen
})

export default createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: createStackNavigator({ SignIn: SignInScreen }),
  },
  {
    initialRouteName: 'AuthLoading',
  }
);
