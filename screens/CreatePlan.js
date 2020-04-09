import React, { Component, Fragment } from 'react';
import {
  Text,
  View,
  Image,
  Picker,
  Switch,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';

import Header from '../components/Header';

import styles from '../styles/CreatePlanStyle';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export default class CreatePlan extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  state = {
    recipe: 1,
    titlePlan: '',
    time: '2h30 PM',
    toggleAlarm: true,
    date: '2018-July-27',
    modeDateTime: 'date',
    mealType: 'breakfast',
    isDateTimePickerVisible: false,
  };

  _showDateTimePicker = () => this.setState({
    modeDateTime: 'date',
    isDateTimePickerVisible: true,
  });

  _showTimePicker = () => this.setState({
    modeDateTime: 'time',
    isDateTimePickerVisible: true,
  });

  _hideDateTimePicker = () => this.setState({
    modeDateTime: 'time',
    isDateTimePickerVisible: false,
  });

  _handleDatePicked = (selectedDate) => {
    this.setState({
      date:
        `${selectedDate.getDate()
        } ${
          months[selectedDate.getMonth()]
        }, ${
          selectedDate.getFullYear()}`,
    });
    this._hideDateTimePicker();
  };

  render() {
    return (
      <Fragment>
        <ScrollView style={styles.container}>
          <Header
            onPressLeft={() => this.props.navigation.goBack()}
            iconLeft={require('../assets/images/ic_exist.png')}
          />
          {/* title */}
          <Text style={styles.titleText}>
          Title of the meal plan
          </Text>
          <TextInput
            underlineColorAndroid="transparent"
            autofocus={false}
            multiline
            placeholder="Write your plan..."
            style={styles.text}
            onChangeText={text => this.setState({ titlePlan: text })}
            value={this.state.fullname}
          />
          {/* date time picker */}
          <View
            style={{
              marginTop: 65,
              marginLeft: 20,
              marginRight: 20,
              flexDirection: 'row',
            }}
          >
            {/* date picker */}
            <View style={{ flex: 1, paddingRight: 20 }}>
              <Text style={{ flex: 1 }}>
              Date
              </Text>
              <TouchableOpacity
                onPress={this._showDateTimePicker}
                style={{ flexDirection: 'row', flex: 1, ...styles.hasBottomBorder }}
              >
                <Text style={{ flex: 5 }}>
                  {this.state.date}
                </Text>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                    flex: 2,
                  }}
                >
                  <Image
                    resizeMode="center"
                    style={{ height: 10, width: 10, marginRight: 20 }}
                    source={require('../assets/images/ic_pulldown.png')}
                  />
                </View>
              </TouchableOpacity>
              <DateTimePicker
                isVisible={this.state.isDateTimePickerVisible}
                onConfirm={this._handleDatePicked}
                onCancel={this._hideDateTimePicker}
                mode={this.state.modeDateTime}
                is24Hour={false}
              />
            </View>
            {/* time picker */}
            <View style={{ flex: 1, paddingLeft: 20 }}>
              <Text style={{ flex: 1 }}>
              Time
              </Text>
              <TouchableOpacity
                onPress={this._showTimePicker}
                style={{ flexDirection: 'row', flex: 1, ...styles.hasBottomBorder }}
              >
                <Text style={{ flex: 5 }}>
                  {this.state.time}
                </Text>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                    flex: 2,
                  }}
                >
                  <Image
                    resizeMode="center"
                    style={{ height: 10, width: 10, marginRight: 20 }}
                    source={require('../assets/images/ic_pulldown.png')}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          {/* alarm */}
          <View style={{ flexDirection: 'row', height: 50 }}>
            <View
              style={{
                flex: 6,
                height: '100%',
                marginLeft: 20,
                justifyContent: 'center',
              }}
            >
              <Text style={{ fontSize: 16 }}>
              Set Alarm to notify your meal plan
              </Text>
            </View>

            <View
              style={{
                flex: 3,
                height: '100%',
                marginRight: 20,
                alignItems: 'flex-end',
                justifyContent: 'center',
              }}
            >
              <Switch
                thumbColor="white"
                trackColor="#45db5e"
                value={this.state.toggleAlarm}
                onValueChange={value => this.setState({ toggleAlarm: value })}
              />
            </View>
          </View>
          {/* meal type picker */}
          <View style={{ ...styles.pickMealTypeView, ...styles.hasBottomBorder }}>
            <Text>
              What's your meal?
            </Text>
            <Picker
              style={styles.picker}
              selectedValue={this.state.mealType}
              onValueChange={(value) => {
                this.setState({ mealType: value });
              }}
            >
              <Picker.Item label="Breakfast" value="breakfast" />
              <Picker.Item label="Lunch" value="lunch" />
              <Picker.Item label="Brunch" value="brunch" />
              <Picker.Item label="Dinner" value="dinner" />
            </Picker>
          </View>
          {/* recipe picker */}
          <View style={{ ...styles.pickMealTypeView, ...styles.hasBottomBorder }}>
            <Text>
              Choose your recipe
            </Text>
            <Picker
              style={styles.picker}
              selectedValue={this.state.recipe}
              onValueChange={(value) => {
                this.setState({ recipe: value });
              }}
            >
              <Picker.Item label="Vegetarian Fried Rice" value="1" />
              <Picker.Item label="Hot dog" value="2" />
              <Picker.Item label="Grab Soup" value="3" />
            </Picker>
          </View>
          {/* notes */}

        </ScrollView>
        {/* submit button */}
        <TouchableOpacity style={styles.buttonView}>
          <Text style={styles.buttonText}>
            CREATE A PLAN
          </Text>
        </TouchableOpacity>
      </Fragment>
    );
  }
}
