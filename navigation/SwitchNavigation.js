import {
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';

import Main from './MainTabNavigator';
import Links from '../screens/LinksScreen';
import ListPlan from '../screens/ListPlan';
import SignIn from '../screens/SignInScreen';
import Search from '../screens/SearchScreen';
import FoodDetail from '../screens/FoodDetail';
import CreatePlan from '../screens/CreatePlan';
import Settings from '../screens/SettingsScreen';
import EditProfile from '../screens/EditProfile';
import PlanDetails from '../screens/PlanDetails';
import AuthLoading from '../screens/AuthLoadingScreen';

const AppStack = createStackNavigator(
  {
    Main,
    Links,
    Search,
    ListPlan,
    Settings,
    CreatePlan,
    FoodDetail,
    EditProfile,
    PlanDetails,
  },
  {
    headerMode: 'none',
  },
);

const AppSwitch = createSwitchNavigator(
  {
    AuthLoading,
    App: AppStack,
    Auth: createStackNavigator({ SignIn }),
  },
  {
    initialRouteName: 'AuthLoading',
  },
);

export default createAppContainer(AppSwitch);
