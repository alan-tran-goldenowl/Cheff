import React from 'react';
import {
  View, Text, TouchableOpacity, Image as RNImage,
} from 'react-native';
import { Image } from 'react-native-expo-image-cache';

import styles from '../styles/FoodItemStyle';

const FoodItem = props => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.itemFood}>
      <View style={styles.imageFood}>
        <Image
          style={styles.imageFoodCover}
          resizeMode="cover"
          uri={props.item.imageLink}
        />
      </View>
      <View style={styles.infomationFood}>
        <Text style={styles.foodName}>
          {props.item.name}
        </Text>
        <View style={{ flex: 5, flexDirection: 'row' }}>
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}
          >
            <RNImage
              style={styles.icon}
              resizeMode="contain"
              source={require('../assets/images/ic_clock.png')}
            />
            <Text style={styles.timeStamp}>
              {props.item.timeStamp}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            <Text style={styles.like}>
              {props.item.like}
            </Text>
            <RNImage
              style={styles.icon}
              resizeMode="contain"
              source={require('../assets/images/ic_love.png')}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
    <View style={{ backgroundColor: '#dddddd', height: 1 }} />
  </View>
);

export default FoodItem;
