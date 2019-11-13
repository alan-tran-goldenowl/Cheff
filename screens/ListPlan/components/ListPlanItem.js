import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { withNavigation } from 'react-navigation';

import styles from '../../../styles/ListPlanItemStyle';

const icon = {
  lunch: require('../../../assets/images/icon-lunch.png'),
  brunch: require('../../../assets/images/icon-brunch.png'),
  dinner: require('../../../assets/images/icon-dinner.png'),
  breakfast: require('../../../assets/images/icon-breakfast.png'),
};

export default withNavigation(({
  id, time, type, title, description, navigation,
}) => {
  const goToMealPlan = () => navigation.navigate('MealPlan', { id });

  return (
    <View
      style={styles.container}
    >
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
  );
});
