import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import FoodItem from '../FoodItem';

const Tab = ({ navigation, typeId }) => {
  const listFood = useSelector(
    ({
      firebase: {
        ordered: { Food },
      },
    }) => {
      const list = (Food || []).filter(item => item?.value?.type === typeId);
      return list;
    },
  );

  return (
    <FlatList
      data={listFood}
      renderItem={({ item, index }) => (
        <FoodItem
          isLastItem={index === listFood.length - 1}
          item={item.value}
          keyFood={item.key}
          onPressItem={() => navigation.navigate('FoodDetail', { key: item.key })}
        />
      )}
      keyExtractor={item => String(item.key)}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default Tab;
