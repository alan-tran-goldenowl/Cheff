import React, {useState, useEffect} from 'react';
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
import Icon from 'react-native-vector-icons/FontAwesome';

import _ from 'lodash';
import {useSelector, useDispatch} from 'react-redux';
import {addPlanTodo, updatePlanTodo} from 'services';

import {useFirebase} from 'react-redux-firebase';

import Header from 'components/Header';
import DatePicker from 'components/DatePicker';
import Button from 'components/Button';
import images from 'assets/images';

import ContainerInput from 'components/ContainerInput';
import {isIOS, uuid} from 'utils';

import styles from './styles';

const initDataTodo = {
  id: 1,
  text: '',
  isCompleted: false,
};

const CreatePlanToBuy = ({navigation}) => {
  const dispatch = useDispatch();
  const [plan, setPlan] = useState({
    title: '',
    date: new Date().getTime(),
    notes: '',
  });
  const {id: planId} = navigation.state.params || {};

  const firebase = useFirebase();
  const user = firebase.auth().currentUser;

  const oldPlan = useSelector(
    ({
      firebase: {
        data: {Plan_To_do = {}},
      },
    }) => Plan_To_do[user.uid]?.[planId] || {},
  );

  const [todoList, setTodoList] = useState([initDataTodo]);

  const [isDatePickerVisible, setDatePickerVisible] = useState(false);

  const [error, setError] = useState({});

  useEffect(() => {
    if (planId) {
      setPlan(oldPlan);
      setTodoList(oldPlan.todos);
    }
  }, [planId]);

  const handleDatePicked = value => {
    setDatePickerVisible(false);
    if (!value) {
      return;
    }
    setPlan({
      ...plan,
      date: value?.getTime(),
    });
  };

  const onValidateInput = () => {
    const err = {...error};
    if (!plan.title) {
      err.title = 'Please enter title of the plan';
    }
    return err;
  };

  const onSubmit = () => {
    const list = todoList.filter(item => item.text.length);
    if (list.length === 0) {
      Alert.alert('Cảnh báo', 'Bạn vui lòng tạo ít nhất một kế hoạch nấu ăn!');
      return;
    }
    const err = onValidateInput();
    if (Object.values(err).filter(item => item !== '').length) {
      setError(err);
      return;
    }

    const data = {
      ...plan,
      todos: list,
      userId: user.uid,
    };
    if (planId) {
      dispatch(updatePlanTodo({data, userId: user.uid, planId})).then(() => {
        navigation.goBack();
      });
    } else {
      dispatch(addPlanTodo({data, userId: user.uid})).then(() => {
        navigation.goBack();
      });
    }
  };

  const addMore = () => {
    setTodoList([
      ...todoList,
      {
        ...initDataTodo,
        id: uuid(todoList.length),
      },
    ]);
  };

  const onChangeTextTodo = _.debounce((id, text) => {
    const newList = todoList.map(item =>
      item.id === id ? {...item, text} : item,
    );
    setTodoList(newList);
  }, 500);

  const onChangeText = _.debounce((key, text) => {
    if (error[key]?.length) {
      const err = {...error};
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
        title="Tạo lịch"
      />
      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior={isIOS ? 'height' : 'padding'}
        enabled={isIOS}>
        <ScrollView style={styles.container}>
          <ContainerInput label="Tên" error={error.title}>
            <TextInput
              multiline
              defaultValue={plan.title}
              style={styles.containerTitle}
              placeholder="Nhập..."
              onChangeText={text => onChangeText('title', text)}
            />
          </ContainerInput>
          <ContainerInput label="Ngày thực hiện">
            <View style={styles.containerTitle}>
              <DatePicker
                onPress={() => setDatePickerVisible(true)}
                value={moment(plan.date).format('DD/MM/YYYY, hh:mm')}
                isVisible={isDatePickerVisible}
                onConfirm={handleDatePicked}
                onCancel={() => setDatePickerVisible(false)}
                mode="datetime"
                date={new Date(plan.date)}
                minimumDate={new Date()}
              />
            </View>
          </ContainerInput>

          <ContainerInput label="Ghi chú">
            <TextInput
              multiline
              defaultValue={plan.notes}
              style={{...styles.containerTitle, minHeight: 70}}
              placeholder="Ghi chú"
              onChangeText={text => onChangeText('notes', text)}
              error={error.notes}
            />
          </ContainerInput>

          <View style={{marginTop: 20}}>
            <Text style={{fontSize: 14}}>Danh sách việc cần làm</Text>
            <Text style={{fontSize: 12}}>
              Bạn cần tạo ít nhất một công việc
            </Text>
            <View style={styles.todo}>
              {todoList.map(e => (
                <View
                  key={e.id}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 10,
                  }}>
                  <TextInput
                    multiline
                    defaultValue={e.text}
                    onChangeText={text => onChangeTextTodo(e.id, text)}
                    style={{...styles.containerTitle, flex: 3}}
                    placeholder="Nhập..."
                  />
                  <TouchableOpacity onPress={() => onRemoveTodo(e.id)}>
                    <Icon
                      name="minus-circle"
                      size={20}
                      color="red"
                      style={{marginLeft: 15}}
                    />
                  </TouchableOpacity>
                </View>
              ))}
              <TouchableOpacity
                onPress={addMore}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 10,
                }}>
                <Icon
                  name="plus"
                  size={20}
                  color="blue"
                  style={{marginRight: 5}}
                />
                <Text style={{color: 'blue'}}>Thêm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <Button buttonStyle={styles.btnCreate} title="LƯU" onPress={onSubmit} />
    </View>
  );
};

export default CreatePlanToBuy;
