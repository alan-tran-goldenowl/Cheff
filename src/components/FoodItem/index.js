import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, Image as RNImage,
} from 'react-native';
import moment from 'moment';
import { Image } from 'react-native-expo-image-cache';

import styles from './styles';

class FoodItem extends Component {
  onPressLikeUnLike = () => {
  }

  render() {
    const {
      item: {
        like, favorite, name, imageLink, createdAt,
      },
    } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.itemFood} onPress={this.props.onPressItem}>
          <View style={styles.imageFood}>
            <Image
              style={styles.imageFoodCover}
              resizeMode="cover"
              uri={imageLink}
            />
          </View>
          <View style={styles.infomationFood}>
            <Text style={styles.foodName}>
              {name}
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
                  source={require('assets/images/ic_clock.png')}
                />
                <Text style={styles.timeStamp}>
                  {moment(createdAt).fromNow()}
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  flex: 1,
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={this.onPressLikeUnLike}
              >
                <Text style={styles.like}>
                  {like}
                </Text>
                <RNImage
                  style={styles.icon}
                  resizeMode="contain"
                  source={
                    favorite
                      ? require('assets/images/ic_love.png')
                      : require('assets/images/ic_nonlove.png')
                  }
                />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
        <View style={{ backgroundColor: '#dddddd', height: 1 }} />
      </View>
    );
  }
}

export default FoodItem;
