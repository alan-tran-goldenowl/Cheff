import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import moment from 'moment';
import { useSelector } from 'react-redux';

import MyCalendar from 'components/Calendar';
import Header from 'components/Header';
import images from 'assets/images';
import { FireBase } from 'constants';
import { COLOR } from 'styles/theme';
import ItemUpcoming from './components/ItemUpcoming';

import styles from './styles';

const MealPlan = ({ navigation }) => {
  const [currentMonth, setCurrentMonth] = useState(moment());

  const user = FireBase.auth().currentUser || {};

  const mealPlan = useSelector(({ firebase: { ordered: { Meal_Plan } } }) => (Meal_Plan[user?.uid] || [])
    .filter(
      item => moment(item.value.date).month() === currentMonth.month(),
    )); // filter by month

  const upcomingPlan = useSelector(
    ({
      firebase: {
        ordered: { Meal_Plan = {} },
      },
    }) => (Meal_Plan[user?.uid] || []).filter(
      item => item.value.date >= new Date().getTime(),
    ).sort((a, b) => a.value.date > b.value.date).slice(0, 3),
  );

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

  const renderCalendar = () => (
    <MyCalendar
      moveToListPlan={day => navigation.navigate('ListPlan', { day })}
      mealPlan={mealPlan}
      onPressLeftCalendar={onPressLeftCalendar}
      onPressRightCalendar={onPressRightCalendar}
      currentMonth={currentMonth}
    />
  );

  const renderUpcomingPlan = () => (upcomingPlan.length ? (
    <View style={{ marginBottom: 150 }}>
      <Text style={{ padding: 20 }}>Upcoming Plan</Text>
      <FlatList
        data={upcomingPlan ?? []}
        renderItem={({ item }) => (
          <ItemUpcoming
            data={item.value}
            onPress={() => navigation.navigate('PlanDetails', { id: item.key })}
          />
        )}
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 0.25,
              backgroundColor: COLOR.LIGHT_GRAY_COLOR,
              marginLeft: 20,
            }}
          />
        )}
        keyExtractor={item => String(item.key)}
      />
    </View>
  ) : null);

  return (
    <View style={styles.container}>
      {renderHeader()}
      {renderCalendar()}
      {renderUpcomingPlan()}
    </View>
  );
};

export default MealPlan;
