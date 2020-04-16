import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  Switch,
  TextInput,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import RNPickerSelect from 'react-native-picker-select';
import Header from 'components/Header';
import AntIcon from '@expo/vector-icons/AntDesign';
import styles from './styles';


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

  constructor(props) {
    super(props);
    this.state = {
      recipe: 1,
      titlePlan: '',
      time: '2h30 PM',
      toggleAlarm: true,
      date: '2018-July-27',
      modeDateTime: 'date',
      mealType: 'breakfast',
      isDateTimePickerVisible: false,
    };
  }

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

  _gotoListPlanScreen = () => {
    const { data } = this.props.navigation.state.params || {};
    this.props.navigation.navigate(data ? 'PlanDetails' : 'MealPlan', {
      message: data ? 'edit' : 'add',
    });
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#FFF' }}>
        <Header
          onPressLeft={() => this.props.navigation.goBack()}
          iconLeft={require('assets/images/ic_exist.png')}
        />
        <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }} behavior={Platform.OS === 'ios' ? 'height' : 'padding'} enabled={Platform.OS === 'ios'}>
          <ScrollView style={styles.container}>
            {/* title */}
            <Text style={styles.titleText}>
              Title of the meal plan
            </Text>

            <TextInput
              underlineColorAndroid="transparent"
              autofocus={false}
              multiline
              placeholder="Write your plan..."
              style={[styles.text, { minHeight: '10%' }]}
              value={this.state.fullname}
            />
            {/* date time picker */}
            <View
              style={{
                marginTop: 20,
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
                  style={{
                    ...styles.picker, ...styles.hasBottomBorder,
                  }}
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
                      source={require('assets/images/ic_pulldown.png')}
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
                  style={{
                    ...styles.picker, ...styles.hasBottomBorder,
                  }}
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
                      source={require('assets/images/ic_pulldown.png')}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            {/* alarm */}
            <View style={{ flexDirection: 'row', height: 50, marginTop: 10 }}>
              <View
                style={{
                  flex: 6,
                  height: '100%',
                  marginLeft: 20,
                  justifyContent: 'center',
                }}
              >
                <Text style={{ fontSize: 13, color: 'gray' }}>
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
                  value={this.state.toggleAlarm}
                  onValueChange={(value) => this.setState({ toggleAlarm: value })}
                />
              </View>
            </View>
            {/* meal type picker */}
            <View style={{ ...styles.pickMealTypeView }}>
              <Text style={{ marginBottom: 10 }}>
                What's your meal?
              </Text>
              <View style={{
                border: 'none',
              }}
              >
                <RNPickerSelect
                  onValueChange={(value) => {
                    this.setState({ mealType: value });
                  }}
                  value="-1"
                  placeholder={{}}
                  Icon={() => <AntIcon name="down" />}
                  items={[
                    { label: 'Breakfast', value: 'breakfast' },
                    { label: 'Lunch', value: 'lunch' },
                    { label: 'Brunch', value: 'brunch' },
                    { label: 'Dinner', value: 'dinner' },
                  ]}
                />
              </View>

            </View>
            {/* recipe picker */}
            <View style={{ ...styles.pickMealTypeView }}>
              <Text style={{ marginBottom: 10 }}>
                Choose your recipe
              </Text>
              <View style={{
                border: 'none',
              }}
              >
                <RNPickerSelect
                  onValueChange={(value) => {
                    this.setState({ recipe: value });
                    console.log(value);
                  }}
                  value="-1"
                  placeholder={{}}
                  Icon={() => <AntIcon name="down" />}
                  items={[
                    { label: 'Vegetarian Fried Rice', value: '1' },
                    { label: 'Hot dog', value: '2' },
                    { label: 'Grab Soup', value: '3' },
                  ]}
                />
              </View>
            </View>
            {/* notes */}
            <View style={styles.note}>
              <Text style={{ marginBottom: 10 }}>
                Note
                {' '}
                <Text style={{ color: '#ddd' }}>
                  (Optional)
                </Text>
              </Text>
              <TextInput
                underlineColorAndroid="transparent"
                autofocus={false}
                multiline
                placeholder="Add any Additional information"
                style={{}}
                value={this.state.fullname}
              />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>

        {/* submit button */}
        <TouchableOpacity style={styles.buttonView} onPress={this._gotoListPlanScreen}>
          <Text style={styles.buttonText}>
            CREATE A PLAN
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
