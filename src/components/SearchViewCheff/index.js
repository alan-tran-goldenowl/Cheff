import React from 'react';
import {View, Image, TextInput, TouchableWithoutFeedback} from 'react-native';

import styles from './styles';

const SearchiewCheff = props => (
  <TouchableWithoutFeedback onPress={props.moveToSeacrh}>
    <View style={[styles.search, props.overrideStyle]}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          style={styles.iconSearch}
          resizeMode="center"
          source={require('assets/images/ic_search.png')}
        />
      </View>
      <View
        style={{display: 'flex', justifyContent: 'center', minWidth: '70%'}}>
        <TextInput
          underlineColorAndroid="transparent"
          autofocus={props.autofocus}
          placeholder="Tìm kiếm món ăn..."
          style={styles.text}
          autoCorrect={false}
          {...props}
        />
      </View>
    </View>
  </TouchableWithoutFeedback>
);

export default SearchiewCheff;
