import React, { Component, Fragment } from 'react';
import { View, Image } from 'react-native';
import styles from './styles';
import SearchViewCheff from 'components/SearchViewCheff';
import HomeTab from 'components/HomeTab/HomeTab';
import Header from 'components/Header';
import { connect } from '../../../recontext/store';


class HomeScreen extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  renderHeader() {
    return (
      <Fragment>
        <Header
          logoVisible
          iconLeft={require('assets/images/icon_side_menu.png')}
          onPressLeft={() => this.props.navigation.navigate('Settings')}
          iconRight={require('assets/images/ic_push_notification.png')}
        />
        <View style={styles.searchView}>
          <Image
            resizeMode="stretch"
            source={require('assets/images/img1.jpg')}
            style={styles.backgroundImage}
          />
          <View style={styles.search}>
            <SearchViewCheff
              moveToSeacrh={() => this.props.navigation.navigate('Search', {
                data: this.props.listFood,
              })
              }
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
          recommendFoods={this.props.listFood.filter(i => i.type === 'recommend')}
          breakfastFoods={this.props.listFood.filter(i => i.type === 'breakfast')}
          lunchFoods={this.props.listFood.filter(i => i.type === 'lunch')}
          brunchFoods={this.props.listFood.filter(i => i.type === 'brunch')}
          dinnerFoods={this.props.listFood.filter(i => i.type === 'dinner')}
          navigation={this.props.navigation}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  listFood: state.listFood,
});

export default connect(mapStateToProps)(HomeScreen);
