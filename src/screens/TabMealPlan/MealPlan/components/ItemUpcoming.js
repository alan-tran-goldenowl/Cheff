import React, { memo } from 'react';
import {
  Text, TouchableOpacity, StyleSheet,
} from 'react-native';
import moment from 'moment';
import { device } from 'utils';
import { COLOR } from 'styles/theme';

const ItemUpcoming = ({ data, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <Text style={styles.dateText}>
      {moment(data.date).format('DD/MM HH:MM')}
    </Text>

    <Text style={{ fontWeight: 'bold' }}>{data.title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 20,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  dateText: {
    width: device.width / 5,
    fontSize: 18,
    color: COLOR.LIGHT_GRAY_COLOR,
    fontWeight: 'bold',
  },
});

export default memo(ItemUpcoming);
