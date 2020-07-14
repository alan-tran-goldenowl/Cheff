import React from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { compose } from 'redux';

import MyCalendar from 'components/Calendar';
import Header from 'components/Header';
import images from 'assets/images';

import styles from './styles';

const MealPlan = ({ navigation, user }) => {
  const renderHeader = () => (
    <Header
      iconLeft={images.icon_side_menu}
      onPressLeft={() => navigation.navigate('Settings')}
      iconRight={images.ic_plus}
      onPressRight={() => navigation.navigate('CreatePlan')}
      title="Meal Plan"
    />
  );

  const renderIntro = () => (
    <View>
      <View style={styles.welcomeView}>
        <View style={styles.center}>
          <Image
            style={styles.icon}
            resizeMode="center"
            source={images.ic_pink_circle}
          />
        </View>
        <View style={styles.center}>
          <Text style={styles.nameText}>{`Hi ${user.displayName}`}</Text>
        </View>
      </View>
      <View style={styles.welcomeView2}>
        <Text style={styles.welcomeText}>{"Let's see what our recipes. \nfor the day are."}</Text>
      </View>
    </View>
  );

  const renderCalendar = () => (
    <MyCalendar moveToListPlan={() => navigation.navigate('ListPlan')} />
  );

  return (
    <View style={styles.container}>
      {renderHeader()}
      {renderIntro()}
      {renderCalendar()}
    </View>
  );
};

const enhance = compose(
  connect(({ firebase: { auth } }) => ({
    user: auth,
  })),
);

export default enhance(MealPlan);
