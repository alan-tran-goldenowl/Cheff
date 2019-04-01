import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import SearchViewCheff from '../components/SearchViewCheff';
import recommend from '../assets/fakeDatas/recommend';
import FoodItem from '../components/FoodItem';
import styles from '../styles/FavoriteStyle';

export default class FavoriteScreen extends Component {
  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <View style={styles.header}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Settings')}>
              <Image
                style={styles.icon}
                resizeMode="center"
                source={require('../assets/images/icon_side_menu.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 8, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.title}>Favorites</Text>
          </View>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Settings')}>
              <Image
                style={styles.icon}
                resizeMode="center"
                source={require('../assets/images/ic_push_notification.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.searchView}>
          <SearchViewCheff
            moveToSeacrh={() => this.props.navigation.navigate('Search')}
          />
        </View>
        <FlatList
          data={recommend}
          renderItem={({ item }) => <FoodItem item={item} />}
          keyExtractor={item => String(item.key)}
        />
      </View>
    );
  }
}
