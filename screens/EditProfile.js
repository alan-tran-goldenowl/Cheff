import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  Switch,
  TextInput,
  BackHandler,
  TouchableHighlight,
} from 'react-native';

import Header from '../components/Header';

import { storageHelper } from '../utils';

import styles from '../styles/EditProfileStyle';

export default class extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    email: '',
    photoURL: '',
    displayName: '',
    toggleGoogle: false,
    toggleFacebook: false,
  };

  componentDidMount() {
    storageHelper.getAsyncStorage('userInfo')
      .then(userInfo => this.setState({ ...userInfo }))
      .catch(() => {});
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.props.navigation.goBack);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.props.navigation.goBack);
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          rightText="Save"
          title="Edit Profile"
          onPressLeft={() => this.props.navigation.goBack()}
          iconLeft={require('../assets/images/icon_back.png')}
        />
        {
          !!this.state.photoURL && (
          <View style={{ alignItems: 'center', marginTop: 30 }}>
            <TouchableHighlight style={styles.imageContainer2}>
              <Image
                style={styles.image}
                source={{
                  uri: this.state.photoURL,
                }}
              />
            </TouchableHighlight>
          </View>
          )
        }

        <View style={{ alignItems: 'center', marginTop: 15 }}>
          <Text style={{ color: 'blue', fontSize: 15 }}>
              Change image profile
          </Text>
        </View>

        <View style={{ margin: 20 }}>
          <Text style={{ fontSize: 14 }}>
            Your full name
          </Text>
          <TextInput
            multiline={false}
            style={styles.text}
            placeholder="Enter your name"
            value={this.state.displayName}
            underlineColorAndroid="transparent"
            onChangeText={text => this.setState({ displayName: text })}
          />
        </View>

        <View style={{ margin: 20 }}>
          <Text style={{ fontSize: 14 }}>
              Your email address
          </Text>
          <TextInput
            multiline={false}
            style={styles.text}
            value={this.state.email}
            underlineColorAndroid="transparent"
            onChangeText={text => this.setState({ email: text })}
            placeholder="Enter your email"
          />
        </View>

        <View style={{ margin: 20 }}>
          <Text style={{ fontSize: 19, color: '#999' }}>
            Link Account
          </Text>
        </View>

        <View style={{ flexDirection: 'row', height: 50 }}>
          <View style={{ height: '100%', justifyContent: 'center', flex: 1 }}>
            <Image
              resizeMode="center"
              style={{ width: 30, height: 30, marginLeft: 12 }}
              source={require('../assets/images/ic_facebook.png')}
            />
          </View>

          <View
            style={{
              flex: 4,
              height: '100%',
              marginLeft: 30,
              justifyContent: 'center',
            }}
          >
            <Text style={{ fontSize: 16 }}>
              Facebook
            </Text>
          </View>

          <View
            style={{
              flex: 5,
              height: '100%',
              marginRight: 20,
              alignItems: 'flex-end',
              justifyContent: 'center',
            }}
          >
            <Switch
              thumbColor="white"
              trackColor="#45db5e"
              value={this.state.toggleFacebook}
              onValueChange={value => this.setState({ toggleFacebook: value })}
            />
          </View>
        </View>

        <View style={{ flexDirection: 'row', height: 50 }}>
          <View style={{ height: '100%', justifyContent: 'center', flex: 1 }}>
            <Image
              resizeMode="center"
              style={{ width: 30, height: 30, marginLeft: 20 }}
              source={require('../assets/images/ic_google.png')}
            />
          </View>

          <View
            style={{
              flex: 4,
              height: '100%',
              marginLeft: 30,
              justifyContent: 'center',
            }}
          >
            <Text style={{ fontSize: 16 }}>
              Google
            </Text>
          </View>

          <View
            style={{
              flex: 5,
              height: '100%',
              marginRight: 20,
              alignItems: 'flex-end',
              justifyContent: 'center',
            }}
          >
            <Switch
              thumbColor="white"
              trackColor="#45db5e"
              value={this.state.toggleGoogle}
              onValueChange={value => this.setState({ toggleGoogle: value })}
            />
          </View>
        </View>
      </View>
    );
  }
}
