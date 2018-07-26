import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

import AuthLoadingScreen from '../screens/AuthLoadingScreen'
import SignInScreen from "../screens/SignInScreen";
import SearchScreen from "../screens/SearchScreen";
import EditProfile from "../screens/EditProfile";
import FoodDetail from "../screens/FoodDetail";
import Recommend from "../screens/Recommend";
import CreatePlan from "../screens/CreatePlan";
import MainScreen from "./MainTabNavigator";
// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.

const AppStack = createStackNavigator({
  Main: MainScreen,
  Search: SearchScreen,
  EditProfile: EditProfile,
  FoodDetail: FoodDetail,
  Recommend: Recommend,
  CreatePlan: CreatePlan
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
