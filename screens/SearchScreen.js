import React from 'react';
import {
	View, Text, StyleSheet, Dimensions, Image, TextInput, Switch, TouchableOpacity
} from 'react-native';
import SearchViewCheff from '../components/SearchViewCheff';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    header : null,
  };
  render() {
    return ( 
    	<View style = {style.container}> 
    		<View style = {style.header}> 
    		 <TouchableOpacity onPress = {()=>this.props.navigation.goBack()}>
    		 	<Image
                    style = {style.iconBack}
                    resizeMode = {'center'}
                    source = {require('../assets/images/icon_back.png')} />
    		 </TouchableOpacity>
    		</View>

    		<View style = {{marginLeft : 20, marginRight : 20}}>
    			<SearchViewCheff moveToSeacrh = {()=>console.log ("OnFocus")}/>
    		</View>
    	</View>
    	);
  }
}

const { height, width } = Dimensions.get('window');
const style = StyleSheet.create ({
	container : {
		backgroundColor : '#ffffff',
		flex : 1
	},

	header : {
		backgroundColor : '#ffffff', 
		marginTop : 30,
		height : height/20,
	},

	iconBack : { 
		height : 30,
		width : 30,
		marginLeft : 10,
	},
});
