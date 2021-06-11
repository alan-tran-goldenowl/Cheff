import React, { useState } from 'react'
import { View, FlatList } from 'react-native'

import SearchViewCheff from 'components/SearchViewCheff'
import { searchBar as styles } from './styles'
import SearchItem from './SearchItem'

const SearchMeal = ({ listFood, listSelected = [], setListSelected }) => {
  const [keySearch, setKeySearch] = useState('')

  const addToList = itemId => {
    if (listSelected.includes(itemId)) {
      setListSelected(prevList => prevList.filter(foodId => foodId !== itemId))
    } else {
      setListSelected(prevList => prevList.concat(itemId))
    }
  }

  const filterListFood = () => listFood.filter(food => listSelected.includes(food.id) || food.name.toUpperCase().includes(keySearch.toUpperCase()))

  return (
    <View style={styles.container}>
      <SearchViewCheff onChangeText={setKeySearch} />
      <FlatList
        data={filterListFood()}
        renderItem={({ item }) => <SearchItem item={item} onPressItem={() => addToList(item.id)} isSelected={listSelected.includes(item.id)} />}
        keyExtractor={item => String(item.id)}
      />
    </View>
  )
}

export default SearchMeal
