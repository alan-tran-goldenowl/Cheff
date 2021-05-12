
import React, { memo, useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
} from 'react-native';
import images from 'assets/images';
import { withNavigation } from 'react-navigation';
import Header from 'components/Header';
import ProgressBar from 'components/ProgressBar';
import { useSelector, useDispatch } from 'react-redux';
import { FireBase } from 'constants';
import Button from 'components/Button';
import { updatePlanTodo } from 'services';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import _ from 'lodash';
import styles from './styles';
import TodoItem from './Item';


const TodoPlanDetail = memo(({ navigation }) => {
  const { id: planId } = navigation.state.params || {};
  const user = FireBase.auth().currentUser || {};
  const dispatch = useDispatch();

  const planDetail = useSelector(
    ({
      firebase: {
        ordered: { Plan_To_do },
      },
    }) => {
      const list = (Plan_To_do[user.uid] || []).filter(item => item?.key === planId);
      return list[0]?.value ?? {};
    },
  );

  const [listTodos, setListTodos] = useState([]);

  useEffect(() => {
    setListTodos(planDetail.todos);
  }, [planDetail]);

  const onChangeText = _.debounce((id, text) => {
    const newList = listTodos.map(item => (item.id === id ? { ...item, text } : item));
    setListTodos(newList);
  }, 500);

  const onCompleted = key => {
    const newData = listTodos.map(item => (item.id === key ? { ...item, isCompleted: !item.isCompleted } : item));
    setListTodos(newData);
  };

  const getProgress = () => {
    const lengthAll = listTodos?.length;
    const lengthCompleted = listTodos?.filter(item => item.isCompleted).length;
    return {
      all: lengthAll,
      completed: lengthCompleted,
      percent: (lengthCompleted / lengthAll).toFixed(1) * 100,
    };
  };

  const onSubmit = () => {
    const data = { ...planDetail, todos: listTodos };
    dispatch(
      updatePlanTodo({ data, userId: user.uid, planId }),
    ).then(() => navigation.goBack());
  };

  return (

    <View style={styles.container}>
      <Header
        iconLeft={images.icon_back}
        onPressLeft={() => navigation.goBack()}
        bigTitle={planDetail.title}
      />
      <View style={styles.containerProgress}>
        <View style={styles.row}>
          <Text style={styles.status}>
            {getProgress().completed}
            {' '}
            of
            {' '}
            {getProgress().all}
            {' '}
            completed
          </Text>
          <Text style={styles.percent}>
            {getProgress().percent}
            %
          </Text>
        </View>
        <ProgressBar
          completed={
            getProgress().percent
          }
        />
      </View>
      <KeyboardAwareScrollView>
        <View style={styles.containerInner}>
          <Text style={styles.title}>To do list</Text>
          <FlatList
            contentContainerStyle={{ flexGrow: 1 }}
            data={listTodos}
            renderItem={({ item }) => (
              <TodoItem
                data={item}
                onChangeText={text => onChangeText(item.id, text)}
                onPress={() => onCompleted(item.id)}
              />
            )}
            keyExtractor={item => item.id.toString()}
          />
        </View>
      </KeyboardAwareScrollView>
      <Button
        buttonStyle={styles.btnCreate}
        title="SUBMIT"
        onPress={onSubmit}
      />
    </View>
  );
});
export default withNavigation(TodoPlanDetail);
