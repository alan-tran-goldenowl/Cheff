import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';

import { onGetFoodByType } from 'actions/food';
import FoodItem from '../FoodItem';

const Tab = ({ navigation, getFood, listFood, typeId }) => {
  useEffect (() => {
    getFood(typeId);
  }, []);

  return (
    <FlatList
      data={listFood}
      renderItem={({ item }) => (
        <FoodItem
          item={item}
          onPressItem={() => navigation.navigate('FoodDetail', { data: item })}
        />
      )}
      keyExtractor={item => String(item.key)}
      showsVerticalScrollIndicator={false}
    />
  )
};

const mapStateToProps = ({ Food }, { typeId }) => ({
  listFood: Food[typeId],
});

const mapDispatchtoProps = (dispatch) => ({
  getFood: (typeId) => dispatch(onGetFoodByType(typeId)),
});

export default connect(mapStateToProps, mapDispatchtoProps)(Tab);
