import React, { Component } from 'react'
import { Text } from 'react-native'

export default class ActivityScreen extends Component {

  static navigationOptions = {
    headerShown: false,
  }

  render() {
    return <Text>Activity Screen</Text>
  }
}
