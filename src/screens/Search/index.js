import React, { useState, useCallback } from 'react';
import {
  View, FlatList, KeyboardAvoidingView, Platform,
} from 'react-native';
import lodash from 'lodash';
import { useSelector } from 'react-redux';

import SearchViewCheff from 'components/SearchViewCheff';
import SearchItem from 'components/SearchItem';
import Header from 'components/Header';
import images from 'assets/images';
import styles from './styles';


const SearchScreen = ({ navigation }) => {
  const [dataSearch, setDataSearch] = useState(null);

  const listFood = useSelector(({ firebase: { ordered: { Food } } }) => Food);

  const handleSearch = text => {
    if (text.trim() !== '') {
      const data = listFood.filter(
        i => i?.value?.name.toLowerCase().indexOf(text.toLowerCase()) > -1,
      );
      setDataSearch(data);
    } else {
      setDataSearch([]);
    }
  };

  const delayedQuery = useCallback(lodash.debounce(search => handleSearch(search), 300), [JSON.stringify(listFood)]);

  const onChangeText = text => {
    delayedQuery(text);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <Header
        iconLeft={images.icon_back}
        onPressLeft={() => navigation.goBack()}
      />
      <View style={styles.searchView}>
        <SearchViewCheff
          autoFocus
          overrideStyle={styles.search}
          onChangeText={onChangeText}
        />
        <FlatList
          data={dataSearch}
          renderItem={({ item }) => (
            <SearchItem
              item={item.value}
              onPressItem={() => navigation.navigate('FoodDetail', { key: item.key })}
            />
          )}
          keyExtractor={item => String(item.key)}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default SearchScreen;
