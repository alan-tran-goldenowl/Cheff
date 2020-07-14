import React, { useState } from 'react';
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

import Header from 'components/Header';
import DatePicker from 'components/DatePicker';
import PickerSelect from 'components/PickerSelect';
import Button from 'components/Button';
import CustomTextInput from 'components/TextInput';
import images from 'assets/images';
import { isIOS, convertDataPicker } from 'utils';

import styles from './styles';

const CreatePlan = ({ navigation }) => {
  const firebase = useFirebase();
  const user = firebase.auth().currentUser;
  useFirebaseConnect(['Type_Food', 'Food']);
  const typeFood = useSelector(({ firebase: { ordered: { Type_Food } } }) => convertDataPicker(Type_Food));
  const [titlePlan, setTitlePlan] = useState('');
  const [date, setDate] = useState(new Date());
  const [toggleAlarm, setToggleAlarm] = useState(true);

  const [mealType, setMealType] = useState(typeFood[0]?.value);
  const listFood = useSelector(({ firebase: { ordered: { Food } } }) => {
    const list = (Food || []).filter((item) => item?.value?.type === mealType);
    return convertDataPicker(list);
  });

  const [recipe, setRecipe] = useState('');
  const [note, setNote] = useState('');
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [isTimePickerVisible, setTimePickerVisible] = useState(false);
  const [error, setError] = useState({});

  const handleDatePicked = (value) => {
    setDate(value);
    setDatePickerVisible(false);
  };

  const handleTimePicked = (time) => {
    const hour = time.getHours();
    const minutes = time.getMinutes();
    date.setHours(hour);
    date.setMinutes(minutes);
    setTimePickerVisible(false);
  };

  const onChangeTypeMeal = (value) => {
    setMealType(value);
    setError({ ...error, typeMeal: '' });
  };

  const onValidateInput = () => {
    const err = { ...error };
    if (!titlePlan) {
      err.title = 'Please enter title of the meal plan';
    }
    if (!mealType) {
      err.mealtype = 'Please choose your meal';
    }
    if (!recipe) {
      err.recipe = 'Please choose your recipe';
    }
    return err;
  };

  const onCreatePlan = () => {
    const err = onValidateInput();
    if (Object.keys(err).filter((item) => !item).length) {
      setError(err);
      return;
    }
    const data = {
      title: titlePlan,
      date: date.getTime(),
      isAlarm: toggleAlarm,
      food: recipe,
      note,
      createdAt: Date.now(),
    };
    firebase.push(`Meal_Plan/${user.uid}`, data);
    navigation.navigate('MealPlan');
  };

  const onChangeTitle = (text) => {
    setTitlePlan(text);
    setError({ ...error, title: '' });
  };

  const onChangeRecipe = (value) => {
    setRecipe(value);
    setError({ ...error, recipe: '' });
  };

  return (
    <View style={styles.main}>
      <Header
        onPressLeft={() => navigation.goBack()}
        iconLeft={images.ic_exist}
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
            value={titlePlan}
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
              value={moment(date).format('DD MMMM, YYYY')}
              isVisible={isDatePickerVisible}
              onConfirm={handleDatePicked}
              onCancel={() => setDatePickerVisible(false)}
              mode="date"
              containerStyle={styles.pickerDate}
              date={date}
            />
            <DatePicker
              title="Time"
              onPress={() => setTimePickerVisible(true)}
              value={moment(date).format('LT')}
              isVisible={isTimePickerVisible}
              onConfirm={handleTimePicked}
              onCancel={() => setTimePickerVisible(false)}
              mode="time"
              date={date}
            />
          </View>
          {/* alarm */}
          <View style={styles.alarm}>
            <Text style={styles.textAlarm}>
              Set Alarm to notify your meal plan
            </Text>
            <Switch
              value={toggleAlarm}
              onValueChange={(value) => setToggleAlarm(value)}
              thumbColor="white"
              trackColor="#45db5e"
            />
          </View>
          {/* meal type picker */}
          <PickerSelect
            title="What's your meal?"
            onValueChange={(value) => onChangeTypeMeal(value)}
            value={mealType}
            items={typeFood}
            containerStyle={styles.picker}
            error={error.mealType}
          />
          <PickerSelect
            title="Choose your recipe"
            onValueChange={(value) => onChangeRecipe(value)}
            value={recipe}
            items={listFood}
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
              value={note}
              onChangeText={(text) => setNote(text)}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <Button
        buttonStyle={styles.btnCreate}
        title="CREATE A PLAN"
        onPress={onCreatePlan}
      />
    </View>
  );
};

export default CreatePlan;
