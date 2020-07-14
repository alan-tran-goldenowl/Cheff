import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import SwipeRow from 'components/SwipeRow';
import moment from 'moment';
import styles from './styles';

const ListPlanItem = ({
  key,
  value: {
    date, title, note,
  },
  icon,
  goToMealPlan,
  deleteMealPlan,
  editMealPlan,
}) => {
  const onGoToMealPlan = () => goToMealPlan(key);

  const showAlertDelete = () => {
    deleteMealPlan();
  };

  const onEditMealPlan = () => {
    editMealPlan();
  };

  return (
    <SwipeRow
      listAction={[
        {
          text: 'Edit',
          color: '#C8C7CD',
          action: onEditMealPlan,
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
          <Text style={styles.text}>
            {moment(date).format('LT')}
          </Text>
        </View>
        <TouchableOpacity
          onPress={onGoToMealPlan}
          style={styles.touchable}
        >
          <View style={styles.iconView}>
            <Image
              source={icon}
              resizeMode="center"
              style={styles.iconViewImage}
            />
          </View>
          <View style={styles.textViewSummary}>
            <Text style={styles.text}>
              {title}
            </Text>
            <Text style={styles.textViewDescription}>
              {note}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SwipeRow>

  );
};

export default ListPlanItem;
