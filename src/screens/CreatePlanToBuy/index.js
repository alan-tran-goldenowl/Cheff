import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import moment from 'moment';
import Icon from '@expo/vector-icons/FontAwesome';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { addPlanTodo } from 'services';

import { useFirebase } from 'react-redux-firebase';

import Header from 'components/Header';
import DatePicker from 'components/DatePicker';
import Button from 'components/Button';
import images from 'assets/images';

import ContainerInput from 'components/ContainerInput';
import {
  isIOS,
  uuid,
} from 'utils';

import styles from './styles';

const initDataTodo = {
  id: 1,
  text: '',
  isCompleted: false,
};

const CreatePlanToBuy = ({ navigation }) => {
  const dispatch = useDispatch();
  const [plan, setPlan] = useState({
    title: '',
    date: new Date(),
    notes: '',
  });
  const { id: planId } = navigation.state.params || {};


  const firebase = useFirebase();
  const user = firebase.auth().currentUser;

  const oldPlan = useSelector(
    ({
      firebase: {
        data: { Plan = {} },
      },
    }) => Plan[user.uid]?.[planId] || {},
  );


  const [todoList, setTodoList] = useState([initDataTodo]);

  const [isDatePickerVisible, setDatePickerVisible] = useState(false);

  const [error, setError] = useState({});

  useEffect(() => {}, []);

  const handleDatePicked = value => {
    setPlan({
      ...plan,
      date: value,
    });
    setDatePickerVisible(false);
  };

  const onValidateInput = () => {
    const err = { ...error };
    if (!plan.title) {
      err.title = 'Please enter title of the plan';
    }
    return err;
  };

  const onSubmit = () => {
    const list = todoList.filter(item => item.text.length);
    if (list.length === 0) {
      Alert.alert('Warning', 'You have to create at least one task that you want to do');
      return;
    }
    const err = onValidateInput();
    if (Object.values(err).filter(item => item !== '').length) {
      setError(err);
      return;
    }

    const data = {
      ...plan,
      date: plan.date.getTime(),
      todos: list,
      userId: user.uid,
    };

    dispatch(addPlanTodo({ data, userId: user.uid }));
  };

  const addMore = () => {
    setTodoList([
      ...todoList,
      {
        ...initDataTodo,
        id: uuid(todoList.length),
      }]);
  };

  const onChangeTextTodo = _.debounce((id, text) => {
    const newList = todoList.map(item => (item.id === id ? { ...item, text } : item));
    setTodoList(newList);
  }, 500);

  const onChangeText = _.debounce((key, text) => {
    if (error[key]?.length) {
      const err = { ...error };
      err[key] = '';
      setError(err);
    }

    const newPlan = plan;
    newPlan[key] = text;
    setPlan(newPlan);
  }, 500);

  const onRemoveTodo = id => {
    if (todoList.length === 1) {
      return;
    }
    const newList = todoList.filter(i => i.id !== id);
    setTodoList(newList);
  };


  return (
    <View style={styles.main}>
      <Header
        iconLeft={images.icon_back}
        onPressLeft={() => navigation.goBack()}
        title="Create a plan"
      />
      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior={isIOS ? 'height' : 'padding'}
        enabled={isIOS}
      >
        <ScrollView style={styles.container}>
          <ContainerInput
            label="Plan name"
            error={error.title}
          >
            <TextInput
              multiline
              style={styles.containerTitle}
              placeholder="Type something"
              onChangeText={text => onChangeText('title', text)}
            />
          </ContainerInput>
          <ContainerInput label="Date">
            <View
              style={styles.containerTitle}
            >
              <DatePicker
                onPress={() => setDatePickerVisible(true)}
                value={moment(plan.date).format('DD MMMM, YYYY hh:mm')}
                isVisible={isDatePickerVisible}
                onConfirm={handleDatePicked}
                onCancel={() => setDatePickerVisible(false)}
                mode="datetime"
                date={plan.date}
                minimumDate={new Date()}
              />
            </View>
          </ContainerInput>

          <ContainerInput label="Notes">
            <TextInput
              multiline
              style={{ ...styles.containerTitle, minHeight: 70 }}
              placeholder="Notes"
              onChangeText={text => onChangeText('notes', text)}
              error={error.notes}
            />
          </ContainerInput>


          <View style={{ marginTop: 20 }}>
            <Text style={{ fontSize: 14 }}>Todo List</Text>
            <Text style={{ fontSize: 12 }}>You have to create at least one task that you want to do</Text>
            <View style={styles.todo}>
              {
                todoList.map(e => (
                  <View key={e.id} style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                    <TextInput
                      multiline
                      onChangeText={text => onChangeTextTodo(e.id, text)}
                      style={{ ...styles.containerTitle, flex: 3 }}
                      placeholder="Type something ..."
                    />
                    <TouchableOpacity
                      onPress={() => onRemoveTodo(e.id)}
                    >
                      <Icon
                        name="minus-circle"
                        size={20}
                        color="red"
                        style={{ marginLeft: 15 }}
                      />
                    </TouchableOpacity>

                  </View>
                ))
              }
              <TouchableOpacity
                onPress={addMore}
                style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}
              >
                <Icon
                  name="plus"
                  size={20}
                  color="blue"
                  style={{ marginRight: 5 }}
                />
                <Text style={{ color: 'blue' }}>
                  Add more
                </Text>

              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <Button
        buttonStyle={styles.btnCreate}
        title={!planId ? 'CREATE A PLAN' : 'SAVE'}
        onPress={onSubmit}
      />
    </View>
  );
};

export default CreatePlanToBuy;
