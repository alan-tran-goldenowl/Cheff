import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import SwipeRow from 'components/SwipeRow';

import styles from './styles';

const icon = {
  lunch: require('assets/images/icon-lunch.png'),
  brunch: require('assets/images/icon-brunch.png'),
  dinner: require('assets/images/icon-dinner.png'),
  breakfast: require('assets/images/icon-breakfast.png'),
};

export default withNavigation(({
  id, time, type, title, description, navigation,
}) => {
  const goToMealPlan = () => navigation.navigate('PlanDetails', { id });

  const showAlertDelete = () => {
    Alert.alert(
      'Warning',
      'Are you want to delete this meal plan ?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('cancel'),
        },
        {
          text: 'Delete',
          onPress: () => console.log('delete'),
        },
      ],
    );
  };

  return (
    <SwipeRow
      listAction={[
        {
          text: 'Edit',
          color: '#C8C7CD',
          action: () => navigation.navigate('CreatePlan'),
          x: 192,
        },
        {
          text: 'Delete',
          color: '#dd2c00',
          action: showAlertDelete,
          x: 300,
        },
      ]}
    >
      <View style={styles.container}>
        <View style={styles.textViewTime}>
          <Text>
            {time}
          </Text>
        </View>
        <TouchableOpacity
          onPress={goToMealPlan}
          style={styles.touchable}
        >
          <View style={styles.iconView}>
            <Image
              source={icon[type]}
              resizeMode="center"
              style={styles.iconViewImage}
            />
          </View>
          <View style={styles.textViewSummary}>
            <Text>
              {title}
            </Text>
            <Text style={styles.textViewDescription}>
              {description}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SwipeRow>

  );
});
