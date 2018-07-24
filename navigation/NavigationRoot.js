import { createStackNavigator } from 'react-navigation';
import SignInScreen from '../screens/SignInScreen';
import MainScreen from '../screens/MainScreen';
import SettingsScreen from '../screens/SettingsScreen'; 
import SearchScreen from '../screens/SearchScreen'; 
import EditProfile from '../screens/EditProfile';
export default AppStackNavigator = createStackNavigator ({
 	SignIn : SignInScreen,
 	Main : MainScreen,
 	Setting : SettingsScreen,
	Search : SearchScreen, 
	EditProfile : EditProfile, 
 })