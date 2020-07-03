import React, { useState, useEffect, useCallback } from 'react';
import { View, FlatList } from 'react-native';
import lodash from 'lodash';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';

import SearchViewCheff from 'components/SearchViewCheff';
import SearchItem from 'components/SearchItem';
import Header from 'components/Header';
import styles from './styles';

const SearchScreen = ({ listFood = [], navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [dataSearch, setDataSearch] = useState([]);

  const handleSearch = (searchText) => {
    if (searchText.trim() !== '') {
      const data = listFood.filter(
        i => i?.value?.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1
      );
      setDataSearch(data);
    }
  }

  const delayedQuery = useCallback(lodash.debounce(search => handleSearch(search), 1000), []);

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
          data={searchText.trim() !== '' ? dataSearch : listFood}
          renderItem={({ item }) => (
            <SearchItem
              item={item.value}
              onPressItem={() => navigation.navigate('FoodDetail', { data: item.value })}
            />
          )}
          keyExtractor={item => String(item.key)}
          extraData={searchText}
        />
      </View>
    </View>
  );
}

const enhance = compose(
  firebaseConnect(({ typeId }) => [
    { path: '/Food'}
  ]),
  connect(({ firebase: { ordered: { Food }} }) => ({
    listFood: Food,
  }))
)

export default enhance(SearchScreen);
