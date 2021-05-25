import React from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet,
} from 'react-native';
import { Image } from 'react-native-expo-image-cache';
import { responsive, device } from 'utils';
import Icon from '@expo/vector-icons/Entypo';
import { COLOR } from 'styles/theme';

const ItemMeal = ({ item, onPressItem }) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.content} onPress={onPressItem}>
      <Image style={styles.image} resizeMode="cover" uri={item?.cover} />
      <Text style={styles.name}>{item?.name}</Text>
      <View style={styles.row}>
        <Text style={{ color: COLOR.BLUE_COLOR }}>Xem chi tiết</Text>
        <Icon
          name="chevron-right"
          size={25}
          color={COLOR.BLUE_COLOR}
          style={styles.icon}
        />
      </View>

    </TouchableOpacity>

  </View>
);

const styles = StyleSheet.create({
  image: {
    width: device.width / 8,
    height: device.width / 8,
    borderRadius: 5,
    marginRight: responsive({ d: 20 }),
  },
  content: {
    paddingVertical: responsive({ d: 20 }),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: COLOR.BACKGROUND_SECONDARY_COLOR,
    paddingLeft: 10,
    marginTop: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  name: {
    fontSize: responsive({ f: 15 }),
    fontWeight: '500',
    flex: 3,
  },
  icon: {
    marginHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    marginLeft: 20,
    alignItems: 'center',
  },
});

export default ItemMeal;
