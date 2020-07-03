import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';

import FoodItem from '../FoodItem';

const Tab = ({ navigation, listFood, typeId }) => {
  return (
    <FlatList
      data={listFood}
      renderItem={({ item }) => (
        <FoodItem
          item={item.value}
          onPressItem={() => navigation.navigate('FoodDetail', { data: item.value })}
        />
      )}
      keyExtractor={item => String(item.key)}
      showsVerticalScrollIndicator={false}
    />
  )
};

const enhance = compose(
  firebaseConnect(({ typeId }) => [
    { path: '/Food', storeAs: typeId, queryParams: [ 'orderByChild=type',  `equalTo=${typeId}`  ] }
  ]),
  connect(({ firebase }, { typeId }) => ({
    listFood: firebase.ordered[typeId] || [],
  }))
)

export default enhance(Tab);
