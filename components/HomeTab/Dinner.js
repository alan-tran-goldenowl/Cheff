import React from 'react';
import { FlatList } from 'react-native';

import FoodItem from '../FoodItem';

const Dinner = props => (
  <FlatList
    data={props.dinnerFoods}
    renderItem={({ item }) => <FoodItem item={item} />}
    keyExtractor={item => String(item.key)}
  />
);

export default Dinner;
