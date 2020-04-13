import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Image } from 'react-native-expo-image-cache';

import styles from './styles';

const SearchItem = props => (
  <View style={styles.containerSearch}>
    <TouchableOpacity style={styles.imageFoodSearch} onPress={props.onPressItem}>
      <Image style={styles.imageFoodCoverSearch} resizeMode="cover" uri={props.item.imageLink} />
      <Text style={styles.foodNameSearch}>{props.item.name}</Text>
    </TouchableOpacity>
    <View style={{ backgroundColor: '#dddddd', height: 1 }} />
  </View>
);

export default SearchItem;
