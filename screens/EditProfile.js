import React, {Component} from 'react';
import {
 View, Text, Dimensions, Image, TouchableOpacity, TouchableHighlight, StyleSheet, BackHandler, TextInput
} from 'react-native';

export default class extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      fullname : 'Kún Park',
      email : 'Pikakun19@gmail.com'
   };
  }
  static navigationOptions = {
       header : null,
  };

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      this.goBack(); // works best when the goBack is async
      return true;
    });
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }
  render (){
    return (
      <View style = {style.container}>
        <View style = {style.header}>
            <View style = {{flex : 2, justifyContent : 'center', height : height/20,}}>
              <TouchableOpacity onPress = {()=>this.props.navigation.goBack()}>
                <Image
                  style = {style.iconBack}
                  resizeMode = {'center'}
                  source = {require('../assets/images/icon_back.png')} />
              </TouchableOpacity>
            </View>
  
            <View style = {{flex : 6, height : height/20, justifyContent : 'center', alignItems : 'center'}}>
              <Text style = {{color : '#000000', fontSize : 17}}>Edit Profile</Text>
            </View>
  
  
            <View style = {{flex : 2, height : height/20, justifyContent : 'center', alignItems : 'center'}}>
              <TouchableOpacity>
                <Text style = {{color : '#2b2b2b', fontSize : 15}}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
  
          <View style = {{alignItems : 'center', marginTop : 30}}>
            <TouchableHighlight style={ style.imageContainer2 }>
              <Image style={ style.image } source={{ uri: 'http://www.free-avatars.com/data/media/37/cat_avatar_0597.jpg' }} />
            </TouchableHighlight>
          </View>
    
          <View style = {{alignItems : 'center', marginTop : 15}}>
            <Text style = {{color : 'blue', fontSize : 15}}>Change image profile</Text>
          </View> 

          <View style = {{margin : 20}}>
            <Text style = {{fontSize : 14}}>Your full name</Text>
            <TextInput
                  style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                  underlineColorAndroid = {'transparent'}
                  autofocus = {false}
                  multiline = {false}
                  placeholder = {'Enter your name'}
                  style = {style.text}
                  onChangeText={(text) => this.setState({fullname : text})}
                  value={this.state.fullname}
            /> 
          </View>

           <View style = {{margin : 20}}>
            <Text style = {{fontSize : 14}}>Your email address</Text>
            <TextInput
                  style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                  underlineColorAndroid = {'transparent'}
                  autofocus = {false}
                  multiline = {false}
                  placeholder = {'Enter your email'}
                  style = {style.text}
                  onChangeText={(text) => this.setState({email : text})}
                  value={this.state.email}
            /> 
          </View>

          <View style = {{margin : 20}}>
            <Text style = {{fontSize : 19, color : '#999'}}>Link Account</Text>
            
          </View>
          
      </View> 
    );
   }
}
const {height, width} = Dimensions.get ('window');
const style = StyleSheet.create ({
  container : {
    backgroundColor : '#ffffff', 
    flex : 1
  },
  header : {
    backgroundColor : '#ffffff', 
    marginTop : 20,
    height : height/20,
    justifyContent : 'center',
    alignItems : 'flex-start', 
    flexDirection :'row'
  },
  iconBack : { 
    height : 30,
    width : 30,
    marginLeft : 10,
  },
  imageContainer: {
    height:128,
    width: 128,
    borderRadius: 64
  },
  image: {
    height:128,
    width: 128,
    borderRadius: 64
  },   
  text : {
		width : 200,
		fontSize : 17,
		color : 'black',
	}
})