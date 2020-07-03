import React, { useState, useEffect, useCallback } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import lodash from 'lodash';

import { onSearchFood } from 'actions/food';
import SearchViewCheff from 'components/SearchViewCheff';
import SearchItem from 'components/SearchItem';
import Header from 'components/Header';
import styles from './styles';

const SearchScreen = ({ listFood, searchFood, navigation }) => {
  const [searchText, setSearchText] = useState('');

  const delayedQuery = useCallback(lodash.debounce(search => searchFood(search), 1000));

  const onChangeText = (searchText) => {
    setSearchText(searchText);
    delayedQuery(searchText);
  };

  return (
    <View style={styles.container}>
      <Header
        iconLeft={require('assets/images/icon_back.png')}
        onPressLeft={() => navigation.goBack()}
      />
      <View style={styles.searchView}>
        <SearchViewCheff
          autoFocus
          value={searchText}
          overrideStyle={styles.search}
          onChangeText={onChangeText}
        />
        <FlatList
          data={listFood}
          renderItem={({ item }) => (
            <SearchItem
              item={item}
              onPressItem={() => navigation.navigate('FoodDetail', { data: item })}
            />
          )}
          keyExtractor={item => String(item.key)}
          extraData={searchText}
        />
      </View>
    </View>
  );
}

const mapStateToProps = ({ Food }) => ({
  listFood: Food.dataSearch,
});

const mapDispatchtoProps = (dispatch) => ({
  searchFood: (search) => dispatch(onSearchFood(search)),
});

export default connect(mapStateToProps, mapDispatchtoProps)(SearchScreen);
