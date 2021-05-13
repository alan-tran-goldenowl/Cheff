import React from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet,
} from 'react-native';
import { Image } from 'react-native-expo-image-cache';
import { responsive, device } from 'utils';
import Icon from '@expo/vector-icons/Ionicons';
import { COLOR } from 'styles/theme';

const SearchItem = props => (
  <View style={styles.containerSearch}>
    <TouchableOpacity style={styles.imageFoodSearch} onPress={props.onPressItem}>
      <Image style={styles.imageFoodCoverSearch} resizeMode="cover" uri={props?.item?.imageLink} />
      <Text style={styles.foodNameSearch}>{props?.item?.name}</Text>
      <Icon
        name={props.isSelected ? 'checkmark-circle' : 'ellipse-outline'}
        size={25}
        color={props.isSelected ? COLOR.GREEN_COLOR : COLOR.BORDER_COLOR}
        style={styles.icon}
      />
    </TouchableOpacity>
    <View style={{ backgroundColor: '#dddddd', height: 1 }} />

  </View>
);

const styles = StyleSheet.create({
  imageFoodCoverSearch: {
    width: device.width / 7,
    height: responsive({ h: 40 }),
    borderRadius: 5,
    marginRight: responsive({ d: 20 }),
  },
  imageFoodSearch: {
    paddingVertical: responsive({ d: 20 }),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerSearch: {
    flex: 1,
    backgroundColor: 'white',
    marginLeft: responsive({ d: 35 }),
  },
  foodNameSearch: {
    fontSize: responsive({ f: 17 }),
    fontWeight: '500',
    color: 'black',
    flex: 3,
  },
  icon: {
    marginRight: 20,
  },
});

export default SearchItem;
