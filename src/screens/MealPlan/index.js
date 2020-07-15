import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { useFirebase, useFirebaseConnect } from 'react-redux-firebase';

import MyCalendar from 'components/Calendar';
import Header from 'components/Header';
import images from 'assets/images';

import styles from './styles';

const MealPlan = ({ navigation }) => {
  const [currentMonth, setCurrentMonth] = useState(moment());
  const firebase = useFirebase();
  const user = firebase.auth().currentUser;
  useFirebaseConnect(`Meal_Plan/${user.uid}`);
  const mealPlan = useSelector(({ firebase: { ordered: { Meal_Plan = {} } } }) => (Meal_Plan[user.uid] || [])
    .filter((item) => moment(item.value.date).month() === currentMonth.month())); // filter by month

  const onPressLeftCalendar = () => {
    setCurrentMonth(currentMonth.clone().subtract(1, 'months'));
  };

  const onPressRightCalendar = () => {
    setCurrentMonth(currentMonth.clone().add(1, 'months'));
  };

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
    <MyCalendar
      moveToListPlan={(day) => navigation.navigate('ListPlan', { day })}
      mealPlan={mealPlan}
      onPressLeftCalendar={onPressLeftCalendar}
      onPressRightCalendar={onPressRightCalendar}
      currentMonth={currentMonth}
    />
  );

  return (
    <View style={styles.container}>
      {renderHeader()}
      {renderIntro()}
      {renderCalendar()}
    </View>
  );
};

export default MealPlan;
