import React from 'react';
import {
  View, Image, TextInput, TouchableWithoutFeedback,
} from 'react-native';

import styles from '../styles/SearchiewCheffStyle';

const SearchiewCheff = props => (
  <TouchableWithoutFeedback onPress={props.moveToSeacrh}>
    <View style={styles.search}>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image
          style={styles.iconSearch}
          resizeMode="center"
          source={require('../assets/images/ic_search.png')}
        />
      </View>
      <View style={{ display: 'flex', justifyContent: 'center' }}>
        <TextInput
          underlineColorAndroid="transparent"
          autofocus={false}
          editable={false}
          placeholder="Search your recipes..."
          style={styles.text}
        />
      </View>
    </View>
  </TouchableWithoutFeedback>
);

export default SearchiewCheff;
