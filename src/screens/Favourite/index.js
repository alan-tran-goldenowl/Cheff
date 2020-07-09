import React, { Component } from 'react';
import { View, FlatList } from 'react-native';

import SearchViewCheff from 'components/SearchViewCheff';
import FoodItem from 'components/FoodItem';
import Header from 'components/Header';
import styles from './styles';

class FavoriteScreen extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  render() {
    const { listFavoriteFood=[] } = this.props;
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <Header
          iconLeft={require('assets/images/icon_side_menu.png')}
          onPressLeft={() => this.props.navigation.navigate('Settings')}
          iconRight={require('assets/images/ic_push_notification.png')}
          onPressRight={() => {}}
          title="Favorites"
        />
        <View style={styles.searchView}>
          <SearchViewCheff
            moveToSeacrh={() => this.props.navigation.navigate('Search', {
              data: listFavoriteFood,
            })}
            pointerEvents="none"
          />
        </View>
        <FlatList
          data={listFavoriteFood}
          renderItem={({ item }) => (
            <FoodItem
              item={item}
              onPressItem={() => this.props.navigation.navigate('FoodDetail', { data: item })}
            />
          )}
          keyExtractor={(item) => String(item.key)}
        />
      </View>
    );
  }
}


export default FavoriteScreen;
