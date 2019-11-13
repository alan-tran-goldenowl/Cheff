import React from 'react';
import {
  View,
  Text,
  Image,
  Switch,
  TouchableOpacity,
  BackHandler,
} from 'react-native';

import Header from '../components/Header';
import styles from '../styles/SettingStyle';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  }

  constructor(props) {
    super(props);
    this.state = {
      toggleNotification: true,
    };
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  handleBackPress = () => {
    this.goBack();
    return true;
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          iconLeft={require('../assets/images/icon_back.png')}
          onPressLeft={() => this.props.navigation.goBack()}
        />
        <View style={styles.preferences}>
          <Text style={styles.textSetting}>Settings</Text>
          <Text style={styles.textPreferences}>Update your preferences</Text>
        </View>
        <View style={styles.accountView}>
          <Text style={styles.accountText}>
            Account
          </Text>
        </View>
        <Text style={styles.underLine} />
        <View style={styles.content}>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={styles.centerFlex1}>
              <Image
                resizeMode="center"
                style={{ alignItems: 'center' }}
                source={require('../assets/images/ic_user.png')}
              />
            </View>
            <View style={styles.centerViewFlex8}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('EditProfile')}
              >
                <Text style={styles.commonText}>
                  Edit Profile
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.centerFlex1}>
              <Image
                resizeMode="center"
                style={{ alignItems: 'center' }}
                source={require('../assets/images/ic_move.png')}
              />
            </View>
          </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={styles.centerFlex1}>
              <Image
                resizeMode="center"
                style={{ alignItems: 'center' }}
                source={require('../assets/images/ic_push_notification.png')}
              />
            </View>
            <View style={styles.centerViewFlex8}>
              <Text style={styles.commonText}>
              Push Notification
              </Text>
            </View>
            <View style={styles.centerFlex1}>
              <Switch
                onValueChange={value => this.setState({ toggleNotification: value })}
                value={this.state.toggleNotification}
                thumbColor="white"
                trackColor="#45db5e"
              />
            </View>
          </View>
        </View>
        <Text style={styles.underLine} />
        <View style={styles.accountView}>
          <Text style={styles.otherText}>
            Others
          </Text>
        </View>
        <View style={styles.subContent}>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={styles.centerFlex1}>
              <Image
                resizeMode="center"
                style={{ alignItems: 'center' }}
                source={require('../assets/images/ic_star.png')}
              />
            </View>
            <View style={styles.centerViewFlex8}>
              <TouchableOpacity>
                <Text style={styles.commonText}>
                  Rate our app
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.centerFlex1}>
              <Image
                resizeMode="center"
                style={{ alignItems: 'center' }}
                source={require('../assets/images/ic_move.png')}
              />
            </View>
          </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={styles.centerFlex1}>
              <Image
                resizeMode="center"
                style={{ alignItems: 'center' }}
                source={require('../assets/images/ic_chat.png')}
              />
            </View>
            <View style={styles.centerViewFlex8}>
              <TouchableOpacity>
                <Text style={styles.commonText}>
                  Send us feedback
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.centerFlex1}>
              <Image
                resizeMode="center"
                style={{ alignItems: 'center' }}
                source={require('../assets/images/ic_move.png')}
              />
            </View>
          </View>

          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={styles.centerFlex1}>
              <Image
                resizeMode="center"
                style={{ alignItems: 'center' }}
                source={require('../assets/images/ic_privacy.png')}
              />
            </View>
            <View style={styles.centerViewFlex8}>
              <TouchableOpacity>
                <Text style={styles.commonText}>
                  Privacy Policy
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.centerFlex1}>
              <Image
                resizeMode="center"
                style={{ alignItems: 'center' }}
                source={require('../assets/images/ic_move.png')}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}
