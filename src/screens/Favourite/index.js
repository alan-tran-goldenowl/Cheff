import React from 'react';
import { View, FlatList } from 'react-native';

import SearchViewCheff from 'components/SearchViewCheff';
import FoodItem from 'components/FoodItem';
import Header from 'components/Header';
import { FireBase } from 'constants';
import { useSelector } from 'react-redux';
import images from 'assets/images';
import styles from './styles';

const FavoriteScreen = ({ navigation }) => {
  const userFirebase = FireBase.auth().currentUser;

  const listFavouritesOfUser = useSelector(({ firebase: { ordered: { Favourites } } }) => {
    const list = (Favourites || []).find(item => item.key === userFirebase.uid)?.value || {};
    return list;
  });

  const listFavoriteFood = useSelector(({ firebase: { ordered: { Food } } }) => {
    const list = (Food || []).filter(item => Object.prototype.hasOwnProperty.call(listFavouritesOfUser, item.key));
    return list;
  });

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <Header
        iconLeft={images.icon_side_menu}
        onPressLeft={() => navigation.navigate('Settings')}
        iconRight={images.ic_push_notification}
        onPressRight={() => {}}
        title="Favorites"
      />
      <View style={styles.searchView}>
        <SearchViewCheff
          moveToSeacrh={() => navigation.navigate('Search', {
            data: listFavoriteFood,
          })}
          pointerEvents="none"
        />
      </View>
      <FlatList
        data={listFavoriteFood}
        renderItem={({ item }) => (
          <FoodItem
            item={item.value}
            keyFood={item.key}
            onPressItem={() => navigation.navigate('FoodDetail', { key: item.key })}
          />
        )}
        keyExtractor={item => String(item.key)}
      />
    </View>
  );
};


export default FavoriteScreen;
