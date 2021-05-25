import React, { useRef } from 'react';
import {
  View, Text, TouchableOpacity, Alert,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import ProgressBar from 'components/ProgressBar';
import Icon from '@expo/vector-icons/Entypo';
import RBSheet from 'react-native-raw-bottom-sheet';
import { deletePlanToBuy } from 'services';
import { useDispatch } from 'react-redux';
import { FireBase } from 'constants';
import styles from './styles';

const ToDoItem = ({ item, onPress, navigation }) => {
  const bottomSheetRef = useRef();
  const dispatch = useDispatch();
  const userFirebase = FireBase.auth().currentUser;


  const getProgress = () => {
    const lengthAll = item.todos.length;
    const lengthCompleted = item.todos?.filter(data => data.isCompleted).length;
    return {
      all: lengthAll,
      completed: lengthCompleted,
      percent: (lengthCompleted / lengthAll).toFixed(1) * 100,
    };
  };

  const onDelete = () => {
    Alert.alert(
      'Nhắc nhở',
      'Bạn chắc chắn muốn xóa ? ',
      [
        {
          text: 'Bỏ',
          style: 'cancel',
        },
        { text: 'Xóa', onPress: () => dispatch(deletePlanToBuy({ userId: userFirebase.uid, planId: item.id })) },
      ],
    );
  };

  const onEdit = () => {
    bottomSheetRef?.current?.close();
    navigation.navigate('CreatePlanToBuy', { id: item.id });
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
    >
      <View style={styles.row}>
        <Text style={styles.title}>{item.title}</Text>
        <TouchableOpacity onPress={() => bottomSheetRef?.current?.open()}>
          <Icon name="dots-three-horizontal" size={20} />
        </TouchableOpacity>
      </View>
      <Text style={styles.notes}>{item.notes}</Text>
      <View style={{
        justifyContent: 'flex-start',
        marginTop: 10,
      }}
      >
        <View style={{ ...styles.row, marginBottom: 5 }}>
          <Text style={styles.status}>
            {getProgress().completed}
            {' '}
            trong
            {' '}
            {getProgress().all}
            {' '}
            hoàn thành
          </Text>
          <Text style={styles.percent}>
            {getProgress().percent}
            %
          </Text>
        </View>

        <ProgressBar key="test" completed={getProgress().percent} />

      </View>

      <RBSheet
        ref={
          bottomSheetRef
        }
        closeOnDragDown
        duration={250}
      >
        <View style={styles.listContainer}>
          <Text style={styles.listTitle}>Hành động</Text>
          <TouchableOpacity
            key="edit"
            style={styles.listButton}
            onPress={onEdit}
          >
            <Icon name="edit" style={styles.listIcon} />
            <Text style={styles.listLabel}>Sửa</Text>
          </TouchableOpacity>
          <TouchableOpacity
            key="Delete"
            style={styles.listButton}
            onPress={onDelete}
          >
            <Icon name="trash" style={styles.listIcon} />
            <Text style={styles.listLabel}>Xóa</Text>
          </TouchableOpacity>
          <TouchableOpacity
            key="Cancel"
            style={styles.listButton}
            onPress={() => bottomSheetRef?.current?.close()}
          >
            <Icon name="cross" style={styles.listIcon} />
            <Text style={styles.listLabel}>Bỏ qua</Text>
          </TouchableOpacity>
        </View>
      </RBSheet>
    </TouchableOpacity>
  );
};


export default withNavigation(ToDoItem);
