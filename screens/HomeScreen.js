import React, { Component, Fragment } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import SearchViewCheff from '../components/SearchViewCheff';
import HomeTab from '../components/HomeTab/HomeTab';

import styles from '../styles/HomeStyle';
import { connect } from '../recontext/store';

class HomeScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  renderHeader() {
    return (
      <Fragment>
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
            <Image style={styles.logo} source={require('../assets/images/logo_cheff.png')} />
          </View>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Settings')}>
              <Image
                style={styles.icon}
                resizeMode="center"
                source={require('../assets/images/ic_push_notification.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.searchView}>
          <Image
            resizeMode="stretch"
            source={require('../assets/images/img1.jpg')}
            style={styles.backgroundImage}
          />
          <View style={styles.search}>
            <SearchViewCheff
              moveToSeacrh={() => this.props.navigation.navigate('Search', {
                data: this.props.listFood,
              })}
              pointerEvents="none"
            />
          </View>
        </View>
      </Fragment>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        <HomeTab
          moveToDetail={() => this.props.navigation.navigate('FoodDetail')}
          recommendFoods={this.props.listFood.filter(i => i.type === 'recommend')}
          breakfastFoods={this.props.listFood.filter(i => i.type === 'breakfast')}
          lunchFoods={this.props.listFood.filter(i => i.type === 'lunch')}
          brunchFoods={this.props.listFood.filter(i => i.type === 'brunch')}
          dinnerFoods={this.props.listFood.filter(i => i.type === 'dinner')}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  listFood: state.listFood,
});

export default connect(mapStateToProps)(HomeScreen);
