import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Switch
} from 'react-native';
import AntIcon from '@expo/vector-icons/AntDesign';
import moment from 'moment';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';

import Header from 'components/Header';
import DatePicker from 'components/DatePicker';
import PickerSelect from 'components/PickerSelect';
import Button from 'components/Button';
import images from 'assets/images';
import { isIOS , convertDataPicker } from 'utils';

import styles from './styles';

const CreatePlan = ({ navigation, typeFood, listFood }) => {

  const [titlePlan, setTitlePlan] = useState('');
  const [date, setDate] = useState(new Date());
  const [toggleAlarm, setToggleAlarm] = useState(true);
  const [mealType, setMealType] = useState(typeFood[0].value);
  const [recipe, setRecipe] = useState(1);
  const [note, setNote] = useState('');
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [isTimePickerVisible, setTimePickerVisible] = useState(false);

  const handleDatePicked = (date) => {
    setDate(date);
    setDatePickerVisible(false);
  };

  const handleTimePicked = (time) => {
    const hour = time.getHours();
    const minutes = time.getMinutes();
    date.setHours(hour);
    date.setMinutes(minutes);
    setTimePickerVisible(false);
  }

  const gotoListPlanScreen = () => {
    const { data } = navigation.state.params || {};
    navigation.navigate(data ? 'PlanDetails' : 'MealPlan', {
      message: data ? 'edit' : 'add',
    });
  }

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
          <Text style={styles.titleText}>Title of the meal plan</Text>
          <TextInput
            underlineColorAndroid="transparent"
            autofocus={false}
            multiline
            placeholder="Write your plan..."
            style={styles.text}
            value={titlePlan}
            onChangeText={text => setTitlePlan(text)}
          />
          {/* date time picker */}
          <View style={styles.viewDate}>
            <DatePicker
              title='Date'
              onPress={() => setDatePickerVisible(true)}
              value={moment(date).format('DD MMMM, YYYY')}
              isVisible={isDatePickerVisible}
              onConfirm={handleDatePicked}
              onCancel={() => setDatePickerVisible(false)}
              mode='date'
              containerStyle={styles.pickerDate}
              date={date}
            />
            <DatePicker
              title='Time'
              onPress={() => setTimePickerVisible(true)}
              value={moment(date).format('LT')}
              isVisible={isTimePickerVisible}
              onConfirm={handleTimePicked}
              onCancel={() => setTimePickerVisible(false)}
              mode='time'
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
              trackColor='#45db5e'
            />
          </View>
          {/* meal type picker */}
          <PickerSelect
            title="What's your meal?"
            onValueChange={(value) => setMealType(value)}
            value={mealType}
            items={typeFood}
            containerStyle={styles.picker}
          />
          <PickerSelect
            title='Choose your recipe'
            onValueChange={(value) => setRecipe(value)}
            value="-1"
            items={[
              { label: 'Vegetarian Fried Rice', value: '1' },
              { label: 'Hot dog', value: '2' },
              { label: 'Grab Soup', value: '3' },
            ]}
            containerStyle={styles.picker}
          />
          {/* notes */}
          <View style={styles.note}>
            <Text style={styles.textNote}>Note{' '}
              <Text style={styles.textOptional}>(Optional)</Text>
            </Text>
            <TextInput
              underlineColorAndroid="transparent"
              autofocus={false}
              multiline
              placeholder="Add any Additional information"
              style={styles.textNote}
              value={note}
              onChangeText={text => setNote(text)}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <Button
        buttonStyle={styles.btnCreate}
        title='CREATE A PLAN'
        onPress={gotoListPlanScreen}
      />
    </View>
  );
}

const enhance = compose(
  firebaseConnect(['Type_Food', 'Food']),
  connect(({ firebase: { ordered: { Type_Food, Food } } }) => ({
    typeFood: convertDataPicker(Type_Food),
    listFood: convertDataPicker(Food),
  }))
)

export default enhance(CreatePlan);
