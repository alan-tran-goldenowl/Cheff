import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import { listIconPlan } from 'utils';
import SwipeRow from 'components/SwipeRow';
import moment from 'moment';
import styles from './styles';

const ListPlanItem = ({
  id,
  value: {
    date, title, note, meal, idWhatToBuy,
  },
  goToMealPlan,
  deleteMealPlan,
  editMealPlan,
}) => {
  const onGoToMealPlan = () => goToMealPlan(id);

  const showAlertDelete = () => {
    deleteMealPlan(id, idWhatToBuy);
  };

  const onEditMealPlan = () => {
    editMealPlan(id);
  };

  return (
    <SwipeRow
      listAction={[
        {
          text: 'Sửa',
          color: '#C8C7CD',
          action: onEditMealPlan,
          x: 192,
        },
        {
          text: 'Xóa',
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
              source={listIconPlan[meal]}
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
