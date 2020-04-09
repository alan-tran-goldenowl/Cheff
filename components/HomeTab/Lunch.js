import React from 'react';
import { FlatList } from 'react-native';

import FoodItem from '../FoodItem';

const Lunch = props => (
  <FlatList
    data={props.lunchFoods}
    renderItem={({ item }) => (
      <FoodItem
        item={item}
        onPressItem={() => props.navigation.navigate('FoodDetail', { data: item })}
      />
    )}
    keyExtractor={item => String(item.key)}
  />
);

export default Lunch;
