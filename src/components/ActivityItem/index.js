import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AntIcon from '@expo/vector-icons/AntDesign';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import moment from 'moment';
import { withNavigation } from 'react-navigation';
import styles from './styles';

const ActivityItem = ({ item, navigation }) => {
  const renderAction = () => {
    switch (item.action) {
      case 1: return 'liked';
      case 2: return 'unliked';
      case 3: return 'viewed';
      case 4: return 'created';
      case 5: return 'edited';
      case 6: return 'deleted';
      default: return 'viewed';
    }
  };

  const navigateAction = (routeName, params) => navigation.navigate({
    routeName,
    params,
  });

  const goToDetails = () => {
    switch (item.action) {
      case 1:
      case 2:
      case 3: return navigateAction('FoodDetail', { key: item.key, from: 'Activity' });
      case 4:
      case 5: return navigateAction('CreatePlan', { id: item.key });
      case 6: return 'deleted';
      default: return 'viewed';
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={goToDetails}>
      {
          item.action !== 3
            ? <AntIcon name="hearto" style={styles.icon} />
            : <SimpleLineIcons name="eye" style={styles.icon} />
    }
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          You
          {' '}
          <Text style={{ fontWeight: 'bold' }}>{renderAction()}</Text>
          {' '}
          {item.name}
          {' '}
          {(item.action === 4 || item.action === 5) && 'plan'}
        </Text>
        <Text style={styles.time}>
          {item.time}
          {moment(item.timeStamp * 1000).fromNow()}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default withNavigation(ActivityItem);
