import { createStackNavigator } from 'react-navigation';
import SignInScreen from '../screens/SignInScreen';
import MainScreen from '../screens/MainScreen';
import SettingsScreen from '../screens/SettingsScreen'; 
import SearchScreen from '../screens/SearchScreen'; 
import EditProfile from '../screens/EditProfile';
import FoodDetail from '../screens/FoodDetail';
import Recommend from '../screens/Recommend';
import HomeScreen from '../screens/HomeScreen';
import CreatePlan from '../screens/CreatePlan';

export default AppStackNavigator = createStackNavigator ({
 	SignIn : SignInScreen,
 	Main : MainScreen,
 	Setting : SettingsScreen,
	Search : SearchScreen, 
	EditProfile : EditProfile, 
	FoodDetail : FoodDetail,
	Recommend : Recommend,
	HomeScreen : HomeScreen,
	CreatePlan : CreatePlan
 })