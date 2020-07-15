import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Switch,
} from 'react-native';
import moment from 'moment';

import { useSelector } from 'react-redux';
import { useFirebase, useFirebaseConnect } from 'react-redux-firebase';
import MultiSelect from 'components/MultiSelect';

import Header from 'components/Header';
import DatePicker from 'components/DatePicker';
import PickerSelect from 'components/PickerSelect';
import Button from 'components/Button';
import CustomTextInput from 'components/TextInput';
import images from 'assets/images';
import { isIOS, convertDataPicker, dataPickerMeal } from 'utils';

import styles from './styles';

const CreatePlan = ({ navigation }) => {
  const firebase = useFirebase();
  const user = firebase.auth().currentUser;
  useFirebaseConnect(['Type_Food', 'Food', `Meal_Plan/${user.uid}`]);
  const listFood = useSelector(({ firebase: { ordered: { Food } } }) => convertDataPicker(Food || []));
  const [plan, setPlan] = useState({
    titlePlan: '',
    date: new Date(),
    toggleAlarm: true,
    mealType: dataPickerMeal[0]?.value,
    recipe: [],
    note: '',
  });
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [isTimePickerVisible, setTimePickerVisible] = useState(false);
  const [error, setError] = useState({});
  const { id: planId } = navigation.state.params || {};
  const mealPlan = useSelector(({ firebase: { data: { Meal_Plan = {} } } }) => Meal_Plan[user.uid]?.[planId] || {});

  const setMealPlan = () => {
    const {
      title, date, isAlarm, meal, food, note,
    } = mealPlan;
    if (planId) {
      setPlan({
        titlePlan: title,
        date: new Date(date),
        toggleAlarm: isAlarm,
        mealType: meal,
        recipe: food,
        note,
      });
    }
  };

  useEffect(() => {
    setMealPlan();
  }, []);

  const handleDatePicked = (value) => {
    setPlan({
      ...plan,
      date: value,
    });
    setDatePickerVisible(false);
  };

  const handleTimePicked = (time) => {
    const hour = time.getHours();
    const minutes = time.getMinutes();
    plan.date.setHours(hour);
    plan.date.setMinutes(minutes);
    setTimePickerVisible(false);
  };

  const onChangeTypeMeal = (value) => {
    setPlan({
      ...plan,
      mealType: value,
    });
    setError({ ...error, typeMeal: '' });
  };

  const onValidateInput = () => {
    const err = { ...error };
    if (!plan.titlePlan) {
      err.title = 'Please enter title of the meal plan';
    }
    if (!plan.mealType) {
      err.mealType = 'Please choose your meal';
    }
    if (!plan.recipe.length) {
      err.recipe = 'Please choose your recipe';
    }
    return err;
  };

  const onCreatePlan = () => {
    const data = {
      title: plan.titlePlan,
      date: plan.date.getTime(),
      isAlarm: plan.toggleAlarm,
      food: plan.recipe,
      note: plan.note,
      createdAt: Date.now(),
      meal: plan.mealType,
    };
    firebase.push(`Meal_Plan/${user.uid}`, data);
    navigation.navigate('MealPlan');
  };

  const onEditPlan = () => {
    const data = {
      title: plan.titlePlan,
      date: plan.date.getTime(),
      isAlarm: plan.toggleAlarm,
      food: plan.recipe,
      note: plan.note,
      meal: plan.mealType,
    };
    firebase.update(`Meal_Plan/${user.uid}/${planId}`, data);
    navigation.navigate('PlanDetails', { isEdit: true, id: planId });
  };

  const onPressButton = () => {
    const err = onValidateInput();
    if (Object.values(err).filter((item) => item !== '').length) {
      setError(err);
      return;
    }
    if (planId) {
      onEditPlan();
    } else {
      onCreatePlan();
    }
  };

  const onChangeTitle = (text) => {
    setPlan({
      ...plan,
      titlePlan: text,
    });
    setError({ ...error, title: '' });
  };

  const onChangeRecipe = (value) => {
    setPlan({
      ...plan,
      recipe: value,
    });
    setError({ ...error, recipe: '' });
  };

  return (
    <View style={styles.main}>
      <Header
        onPressLeft={() => navigation.goBack()}
        iconLeft={images.ic_exist}
        rightText={planId ? 'Reset' : null}
        onPressRight={setMealPlan}
      />
      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior={isIOS ? 'height' : 'padding'}
        enabled={isIOS}
      >
        <ScrollView style={styles.container}>
          <CustomTextInput
            multiline
            title="Title of the meal plan"
            placeholder="Write your plan..."
            value={plan.titlePlan}
            onChangeText={(text) => onChangeTitle(text)}
            containerStyles={styles.containerTitle}
            titleStyles={styles.titleText}
            error={error.title}
          />
          {/* date time picker */}
          <View style={styles.viewDate}>
            <DatePicker
              title="Date"
              onPress={() => setDatePickerVisible(true)}
              value={moment(plan.date).format('DD MMMM, YYYY')}
              isVisible={isDatePickerVisible}
              onConfirm={handleDatePicked}
              onCancel={() => setDatePickerVisible(false)}
              mode="date"
              containerStyle={styles.pickerDate}
              date={plan.date}
            />
            <DatePicker
              title="Time"
              onPress={() => setTimePickerVisible(true)}
              value={moment(plan.date).format('LT')}
              isVisible={isTimePickerVisible}
              onConfirm={handleTimePicked}
              onCancel={() => setTimePickerVisible(false)}
              mode="time"
              date={plan.date}
            />
          </View>
          {/* alarm */}
          <View style={styles.alarm}>
            <Text style={styles.textAlarm}>
              Set Alarm to notify your meal plan
            </Text>
            <Switch
              value={plan.toggleAlarm}
              onValueChange={(value) => setPlan({ ...plan, toggleAlarm: value })}
              thumbColor="white"
              trackColor="#45db5e"
            />
          </View>
          {/* meal type picker */}
          <PickerSelect
            title="What's your meal?"
            onValueChange={(value) => onChangeTypeMeal(value)}
            value={plan.mealType}
            items={dataPickerMeal}
            containerStyle={styles.picker}
            error={error.mealType}
          />
          <MultiSelect
            title="Choose your recipe"
            items={listFood}
            uniqueKey="key"
            displayKey="label"
            onSelectedItemsChange={(value) => onChangeRecipe(value)}
            selectedItems={plan.recipe}
            containerStyle={styles.picker}
            error={error.recipe}
          />
          {/* notes */}
          <View style={styles.note}>
            <Text style={styles.textNote}>
              Note
              {' '}
              <Text style={styles.textOptional}>(Optional)</Text>
            </Text>
            <TextInput
              underlineColorAndroid="transparent"
              autofocus={false}
              multiline
              placeholder="Add any Additional information"
              style={styles.textNote}
              value={plan.note}
              onChangeText={(text) => setPlan({ ...plan, note: text })}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <Button
        buttonStyle={styles.btnCreate}
        title={!planId ? 'CREATE A PLAN' : 'SAVE'}
        onPress={onPressButton}
      />
    </View>
  );
};

export default CreatePlan;
