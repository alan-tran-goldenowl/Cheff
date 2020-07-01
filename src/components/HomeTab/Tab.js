import React from 'react';
import { FlatList } from 'react-native';

import FoodItem from '../FoodItem';

const Tab = ({ data, navigation }) => (
  <FlatList
    data={data}
    renderItem={({ item }) => (
      <FoodItem
        item={item}
        onPressItem={() => navigation.navigate('FoodDetail', { data: item })}
      />
    )}
    keyExtractor={item => String(item.key)}
    showsVerticalScrollIndicator={false}
  />
);

export default Tab;
