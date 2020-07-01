import React from 'react';
import { FlatList } from 'react-native';

import FoodItem from '../FoodItem';

const Tab = ({ data }) => (
  <FlatList
    data={data}
    renderItem={({ item }) => (
      <FoodItem
        item={item}
        onPressItem={() => props.navigation.navigate('FoodDetail', { data: item })}
      />
    )}
    keyExtractor={item => String(item.key)}
  />
);

export default Tab;
