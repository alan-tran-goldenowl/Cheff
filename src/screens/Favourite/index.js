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

  const listFavouritesOfUser = useSelector(({ firebase: { data: { Favourites } } }) => {
    const list = (Favourites && Favourites[userFirebase.uid]) || {};
    return list;
  });

  const listFavoriteFood = useSelector(({ firebase: { ordered: { Food } } }) => {
    const list = (Food || [])
      .filter(
        item => (
          Object.prototype.hasOwnProperty.call(listFavouritesOfUser, item.key)
        && listFavouritesOfUser[item.key].isLiked
        ),
      );
    return list;
  });

  return (
    <View style={styles.container}>
      <Header
        iconLeft={images.icon_side_menu}
        onPressLeft={() => navigation.navigate('Settings')}
        // iconRight={images.ic_push_notification}
        onPressRight={() => {}}
        title="Favorites"
      />
      <View style={styles.searchView}>
        <SearchViewCheff
          moveToSeacrh={() => navigation.navigate('Search', {
            data: listFavoriteFood,
          })}
          pointerEvents="none"
          editable={false}
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
