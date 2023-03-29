import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import {createStackNavigator} from 'react-navigation-stack';
import {ROUTE_NAME} from 'utils/constants';

import Links from 'screens/Links';
import ListPlan from 'screens/TabMealPlan/ListPlan';
import SignIn from 'screens/SignIn';
import Search from 'screens/Search';
import FoodDetail from 'screens/FoodDetail';
import CreatePlan from 'screens/TabMealPlan/CreateMealPlan';
import Settings from 'screens/Setting';
import EditProfile from 'screens/EditProfile';
import PlanDetails from 'screens/TabMealPlan/PlanDetail';
import TodoPlanDetail from 'screens/TabWhatToBuy/TodoPlanDetail';
import CreatePlanToBuy from 'screens/TabWhatToBuy/CreatePlanToBuy';
import CreatePlanV2 from 'screens/CreatePlan';
import AuthLoading from 'screens/AuthLoading';
import PrivacyAndPolicy from 'screens/PrivacyAndPolicy';
import Main from './MainTabNavigator';

const AppStack = createStackNavigator(
  {
    [ROUTE_NAME.Main]: {
      screen: Main,
    },
    [ROUTE_NAME.Links]: {
      screen: Links,
    },
    [ROUTE_NAME.Search]: {
      screen: Search,
    },
    [ROUTE_NAME.ListPlan]: {
      screen: ListPlan,
    },
    [ROUTE_NAME.Settings]: {
      screen: Settings,
    },
    [ROUTE_NAME.CreatePlan]: {
      screen: CreatePlan,
    },
    [ROUTE_NAME.CreatePlanV2]: {
      screen: CreatePlanV2,
    },
    [ROUTE_NAME.FoodDetail]: {
      screen: FoodDetail,
    },
    [ROUTE_NAME.EditProfile]: {
      screen: EditProfile,
    },
    [ROUTE_NAME.PlanDetails]: {
      screen: PlanDetails,
    },
    [ROUTE_NAME.TodoPlanDetail]: {
      screen: TodoPlanDetail,
    },
    [ROUTE_NAME.CreatePlanToBuy]: {
      screen: CreatePlanToBuy,
    },
    [ROUTE_NAME.PrivacyAndPolicy]: {
      screen: PrivacyAndPolicy,
    },
  },
  {
    headerMode: 'none',
  },
);

const AppSwitch = createSwitchNavigator(
  {
    AuthLoading,
    App: AppStack,
    Auth: createStackNavigator({SignIn}, {headerMode: 'none'}),
  },
  {
    initialRouteName: 'AuthLoading',
  },
);

export default createAppContainer(AppSwitch);
