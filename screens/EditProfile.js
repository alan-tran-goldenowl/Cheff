import React, { Component } from 'react'
import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet,
  BackHandler,
  TextInput,
  Switch,
} from 'react-native'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fullname: 'Kún Park',
      email: 'Pikakun19@gmail.com',
      toggleFacebook: true,
      toggleGoogle: true,
    }
  }
  static navigationOptions = {
    header: null,
  }

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      this.goBack() // works best when the goBack is async
      return true
    })
  }

  componentWillUnmount() {
    this.backHandler.remove()
  }
  render() {
    return (
      <View style={style.container}>
        <View style={style.header}>
          <View
            style={{ flex: 2, justifyContent: 'center', height: height / 20 }}
          >
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Image
                style={style.iconBack}
                resizeMode={'center'}
                source={require('../assets/images/icon_back.png')}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flex: 6,
              height: height / 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={{ color: '#000000', fontSize: 17 }}>Edit Profile</Text>
          </View>

          <View
            style={{
              flex: 2,
              height: height / 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <TouchableOpacity>
              <Text style={{ color: '#2b2b2b', fontSize: 15 }}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ alignItems: 'center', marginTop: 30 }}>
          <TouchableHighlight style={style.imageContainer2}>
            <Image
              style={style.image}
              source={{
                uri:
                  'http://www.free-avatars.com/data/media/37/cat_avatar_0597.jpg',
              }}
            />
          </TouchableHighlight>
        </View>

        <View style={{ alignItems: 'center', marginTop: 15 }}>
          <Text style={{ color: 'blue', fontSize: 15 }}>
            Change image profile
          </Text>
        </View>

        <View style={{ margin: 20 }}>
          <Text style={{ fontSize: 14 }}>Your full name</Text>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            underlineColorAndroid={'transparent'}
            autofocus={false}
            multiline={false}
            placeholder={'Enter your name'}
            style={style.text}
            onChangeText={text => this.setState({ fullname: text })}
            value={this.state.fullname}
          />
        </View>

        <View style={{ margin: 20 }}>
          <Text style={{ fontSize: 14 }}>Your email address</Text>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            underlineColorAndroid={'transparent'}
            autofocus={false}
            multiline={false}
            placeholder={'Enter your email'}
            style={style.text}
            onChangeText={text => this.setState({ email: text })}
            value={this.state.email}
          />
        </View>

        <View style={{ margin: 20 }}>
          <Text style={{ fontSize: 19, color: '#999' }}>Link Account</Text>
        </View>

        <View style={{ flexDirection: 'row', height: 50 }}>
          <View style={{ height: '100%', justifyContent: 'center', flex: 1 }}>
            <Image
              style={{ width: 30, height: 30, marginLeft: 12 }}
              resizeMode={'center'}
              source={require('../assets/images/ic_facebook.png')}
            />
          </View>

          <View
            style={{
              height: '100%',
              justifyContent: 'center',
              marginLeft: 30,
              flex: 4,
            }}
          >
            <Text style={{ fontSize: 16 }}>Facebook</Text>
          </View>

          <View
            style={{
              height: '100%',
              justifyContent: 'center',
              alignItems: 'flex-end',
              marginRight: 20,
              flex: 5,
            }}
          >
            <Switch
              onValueChange={value => this.setState({ toggleFacebook: value })}
              value={this.state.toggleFacebook}
              thumbTintColor={'white'}
              onTintColor={'#45db5e'}
            />
          </View>
        </View>

        <View style={{ flexDirection: 'row', height: 50 }}>
          <View style={{ height: '100%', justifyContent: 'center', flex: 1 }}>
            <Image
              style={{ width: 30, height: 30, marginLeft: 20 }}
              resizeMode={'center'}
              source={require('../assets/images/ic_google.png')}
            />
          </View>

          <View
            style={{
              height: '100%',
              justifyContent: 'center',
              marginLeft: 30,
              flex: 4,
            }}
          >
            <Text style={{ fontSize: 16 }}>Google</Text>
          </View>

          <View
            style={{
              height: '100%',
              justifyContent: 'center',
              alignItems: 'flex-end',
              marginRight: 20,
              flex: 5,
            }}
          >
            <Switch
              onValueChange={value => this.setState({ toggleGoogle: value })}
              value={this.state.toggleGoogle}
              thumbTintColor={'white'}
              onTintColor={'#45db5e'}
            />
          </View>
        </View>
      </View>
    )
  }
}
const { height, width } = Dimensions.get('window')
const style = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  header: {
    backgroundColor: '#ffffff',
    marginTop: 20,
    height: height / 20,
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  iconBack: {
    height: 30,
    width: 30,
    marginLeft: 10,
  },
  imageContainer: {
    height: 128,
    width: 128,
    borderRadius: 64,
  },
  image: {
    height: 128,
    width: 128,
    borderRadius: 64,
  },
  text: {
    width: 200,
    fontSize: 17,
    color: 'black',
  },
})
