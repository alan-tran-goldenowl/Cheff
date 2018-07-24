import React from 'react';
import {
	View, Text, StyleSheet, Dimensions, Image, TextInput, Switch, TouchableOpacity, BackHandler
} from 'react-native';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    header : null,
  };

  constructor (props){
  	super (props); 
  	this.state = {
  		toggleNotification : true
  	}
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  render() { 
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
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
 
    		<View style = {style.preferences}> 
    			<Text style = {style.textSetting}>Settings</Text>
    			<Text style = {style.textPreferences}>Update your preferences</Text>
    		</View>

    		<View style = {{height : height/20}}>
    		   <Text style = {{color : '#000000', fontSize : 17, marginTop : 20, marginLeft : 20}}>Account</Text>
    		</View>

    		<Text style = {style.underLine}></Text>  

    		<View style = {{height : height/7, marginLeft : 20, marginRight : 20, justifyContent: 'space-around'}}>
 				<View style = {{flex : 1, flexDirection : 'row'}}> 
	 				<View style = {{justifyContent : 'center', alignItems : 'center', flex : 1}}>
	 					<Image
	 					    resizeMode = {'center'}
	 					    style = {{alignItems : 'center'}} 
	 						source = {require ('../assets/images/ic_user.png')}
	 					/> 
	 				</View>   
 					 
 					<View style = {{flex : 8, justifyContent: 'center', alignItems: 'flex-start'}}>
	 					<TouchableOpacity onPress = {()=> this.props.navigation.navigate ('EditProfile')}>
	 						<Text style = {{textAlignVertical: 'center', fontSize : 17, color : '#5E5E5E', paddingLeft : 10}}>Edit Profile</Text>
	 					</TouchableOpacity>
 					</View>
 					
 					
 				
 				    <View style = {{justifyContent : 'center', alignItems : 'center', flex : 1}}>
	 					<Image
	 					    resizeMode = {'center'}
	 					    style = {{alignItems : 'center'}} 
	 						source = {require ('../assets/images/ic_move.png')}
	 					/>
	 				</View> 
 				</View> 

 				<View style = {{flex : 1, flexDirection : 'row'}}> 
	 				<View style = {{justifyContent : 'center', alignItems : 'center', flex : 1}}>
	 					<Image
	 					    resizeMode = {'center'}
	 					    style = {{alignItems : 'center'}} 
	 						source = {require ('../assets/images/ic_push_notification.png')}
	 					/> 
	 				</View>  
 					
 					<Text style = {{textAlignVertical: 'center', fontSize : 17, color : '#5E5E5E', flex : 8, paddingLeft : 10}}>Push Notification</Text>
 				
 				    <View style = {{justifyContent : 'center', alignItems : 'center', flex : 1}}>
	 					<Switch
				            onValueChange = {(value) => this.setState ({ toggleNotification : value})}
				            value = {this.state.toggleNotification}
				            thumbTintColor = {'white'}
				            onTintColor = {'#45db5e'}
				            /> 
	 				</View> 
 				</View> 
    		</View>

    		<Text style = {style.underLine}></Text> 

    		<View style = {{height : height/20}}>
    		   <Text style = {{color : '#000000', fontSize : 17, marginLeft : 20}}>Others</Text>
    		</View> 

            <View style = {{height : height/4.5, marginLeft : 20, marginRight : 20, justifyContent: 'space-around'}}>
 				<View style = {{flex : 1, flexDirection : 'row'}}> 
	 				<View style = {{justifyContent : 'center', alignItems : 'center', flex : 1}}>
	 					<Image
	 					    resizeMode = {'center'}
	 					    style = {{alignItems : 'center'}} 
	 						source = {require ('../assets/images/ic_star.png')}
	 					/> 
	 				</View>   
 					
 					<View style = {{flex : 8, justifyContent: 'center', alignItems: 'flex-start'}}>
	 					<TouchableOpacity >
	 						<Text style = {{textAlignVertical: 'center', fontSize : 17, color : '#5E5E5E', paddingLeft : 10}}>Rate our app</Text>
	 					</TouchableOpacity>
	 				</View>
 				
 				    <View style = {{justifyContent : 'center', alignItems : 'center', flex : 1}}>
	 					<Image
	 					    resizeMode = {'center'}
	 					    style = {{alignItems : 'center'}} 
	 						source = {require ('../assets/images/ic_move.png')}
	 					/>
	 				</View> 
 				</View> 

 				<View style = {{flex : 1, flexDirection : 'row'}}> 
	 				<View style = {{justifyContent : 'center', alignItems : 'center', flex : 1}}>
	 					<Image
	 					    resizeMode = {'center'}
	 					    style = {{alignItems : 'center'}} 
	 						source = {require ('../assets/images/ic_chat.png')}
	 					/> 
	 				</View>  
 					
 					<View style = {{flex : 8, justifyContent: 'center', alignItems: 'flex-start'}}>
	 					<TouchableOpacity >
	 						<Text style = {{textAlignVertical: 'center', fontSize : 17, color : '#5E5E5E', paddingLeft : 10}}>Send us feedback</Text>
	 					</TouchableOpacity>
	 				</View>
 				
 				    <View style = {{justifyContent : 'center', alignItems : 'center', flex : 1}}>
	 					<Image
	 					    resizeMode = {'center'}
	 					    style = {{alignItems : 'center'}} 
	 						source = {require ('../assets/images/ic_move.png')}
	 					/>
	 				</View> 
 				</View> 

 				<View style = {{flex : 1, flexDirection : 'row'}}> 
	 				<View style = {{justifyContent : 'center', alignItems : 'center', flex : 1}}>
	 					<Image
	 					    resizeMode = {'center'}
	 					    style = {{alignItems : 'center'}} 
	 						source = {require ('../assets/images/ic_privacy.png')}
	 					/> 
	 				</View>  
 					
 					<View style = {{flex : 8, justifyContent: 'center', alignItems: 'flex-start'}}>
	 					<TouchableOpacity >
	 						<Text style = {{textAlignVertical: 'center', fontSize : 17, color : '#5E5E5E', paddingLeft : 10}}>Privacy Policy</Text>
	 					</TouchableOpacity>
	 				</View>
 				
 				    <View style = {{justifyContent : 'center', alignItems : 'center', flex : 1}}>
	 					<Image
	 					    resizeMode = {'center'}
	 					    style = {{alignItems : 'center'}} 
	 						source = {require ('../assets/images/ic_move.png')}
	 					/>
	 				</View> 
 				</View> 
    		</View>
    	</View>
    	);
  }
  handleBackPress = () => {
        this.goBack();
		return true;
	
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
	preferences : {
		height : height/10,
	},
	textSetting : {
		color : '#000000', 
		fontSize : 22, 
		flex : 1, 
		marginLeft : 20, 
		justifyContent : 'center'
	},
	textPreferences : {
		color : '#bababa', 
		fontSize : 16, 
		marginLeft : 20, 
		marginTop : 5,
		flex : 1,
		alignItems : 'flex-start'
	},
	underLine : {
	    height : 1, 
	    backgroundColor : '#d1d1d1',
	    marginTop : 20,
	    marginBottom : 20
	},
});
