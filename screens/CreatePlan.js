import React, {Component} from 'react';
import {
View, Dimensions, Image, TouchableOpacity, Text, StyleSheet, ScrollView, TextInput
} from 'react-native';
import DateTimePicker from "react-native-modal-datetime-picker";


var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
export default class CreatePlan extends Component {

    constructor(props) {
        super(props);
        this.state = {
          titlePlan : "",
          date: "2018-July-27",
          time : "2h30 PM",
          modeDateTime : 'date',
          isDateTimePickerVisible: false,
       };
      }
    static navigationOptions = {
        header : null
    }

    _showDateTimePicker = () => this.setState({ 
        modeDateTime : 'date',
        isDateTimePickerVisible: true });

    _showTimePicker = () => this.setState({ 
        modeDateTime : 'time',
        isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ 
        modeDateTime : 'time',
        isDateTimePickerVisible: false });

    _handleDatePicked = (dateselected) => {
        console.log(dateselected);
        
     this.setState ({
         date : dateselected.getDate() + " " +  months[dateselected.getMonth()] + ", " + dateselected.getFullYear()
     });
     this._hideDateTimePicker();
  };

    render (){
        return (
            <ScrollView style = {style.container}>
                <View style = {style.header}>
    		        <TouchableOpacity onPress = {()=>this.props.navigation.goBack()}>
    		 	        <Image
                             style = {style.iconBack}
                             resizeMode = {'center'}
                             source = {require('../assets/images/ic_exist.png')} />
    		        </TouchableOpacity>
    		    </View>

                <Text style = {{fontSize : 20, color : '#777', marginLeft : 20}}>Title of the meal plan</Text>
                <TextInput
                    underlineColorAndroid = {'transparent'}
                    autofocus = {false}
                    multiline = {true}
                    placeholder = {'Write your plan...'}
                    style = {style.text}
                    onChangeText={(text) => this.setState({titlePlan : text})}
                    value={this.state.fullname} />

                <View style = {{flexDirection : 'row', marginLeft :20, marginRight : 20, marginTop : 35}}>
                    <View style = {{flex : 1}}>
                        <Text style = {{flex : 1}}>Date</Text>
                        <TouchableOpacity 
                            onPress={this._showDateTimePicker}
                            style = {{flexDirection : 'row', flex : 1}}>
                            <Text style = {{flex : 5}}>{this.state.date}</Text>
                            <View style = {{justifyContent : 'center', alignItems : 'flex-end', flex : 2}}>
                                <Image 
                                    resizeMode = {'center'} 
                                    style = {{height : 10, width : 10, marginRight : 20}}
                                    source = {require ('../assets/images/ic_pulldown.png')}/>
                            </View>
                        </TouchableOpacity>
                        <DateTimePicker
                            isVisible={this.state.isDateTimePickerVisible}
                            onConfirm={this._handleDatePicked}
                            onCancel={this._hideDateTimePicker}
                            mode = {this.state.modeDateTime}
                            is24Hour = {false}
                            />
                        
                    </View>

                    <View style = {{flex : 1}}>
                        <Text style = {{flex : 1}}>Time</Text>
                        <TouchableOpacity 
                            onPress={this._showTimePicker}
                            style = {{flexDirection : 'row', flex : 1}}>
                            <Text style = {{flex : 5}}>{this.state.time}</Text>
                            <View style = {{justifyContent : 'center', alignItems : 'flex-end', flex : 2}}>
                                <Image 
                                    resizeMode = {'center'}
                                    style = {{height : 10, width : 10, marginRight : 20}}
                                    source = {require ('../assets/images/ic_pulldown.png')}/>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
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
		height : 15,
		width : 15,
		marginLeft : 10,
    },
    text : {
        marginLeft : 20,
        marginTop : 10,
        fontSize : 15
    },
    button: {
        backgroundColor: "lightblue",
        padding: 12,
        margin: 16,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
        borderColor: "rgba(0, 0, 0, 0.1)"
      }
});