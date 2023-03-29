import React from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import _ from 'lodash';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {uuid} from 'utils';

import styles from './styles';

const initDataTodo = {
  id: 1,
  text: '',
  isCompleted: false,
  name: '',
  amount: 1,
  unit: 'Phần',
};

const StepThree = ({isVisible, planToBuy, setPlanToBuy}) => {
  const addMore = () => {
    setPlanToBuy([
      ...planToBuy,
      {
        ...initDataTodo,
        id: uuid(planToBuy.length),
      },
    ]);
  };

  const onChangeTextTodo = _.debounce((id, text, type) => {
    const newList = planToBuy.map(item =>
      item.id === id ? {...item, [type]: text} : item,
    );
    setPlanToBuy(newList);
  }, 500);

  const onRemoveTodo = id => {
    if (planToBuy.length === 1) {
      return;
    }
    const newList = planToBuy.filter(i => i.id !== id);
    setPlanToBuy(newList);
  };

  return isVisible ? (
    <View style={styles.main}>
      <View style={{}}>
        <Text style={{fontSize: 18}}>Danh sách nguyên liệu cần chuẩn bị</Text>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Text style={[styles.fontWeight500, styles.flexOne]}>Tên</Text>
          <Text
            style={[
              styles.flexHalf,
              styles.fontWeight500,
              styles.marginLeftSmall,
            ]}>
            SL
          </Text>
          <Text
            style={[
              styles.flexOne,
              styles.fontWeight500,
              styles.marginLeftSmall,
            ]}>
            Đơn vị
          </Text>
          <Text style={{flex: 0.25}} />
        </View>
        <KeyboardAwareScrollView>
          <View style={styles.todo}>
            {planToBuy.map(e => (
              <View
                key={e.id}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 10,
                }}>
                <TextInput
                  multiline
                  defaultValue={e.name}
                  onChangeText={text => onChangeTextTodo(e.id, text, 'name')}
                  style={{...styles.containerTitle, flex: 1}}
                />
                <TextInput
                  keyboardType="number-pad"
                  multiline
                  defaultValue={e?.amount?.toString()}
                  onChangeText={text => onChangeTextTodo(e.id, text, 'amount')}
                  style={{...styles.containerTitle, flex: 0.5, marginLeft: 5}}
                />
                <TextInput
                  multiline
                  defaultValue={e.unit}
                  onChangeText={text => onChangeTextTodo(e.id, text, 'unit')}
                  style={{...styles.containerTitle, flex: 1, marginLeft: 5}}
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
            <TouchableOpacity onPress={addMore} style={styles.btnAddMore}>
              <Icon
                name="plus"
                size={20}
                color="blue"
                style={{marginRight: 5}}
              />
              <Text style={{color: 'blue'}}>Thêm</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </View>
  ) : (
    false
  );
};

export default StepThree;
