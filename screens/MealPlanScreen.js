import React, { Component, Fragment } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import MyCalendar from '../components/Calendar';
import styles from '../styles/MealPlanStyle';

export default class MealPlan extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      fullname: 'Michael',
    };
  }

  renderHeader() {
    return (
      <View style={styles.header}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Settings')}>
            <Image
              style={styles.icon}
              resizeMode="center"
              source={require('../assets/images/icon_side_menu.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 8, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.title}>Meal Plan</Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('CreatePlan')}>
            <Image
              style={styles.icon}
              resizeMode="center"
              source={require('../assets/images/ic_plus.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  renderIntro() {
    return (
      <Fragment>
        <View style={styles.welcomeView}>
          <View style={{ height: '100%', justifyContent: 'center' }}>
            <Image
              style={styles.icon}
              resizeMode="center"
              source={require('../assets/images/ic_pink_circle.png')}
            />
          </View>
          <View style={{ height: '100%', justifyContent: 'center' }}>
            <Text style={styles.nameText}>
              {`Hi ${this.state.fullname}`}
            </Text>
          </View>
        </View>
        <View style={styles.welcomeView2}>
          <Text style={styles.welcomeText}>
            {'Let\'s see what our recipes. \nfor the day are.'}
          </Text>
        </View>
      </Fragment>
    );
  }

  renderCalendar() {
    return (
      <MyCalendar moveToListPlan={() => this.props.navigation.navigate('ListPlan')} />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        {this.renderIntro()}
        {this.renderCalendar()}
      </View>
    );
  }
}
