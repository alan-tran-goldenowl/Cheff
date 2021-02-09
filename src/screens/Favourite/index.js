import React, { useState } from 'react';
import {
  View, FlatList, TouchableOpacity, Image,
} from 'react-native';

import SearchViewCheff from 'components/SearchViewCheff';
import FavoriteItem from 'components/FavoriteItem';
import FoodItem from 'components/FoodItem';
import Header from 'components/Header';
import { FireBase } from 'constants';
import { useSelector } from 'react-redux';
import images from 'assets/images';
import styles from './styles';

const FavoriteScreen = ({ navigation }) => {
  const userFirebase = FireBase.auth().currentUser;
  const [typeList, setTypeList] = useState(false);

  const listFavouritesOfUser = useSelector(
    ({
      firebase: {
        data: { Favourites },
      },
    }) => {
      const list = (Favourites && Favourites[userFirebase.uid]) || {};
      return list;
    },
  );
  const handleChangeTypeList = () => {
    setTypeList(!typeList);
  };
  const listFavoriteFood = useSelector(
    ({
      firebase: {
        ordered: { Food },
      },
    }) => {
      const list = (Food || []).filter(
        item => Object.prototype.hasOwnProperty.call(
          listFavouritesOfUser,
          item.key,
        ) && listFavouritesOfUser[item.key].isLiked,
      );
      return list;
    },
  );

  return (
    <View style={styles.container}>
      <Header
        iconLeft={images.icon_side_menu}
        onPressLeft={() => navigation.navigate('Settings')}
        // iconRight={images.ic_push_notification}
        // onPressRight={() => {}}
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
      <View style={styles.changeTypeListView}>
        <TouchableOpacity
          style={styles.changeTypeList}
          onPress={handleChangeTypeList}
        >
          <Image
            source={typeList ? images.ic_list_small : images.ic_list_large}
            style={styles.iconTypeList}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={listFavoriteFood}
        renderItem={({ item, index }) => (!typeList ? (
          <FavoriteItem
            isLastItem={index === listFavoriteFood.length - 1}
            item={item.value}
            keyFood={item.key}
            onPressItem={() => navigation.navigate('FoodDetail', { key: item.key })}
          />
        ) : (
          <FoodItem
            isLastItem={index === listFavoriteFood.length - 1}
            item={item.value}
            keyFood={item.key}
            onPressItem={() => navigation.navigate('FoodDetail', { key: item.key })}
          />
        ))}
        keyExtractor={item => String(item.key)}
      />
    </View>
  );
};

export default FavoriteScreen;
