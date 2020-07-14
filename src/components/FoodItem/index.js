import React from 'react';
import {
  View, Text, TouchableOpacity, Image as RNImage,
} from 'react-native';
import moment from 'moment';
import { Image } from 'react-native-expo-image-cache';
import { likeFood } from 'services';
import { useDispatch, useSelector } from 'react-redux';
import { FireBase } from 'constants';
import images from 'assets/images';

import styles from './styles';

const FoodItem = ({ item, keyFood, onPressItem }) => {
  const dispatch = useDispatch();
  const userFirebase = FireBase.auth().currentUser;

  const isLiked = useSelector(({ firebase: { ordered: { Favourites } } }) => {
    const listFavouritesOfUser = (Favourites || []).find(test => test.key === userFirebase.uid)?.value || {};

    return (listFavouritesOfUser && listFavouritesOfUser[keyFood]?.isLiked) || false;
  });

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

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.itemFood} onPress={onPressItem}>
        <View style={styles.imageFood}>
          <Image
            style={styles.imageFoodCover}
            resizeMode="cover"
            uri={item.imageLink}
          />
        </View>
        <View style={styles.infomationFood}>
          <Text style={styles.foodName}>
            {item.name}
          </Text>
          <View style={{ flex: 5, flexDirection: 'row' }}>
            <View
              style={styles.timeStampContainer}
            >
              <RNImage
                style={styles.icon}
                resizeMode="contain"
                source={images.ic_clock}
              />
              <Text style={styles.timeStamp}>
                {moment(item.createdAt).fromNow()}
              </Text>
            </View>
            <TouchableOpacity
              style={styles.likeContainer}
              onPress={onPressLikeUnLike}
            >
              <Text style={styles.like}>
                {item?.totalLikes || 0}
              </Text>
              <RNImage
                style={styles.icon}
                resizeMode="contain"
                source={
                  isLiked
                    ? images.ic_love
                    : images.ic_nonlove
                  }
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.line} />
    </View>
  );
};

export default FoodItem;
