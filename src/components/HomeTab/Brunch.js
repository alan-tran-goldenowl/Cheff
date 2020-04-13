import React from 'react';
import { FlatList } from 'react-native';

import FoodItem from '../FoodItem';

const Brunch = props => (
  <FlatList
    data={props.brunchFoods}
    renderItem={({ item }) => (
      <FoodItem
        item={item}
        onPressItem={() => props.navigation.navigate('FoodDetail', { data: item })}
      />
    )}
    keyExtractor={item => String(item.key)}
  />
);

export default Brunch;
