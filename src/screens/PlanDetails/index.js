import React, { useState } from 'react';
import { upperFirst } from 'lodash';
import {
  Text, View, Image, TouchableOpacity,
} from 'react-native';
import { useSelector } from 'react-redux';
import { useFirebase, useFirebaseConnect } from 'react-redux-firebase';
import moment from 'moment';
import images from 'assets/images';
import AntIcon from '@expo/vector-icons/AntDesign';
import Header from 'components/Header';
import styles from './styles';

const PlanDetails = ({ navigation }) => {
  const planId = navigation.state.params.id;
  const firebase = useFirebase();
  const user = firebase.auth().currentUser;
  useFirebaseConnect([`Meal_Plan/${user.uid}/${planId}`, 'Food', 'Type_Food']);
  const mealPlan = useSelector(({ firebase: { data: { Meal_Plan = {} } } }) => Meal_Plan[user.uid][planId] || {});
  // const food = useSelector(({ firebase: { data: { Food = {} } } }) => Food[mealPlan.food] || {});
  // const typeFood = useSelector(({ firebase: { data: { Type_Food = {} } } }) => Type_Food[food.type]);
  const [showNotification, setShowNotification] = useState(true);
  const goBack = () => navigation.goBack();

  const goEdit = () => {
    navigation.navigate('CreatePlan', {
      data: {
        name: '123',
      },
    });
  };

  const renderHeader = () => (
    <Header
      onPressLeft={goBack}
      iconLeft={images.icon_back}
      iconRight={images.icon_pen}
      onPressRight={goEdit}
    />
  );

  const handleVisibleNotifi = () => {
    setShowNotification(false);
  };

  const checkParamsEdit = () => {
    if (navigation.state.params.message) { return navigation.state.params.message === 'edit'; }
  };

  const renderItem = (icon, text) => {
    if (text) {
      return (
        <View style={styles.rowView}>
          <View style={styles.iconView}>
            <Image
              style={styles.icon}
              resizeMode="center"
              source={icon}
            />
          </View>
          <View style={styles.textView}>
            <Text style={styles.text}>
              {text}
            </Text>
          </View>
        </View>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      {/* header */}
      {renderHeader()}
      {
        (checkParamsEdit() && showNotification)
        && (
        <View style={styles.notification}>
          <Text style={{ color: 'white' }}>
            You have just edited your plan.
          </Text>
          <TouchableOpacity onPress={handleVisibleNotifi}>
            <AntIcon color="#FFF" name="close" size={20} />
          </TouchableOpacity>
        </View>
        )
      }
      {/* title */}
      <View style={styles.nameView}>
        <Text style={styles.nameText}>
          {upperFirst(mealPlan.title)}
        </Text>
      </View>

      {/* date */}
      {renderItem(images.icon_calendar, moment(mealPlan.date).format('DD, MMM, YYYY'))}
      {/* time */}
      {renderItem(images.icon_clock, moment(mealPlan.date).format('LT'))}
      {/* type */}
      {renderItem(images.icon_chicken_food, '')}
      {/* food */}
      {renderItem(images.icon_food, '')}
      {/* notes */}
      {renderItem(images.icon_note, mealPlan.notes)}
    </View>
  );
};


export default PlanDetails;
