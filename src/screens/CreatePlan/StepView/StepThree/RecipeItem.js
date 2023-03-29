import React from 'react';
import {View, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const RecipeItem = ({
  id,
  name,
  amount,
  unit,
  onChangeTextTodo,
  onRemoveTodo,
}) => (
  <View
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 10,
    }}>
    <TextInput
      multiline
      defaultValue={name}
      onChangeText={text => onChangeTextTodo(id, text, 'name')}
      style={[styles.containerTitle, styles.flexOne]}
    />
    <TextInput
      keyboardType="number-pad"
      multiline
      defaultValue={amount?.toString()}
      onChangeText={text => onChangeTextTodo(id, text, 'amount')}
      style={[styles.containerTitle, styles.flexHalf]}
    />
    <TextInput
      multiline
      defaultValue={unit}
      onChangeText={text => onChangeTextTodo(id, text, 'unit')}
      style={[styles.containerTitle, styles.flexOne]}
    />
    <TouchableOpacity onPress={() => onRemoveTodo(id)}>
      <Icon
        name="minus-circle"
        size={20}
        color="red"
        style={{marginLeft: 15}}
      />
    </TouchableOpacity>
  </View>
);

export default RecipeItem;
