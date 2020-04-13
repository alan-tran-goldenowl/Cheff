import React, { Component, Fragment } from 'react';
import { View, Text, Image } from 'react-native';
import MyCalendar from 'components/Calendar';
import Header from 'components/Header';

import styles from './styles';

export default class MealPlan extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      fullname: 'Michael',
    };
  }

  renderHeader() {
    return (
      <Header
        iconLeft={require('assets/images/icon_side_menu.png')}
        onPressLeft={() => this.props.navigation.navigate('Settings')}
        iconRight={require('assets/images/ic_plus.png')}
        onPressRight={() => this.props.navigation.navigate('CreatePlan')}
        title="Meal Plan"
      />
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
              source={require('assets/images/ic_pink_circle.png')}
            />
          </View>
          <View style={{ height: '100%', justifyContent: 'center' }}>
            <Text style={styles.nameText}>{`Hi ${this.state.fullname}`}</Text>
          </View>
        </View>
        <View style={styles.welcomeView2}>
          <Text style={styles.welcomeText}>{"Let's see what our recipes. \nfor the day are."}</Text>
        </View>
      </Fragment>
    );
  }

  renderCalendar() {
    return <MyCalendar moveToListPlan={() => this.props.navigation.navigate('ListPlan')} />;
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
