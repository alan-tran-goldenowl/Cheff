import React from 'react';
import {
  View, Text, TouchableOpacity, Image as RNImage,
} from 'react-native';
import { Image } from 'react-native-expo-image-cache';
import { likeFood } from 'services';
import { useDispatch, useSelector } from 'react-redux';
import { FireBase } from 'constants';
import images from 'assets/images';

import styles from './styles';

const FoodItem = ({
  item, keyFood, onPressItem, isLastItem,
}) => {
  const dispatch = useDispatch();
  const userFirebase = FireBase.auth().currentUser;
  const isLiked = useSelector(
    ({
      firebase: {
        data: { Favourites },
      },
    }) => {
      const listFavouritesOfUser = (Favourites && Favourites[userFirebase.uid]) || {};

      return (
        (listFavouritesOfUser && listFavouritesOfUser[keyFood]?.isLiked)
        || false
      );
    },
  );

  const onPressLikeUnLike = () => {
    const params = {
      userId: userFirebase.uid,
      food: {
        key: keyFood,
        value: item,
      },
      like: !isLiked,
    };
    dispatch(likeFood(params));
  };

  const renderTags = itemFood => (
    <View style={styles.rowWrap}>
      {itemFood.tags?.map((food, index) => (
        <View key={index.toString()} style={styles.tagView}>
          <Text style={styles.tagText}>{food.toUpperCase()}</Text>
        </View>
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.itemFood} onPress={onPressItem}>
        <View style={styles.imageFood}>
          <Image
            style={styles.imageFoodCover}
            resizeMode="cover"
            uri={item.cover}
          />
        </View>
        <View style={styles.infomationFood}>
          <Text style={styles.foodName}>{item.name}</Text>
          {renderTags(item)}
          <View style={styles.footer}>
            <View style={styles.timeStampContainer}>
              <RNImage
                style={styles.icon}
                resizeMode="contain"
                source={images.ic_clock}
              />
              <Text style={styles.timeStamp}>
                {`${item.timecook / 60} phút`}
              </Text>
            </View>
            <TouchableOpacity
              style={styles.likeContainer}
              onPress={onPressLikeUnLike}
            >
              <Text style={styles.like}>{item?.totalLikes || 0}</Text>
              <RNImage
                style={styles.icon}
                resizeMode="contain"
                source={isLiked ? images.ic_love : images.ic_nonlove}
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
      {!isLastItem && <View style={styles.line} />}
    </View>
  );
};

export default FoodItem;
