import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, Image as RNImage,
} from 'react-native';
import { Image } from 'react-native-expo-image-cache';
import lodash from 'lodash';

import styles from '../styles/FoodItemStyle';
import { connect, dispatch } from '../recontext/store';
import { actionTypes } from '../recontext/actions';

class FoodItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLike: props.item.favorite,
      likeNumber: props.item.like,
    };
  }

  onPressLikeUnLike = () => {
    this.setState(prevState => ({
      isLike: !prevState.isLike,
      likeNumber: prevState.isLike ? prevState.likeNumber - 1 : prevState.likeNumber + 1,
    }), () => {
      const arrayFood = this.props.listFood;
      const newItem = {
        ...this.props.item,
        favorite: this.state.isLike,
        like: this.state.likeNumber,
      };
      const index = lodash.findIndex(arrayFood, { key: this.props.item.key });
      arrayFood.splice(index, 1, newItem);
      dispatch(actionTypes.setListFood, arrayFood);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.itemFood} onPress={this.props.onPressItem}>
          <View style={styles.imageFood}>
            <Image
              style={styles.imageFoodCover}
              resizeMode="cover"
              uri={this.props.item.imageLink}
            />
          </View>
          <View style={styles.infomationFood}>
            <Text style={styles.foodName}>
              {this.props.item.name}
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
                  {this.props.item.timeStamp}
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
                  {this.state.likeNumber}
                </Text>
                <RNImage
                  style={styles.icon}
                  resizeMode="contain"
                  source={
                    this.state.isLike
                      ? require('../assets/images/ic_love.png')
                      : require('../assets/images/ic_nonlove.png')
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

const mapStateToProps = state => ({
  listFood: state.listFood,
});

export default connect(mapStateToProps)(FoodItem);
