import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AntIcon from '@expo/vector-icons/AntDesign';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import styles from './styles';

const ActivityItem = ({ item }) => (
  <TouchableOpacity style={styles.container}>
    {
          item.action === 1
            ? <AntIcon name="hearto" style={styles.icon} />
            : <SimpleLineIcons name="eye" style={styles.icon} />
    }
    <View style={styles.textContainer}>
      <Text style={styles.text}>
        You
        {' '}
        <Text style={{ fontWeight: 'bold' }}>liked</Text>
        {' '}
        {item.food}
      </Text>
      <Text style={styles.time}>
        {item.time}
      </Text>
    </View>
  </TouchableOpacity>
);

export default ActivityItem;
