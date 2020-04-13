import React from 'react';
import { FlatList } from 'react-native';

import FoodItem from '../FoodItem';

const Breakfast = props => (
  <FlatList
    data={props.breakfastFoods}
    renderItem={({ item }) => (
      <FoodItem
        item={item}
        onPressItem={() => props.navigation.navigate('FoodDetail', { data: item })}
      />
    )}
    keyExtractor={item => String(item.key)}
  />
);

export default Breakfast;