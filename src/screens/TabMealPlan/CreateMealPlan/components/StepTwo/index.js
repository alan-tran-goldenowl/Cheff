import React, { memo, useState } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import { responsive } from 'utils';
import { COLOR } from 'styles/theme';
import Icon from '@expo/vector-icons/FontAwesome';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import MealPlan from '../MealPlan';

const StepTwo = ({
  isVisible,
  plan,
  onSelectDate,
  onSelectType,
  onSelectFood,
}) => {
  const [isVisibleModal, setVisibleModal] = useState(false);

  const showHideModal = () => setVisibleModal(!isVisibleModal);

  const handleSelectDate = date => {
    showHideModal();

    onSelectDate(date);
  };

  return isVisible ? (
    <View style={styles.container}>
      <Text style={styles.title}>Cài đặt ngày giờ</Text>
      <View style={styles.spaceSmall} />
      <TouchableOpacity
        onPress={showHideModal}
        style={[
          styles.row,
          { borderWidth: 0.2, borderColor: COLOR.BORDER_COLOR, overflow: 'hidden' },
        ]}
      >
        <View style={[styles.row, styles.picker, styles.left]}>
          <Icon name="calendar" size={30} color={COLOR.WHITE_COLOR} />
          <View>
            <Text style={[styles.pickerTitle, styles.leftContent]}>
              Chọn ngày
            </Text>
            <Text style={[styles.pickerValue, styles.leftContent]}>
              {moment(plan.date).format('DD MMM YYYY')}
            </Text>
          </View>
        </View>
        <View style={styles.flagBottom} />
        <View style={[styles.row, styles.picker]}>
          <Icon name="clock-o" size={30} />
          <View>
            <Text style={styles.pickerTitle}>Chọn giờ</Text>
            <Text style={styles.pickerValue}>
              {moment(plan.date).format('hh:mm')}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.spaceSmall} />

      <MealPlan
        plan={plan}
        onSelectType={onSelectType}
        onSelectFood={onSelectFood}
      />
      <DateTimePicker
        display="spinner"
        isVisible={isVisibleModal}
        onConfirm={handleSelectDate}
        onCancel={showHideModal}
        mode="datetime"
        is24Hour={false}
      />
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  container: {},
  containerTitle: {
    borderWidth: 0.2,
    borderColor: COLOR.BORDER_COLOR,
    paddingVertical: responsive({ d: 10 }),
    paddingHorizontal: responsive({ d: 10 }),
    borderRadius: 3,
    fontSize: 14,
  },
  title: {
    fontSize: responsive({ f: 18 }),
    fontWeight: '700',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  picker: {
    flex: 3,
    justifyContent: 'space-around',
    paddingVertical: responsive({ d: 40 }),
    paddingHorizontal: responsive({ d: 10 }),
    borderRadius: 5,
    alignItems: 'center',
  },
  pickerTitle: {
    fontSize: 12,
    marginBottom: 10,
  },
  pickerValue: {
    fontSize: 16,
    fontWeight: '600',
  },
  flagBottom: {
    position: 'absolute',
    alignSelf: 'center',
    width: 0,
    height: 0,
    marginLeft: 5,
    borderLeftWidth: 15,
    borderLeftColor: COLOR.BLUE_COLOR,
    borderTopWidth: 70,
    borderTopColor: 'transparent',
    borderBottomWidth: 70,
    backgroundColor: 'white',
    borderBottomColor: 'transparent',
  },
  left: {
    backgroundColor: COLOR.BLUE_COLOR,
  },
  leftContent: {
    backgroundColor: COLOR.BLUE_COLOR,
    color: COLOR.WHITE_COLOR,
  },
  spaceSmall: {
    height: 20,
  },
});

export default memo(StepTwo);
