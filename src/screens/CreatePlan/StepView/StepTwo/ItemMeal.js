import React from 'react';
import {Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {COLOR} from 'styles/theme';

const ItemMeal = ({onPressItem, item, isSelected}) => (
  <TouchableOpacity style={styles.inner} onPress={onPressItem}>
    <Image
      style={styles.image}
      resizeMode="cover"
      source={item.cover ? {uri: item.cover} : require('assets/icons/logo.png')}
    />
    <Text style={styles.name}>{item?.name}</Text>
    <Icon
      name={isSelected ? 'remove-circle' : 'remove-circle-outline'}
      size={25}
      color="red"
      style={styles.icon}
    />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
    borderWidth: 0.2,
    borderColor: COLOR.LIGHT_GRAY_COLOR,
  },
  inner: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 15,
    fontWeight: '500',
    color: COLOR.BLACK_COLOR,
    flex: 3,
  },
  icon: {
    marginHorizontal: 20,
  },
});

export default ItemMeal;
