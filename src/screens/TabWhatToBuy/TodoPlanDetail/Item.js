import React from 'react';
import {View, TouchableOpacity, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {responsive} from 'utils';
import {COLOR} from 'styles/theme';

const TodoItem = ({data, onPress, onChangeText}) => (
  <View key="e.id" style={styles.container}>
    <TouchableOpacity onPress={onPress}>
      <Icon
        name={data.isCompleted ? 'checkmark-circle' : 'ellipse-outline'}
        size={25}
        color={data.isCompleted ? COLOR.GREEN_COLOR : COLOR.BORDER_COLOR}
        style={styles.icon}
      />
    </TouchableOpacity>
    <View style={styles.item}>
      <TextInput
        multiline
        onChangeText={onChangeText}
        defaultValue={data.text}
        style={styles.todo}
        placeholder="Type something ..."
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center', marginTop: 10},
  icon: {
    marginRight: 15,
  },
  todo: {
    fontSize: 14,
    paddingTop: 0,
  },
  item: {
    borderWidth: 0.2,
    borderColor: COLOR.BORDER_COLOR,
    paddingVertical: responsive({d: 15}),
    paddingHorizontal: responsive({d: 15}),
    borderRadius: 3,
    fontSize: 14,
    flex: 3,
  },
});

export default TodoItem;
