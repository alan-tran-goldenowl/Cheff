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
import { listIconPlan } from 'utils';
import styles from './styles';

const PlanDetails = ({ navigation }) => {
  const { id: planId, isEdit } = navigation.state.params || {};
  const firebase = useFirebase();
  const user = firebase.auth().currentUser;
  useFirebaseConnect([`Meal_Plan/${user.uid}/${planId}`, 'Food', 'Type_Food']);
  const mealPlan = useSelector(({ firebase: { data: { Meal_Plan = {} } } }) => Meal_Plan[user.uid]?.[planId] || {});
  const food = useSelector(({ firebase: { data: { Food = {} } } }) => (mealPlan?.food || []).map(item => Food[item]?.name));
  const [showNotification, setShowNotification] = useState(isEdit);
  const goBack = () => navigation.goBack();

  const goEdit = () => {
    navigation.navigate('CreatePlan', { id: planId });
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

  const renderItem = (icon, text, secondIcon) => {
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
            {secondIcon
              && (
              <Image
                source={secondIcon}
                resizeMode="center"
                style={styles.iconViewImage}
              />
              )}
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
      showNotification
        && (
        <View style={styles.notification}>
          <Text style={styles.textEdit}>
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
      {renderItem(images.icon_chicken_food, upperFirst(mealPlan.meal), listIconPlan[mealPlan.meal])}
      {/* food */}
      {renderItem(images.icon_food, food.join('\n'))}
      {/* notes */}
      {renderItem(images.icon_note, mealPlan.note)}
    </View>
  );
};

export default PlanDetails;
