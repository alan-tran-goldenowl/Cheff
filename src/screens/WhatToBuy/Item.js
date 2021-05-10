import React from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import { COLOR } from 'styles/theme';
import ProgressBar from 'components/ProgressBar';


const ToDoItem = ({ item, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.container, {

    }]}
  >
    <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.notes}>{item.notes}</Text>
    <View style={{
      justifyContent: 'flex-start',
      marginTop: 10,
    }}
    >
      <View style={styles.row}>
        <Text style={styles.status}>2 of 10 completed</Text>
        <Text style={styles.percent}>100%</Text>

      </View>

      <ProgressBar key="test" bgcolor="red" completed={70} />

    </View>


  </TouchableOpacity>
);


const styles = StyleSheet.create({

  container: {
    backgroundColor: COLOR.WHITE_COLOR,
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomColor: COLOR.BORDER_COLOR,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  notes: {
    marginBottom: 10,
  },
  status: {
    fontSize: 12,
  },
  percent: {
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});


export default withNavigation(ToDoItem);
