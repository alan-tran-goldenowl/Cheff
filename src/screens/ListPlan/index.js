import React from 'react';
import {
  View,
  Text,
  FlatList,
  Alert,
} from 'react-native';
import { useSelector } from 'react-redux';
import { useFirebase, useFirebaseConnect } from 'react-redux-firebase';
import moment from 'moment';

import images from 'assets/images';
import { listIconPlan } from 'utils';
import Header from 'components/Header';
import styles from './styles';
import ListPlanItem from './components/ListPlanItem';

const ListPlan = ({ navigation }) => {
  const { day } = navigation.state.params;

  const firebase = useFirebase();
  const user = firebase.auth().currentUser;
  useFirebaseConnect(`Meal_Plan/${user.uid}`);
  const mealPlan = useSelector(({ firebase: { ordered: { Meal_Plan } } }) => (Meal_Plan[user.uid])
    .filter((item) => moment(item.value.date).format('YYYY-MM-DD') === day))
    .sort((a, b) => a.value.date - b.value.date); // filter and sort by date

  const goBack = () => navigation.goBack();

  const goToMealPlan = (id) => navigation.navigate('PlanDetails', { id });

  const deleteMealPlan = () => {
    Alert.alert(
      'Warning',
      'Are you want to delete this meal plan ?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('cancel'),
        },
        {
          text: 'Delete',
          onPress: () => console.log('delete'),
        },
      ],
    );
  };

  const editMealPlan = (id) => navigation.navigate('CreatePlan', { id });

  const renderHeader = () => (
    <Header
      onPressLeft={goBack}
      iconLeft={images.icon_back}
    />
  );

  const renderDayTime = () => (
    <View style={styles.dayView}>
      <Text style={styles.day}>
        01 August, 2018
      </Text>
      <Text style={styles.today}>Today</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {renderHeader()}
      {renderDayTime()}
      <FlatList
        data={mealPlan}
        keyExtractor={({ key }) => key}
        renderItem={({ item, index }) => (
          <ListPlanItem
            id={item.key}
            {...item}
            icon={listIconPlan[index % 4]}
            goToMealPlan={goToMealPlan}
            deleteMealPlan={deleteMealPlan}
            editMealPlan={editMealPlan}
          />
        )}
      />
    </View>
  );
};

export default ListPlan;
