import React from 'react';
import { FlatList } from 'react-native';

import FoodItem from '../FoodItem';

const Recommend = props => (
  <FlatList
    data={props.recommendFoods}
    renderItem={({ item }) => (
      <FoodItem
        item={item}
        onPressItem={() => props.navigation.navigate('FoodDetail', { data: item })}
      />
    )}
    keyExtractor={item => String(item.key)}
  />
);

export default Recommend;
