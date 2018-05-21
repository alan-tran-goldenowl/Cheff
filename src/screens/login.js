import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={Actions.HomeStack}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
