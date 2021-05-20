import React from 'react';
import {
  View, Text, FlatList, Alert,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useFirebase, useFirebaseConnect } from 'react-redux-firebase';
import moment from 'moment';

import images from 'assets/images';
import Header from 'components/Header';
import { deletePlan, deletePlanToBuy } from 'services';
import styles from './styles';
import ListPlanItem from './components/ListPlanItem';

const ListPlan = ({ navigation }) => {
  const { day } = navigation.state.params;
  const dispatch = useDispatch();

  const firebase = useFirebase();
  const user = firebase.auth().currentUser;
  useFirebaseConnect(`Meal_Plan/${user.uid}`);
  const mealPlan = useSelector(({ firebase: { ordered: { Meal_Plan } } }) => (Meal_Plan[user.uid] || []).filter(
    item => moment(item.value.date).format('YYYY-MM-DD') === day,
  )).sort((a, b) => a.value.date - b.value.date); // filter and sort by date

  const goBack = () => navigation.goBack();

  const goToMealPlan = id => navigation.navigate('PlanDetails', { id });

  const deleteMealPlan = (id, idWhatToBuy) => {
    Alert.alert('Warning', 'Are you want to delete this meal plan ?', [
      {
        text: 'Cancel',
      },
      {
        text: 'Delete',
        onPress: () => {
          // firebase.remove(`Meal_Plan/${user.uid}/${id}`);
          const params = {
            planId: id,
            callback: goBack,
            userId: user.uid,
          };
          dispatch(deletePlan(params)).then(() => {
            dispatch(deletePlanToBuy({
              userId: user.uid,
              planId: idWhatToBuy,
            }));
          });
          // goBack();
        },
      },
    ]);
  };

  const editMealPlan = id => navigation.navigate('CreatePlan', { id });

  const renderHeader = () => (
    <Header type="back" onPressLeft={goBack} iconLeft={images.icon_back} />
  );

  const renderDayTime = () => (
    <View style={styles.dayView}>
      <Text style={styles.day}>{moment(day).format('DD MMMM, YYYY')}</Text>

      {moment(day).format('DD MMMM, YYYY')
      === moment().format('DD MMMM, YYYY') ? (
        <Text style={styles.today}>Today</Text>
        ) : null}
    </View>
  );

  return (
    <View style={styles.container}>
      {renderHeader()}
      {renderDayTime()}
      <FlatList
        data={mealPlan}
        keyExtractor={({ key }) => key}
        renderItem={({ item }) => (
          <ListPlanItem
            id={item.key}
            {...item}
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
