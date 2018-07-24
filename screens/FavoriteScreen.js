import React, {Component} from 'react';
import {
Text, View, Image, TouchableOpacity, Dimensions, StyleSheet, FlatList
} from 'react-native';
import SearchViewCheff from '../components/SearchViewCheff';
 

var arrFood = [
	{key : '1', name : 'Vegetarian Fried Rice', like : 342, userLike : true, timeStamp : '15 minutes ago', imageLink : 'https://lh3.googleusercontent.com/H4JtCirSnneOTFXHhhkx5gwjMn2XLAy4sMHGCXp4FaDKYzqvivX7i8YzeirlHyOBWFxRCQ'},
	{key : '2', name : 'Vegetarian Fried Rice', like : 162, userLike : true, timeStamp : '15 minutes ago', imageLink : 'https://lh3.googleusercontent.com/QVjU9_fTLFEqT0ityuYxwrWEsrQxiT08Bk4OXIhFnwdvV0BorRcdE6AMH6XjkF7owVn7-w'}, 
	{key : '3', name : 'Vegetarian Fried Rice', like : 382, userLike : true, timeStamp : '15 minutes ago', imageLink : 'https://lh3.googleusercontent.com/b_bELn-A3KLLvykgl9pQncQtZL0mDgFVxzD76ZB-byajj6RzMl0LF0tXFS6F_lDGWgdqcA'},
]; 
export default class FavoriteScreen extends Component {

	static navigationOptions = {
    header : { visible : false }
    };
	render (){
		return (
			<View style = {{backgroundColor : 'white', flex : 1}}>
				<View style = {styles.header}>
				    <View style = {{flex : 1, justifyContent : 'center', alignItems : 'center'}}>
			    		 <TouchableOpacity onPress = {()=> this.props.navigation.navigate ('Setting')}>
			    		 	<Image
			                    style = {styles.icon}
			                    resizeMode = {'center'}
			                    source = {require('../assets/images/icon_side_menu.png')} />
			    		 </TouchableOpacity>
			    	</View>

			    	<View style = {{flex : 7, justifyContent : 'center', alignItems : 'center'}}>
			    		 <Text style = {{fontSize : 15}}>Favorites</Text>
			    	</View> 
 
			    	<View style = {{flex : 1, justifyContent : 'center', alignItems : 'center'}}>
			    		 <TouchableOpacity onPress = {()=> this.props.navigation.navigate ('Setting')}>
			    		 	<Image
			                    style = {{height : 30, width : 30, marginLeft : 10, marginRight : 10}}
			                    resizeMode = {'center'}
			                    source = {require('../assets/images/ic_push_notification.png')} />
			    		    </TouchableOpacity>
			    	</View>
    			</View>
 
				<View style = {{marginLeft : 20, marginRight : 20, marginTop : 10}}>
					<SearchViewCheff moveToSeacrh = {()=>this.props.navigation.navigate('Search')} /> 
				</View>

				<FlatList
                    data={arrFood} 
				    renderItem={({item}) =>
                <View style = {styles.list}>
                  <TouchableOpacity style = {styles.itemFood}>
						<View style = {styles.imageFood}>
							<Image
								style = {{width : '100%', height : 150, borderRadius : 5,}}
								resizeMode = {'cover'}
								source={{uri: item.imageLink}} /> 
						</View>

						<View style  = {styles.infomationFood}>
							<Text style = {{fontSize : 14, color : 'black', flex : 3}}>{item.name}</Text>
							<View style = {{flex : 5, flexDirection : 'row'}}>
								<View style = {{flexDirection : 'row', flex : 1, justifyContent : 'flex-start', alignItems : 'center'}}>
									<Image
										style = {{height : 15, width : 15}}
										resizeMode = {'contain'}
										source = {require('../assets/images/ic_clock.png')} />
									<Text style = {{fontSize : 11, color : '#666', marginLeft : 7}}>{item.timeStamp}</Text>
								</View>

								<View style = {{flexDirection : 'row', flex : 1, justifyContent : 'flex-end', alignItems : 'center'}}>
									<Text style = {{fontSize : 11, color : 'black', marginRight : 7}}>{item.like}</Text>				
										<Image
											style = {{height : 15, width : 15}}
											resizeMode = {'contain'}
											source = {item.userLike ? require('../assets/images/ic_love.png') : require('../assets/images/ic_nonlove.png')}/>
								</View>
							</View>
						</View>
                   </TouchableOpacity>
				   <View style = {{backgroundColor : '#dddddd', height : 1}}></View>
                </View>
            }/>
				
			</View> 
		);
	}
}

const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create ({
	container : {
		flex : 1,
		backgroundColor : 'white'
	},
	header : {
		backgroundColor : '#ffffff', 
		marginTop : 30,
		height : height/20,
		width : null,
		flexDirection : 'row'
	},
	icon : { 
		height : 30,
		width : 30,
		marginLeft : 10,
	}, 
	list : {
		flex : 1,
		backgroundColor : 'white',
		marginLeft : 20,
		marginRight : 20,
		marginTop : 20,
	},
	itemFood : {
		width : '100%',
		height : 220,
	},
	imageFood : {
		flex : 3,
	},
	infomationFood : {
		flex : 1,
	}
})