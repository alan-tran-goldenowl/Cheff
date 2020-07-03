import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';

import SearchViewCheff from 'components/SearchViewCheff';
import HomeTab from 'components/HomeTab/HomeTab';
import Header from 'components/Header';
import styles from './styles';


const HomeScreen = ({ navigation, typeFood = [] }) => {
  const renderHeader = () => (
    <React.Fragment>
      <Header
        logoVisible
        iconLeft={require('assets/images/icon_side_menu.png')}
        onPressLeft={() => navigation.navigate('Settings')}
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
            moveToSeacrh={() => navigation.navigate('Search')}
            pointerEvents="none"
          />
        </View>
      </View>
    </React.Fragment>
  );

  return (
    <View style={styles.container}>
      {renderHeader()}
      <HomeTab
        tab={typeFood}
        navigation={navigation}
      />
    </View>
  );
}

const enhance = compose(
  firebaseConnect(['Type_Food']),
  connect(({ firebase: { ordered: { Type_Food } } }) => ({
    typeFood: Type_Food,
  }))
)

export default enhance(HomeScreen);
