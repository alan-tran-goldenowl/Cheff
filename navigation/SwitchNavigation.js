import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import SignInScreen from '../screens/SignInScreen';
import SearchScreen from '../screens/SearchScreen';
import EditProfile from '../screens/EditProfile';
import FoodDetail from '../screens/FoodDetail';
import CreatePlan from '../screens/CreatePlan';
import MainScreen from './MainTabNavigator';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ListPlan from '../screens/ListPlan';
// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.

const AppStack = createStackNavigator(
  {
    Main: MainScreen,
    Search: SearchScreen,
    EditProfile,
    FoodDetail,
    CreatePlan,
    Links: LinksScreen,
    Settings: SettingsScreen,
    ListPlan,
  },
  {
    headerMode: 'none',
  },
);

const AppSwitch = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: createStackNavigator({ SignIn: SignInScreen }),
  },
  {
    initialRouteName: 'AuthLoading',
  },
);

export default createAppContainer(AppSwitch);
