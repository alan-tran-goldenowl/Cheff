import React from 'react'
import {
  View, Text, FlatList, StyleSheet,
} from 'react-native'
import { withNavigation } from 'react-navigation'
import { responsive } from 'utils'
import Button from 'components/Button'
import { ROUTE_NAME } from 'utils/constants'
import ToDoItem from './component/TodoItem'

const RenderItem = ({ list, navigation }) => {
  const renderEmptyScreen = () => (
    <View style={styles.containerEmpty}>
      <Text style={styles.textEmpty}>TRỐNG!!!</Text>
    </View>
  )

  const renderList = () => (
    <FlatList
      data={list}
      renderItem={({ item }) => (
        <ToDoItem
          onPress={() => {
            navigation.navigate(ROUTE_NAME.TodoPlanDetail, { id: item.id })
          }}
          item={item}
        />
      )}
      keyExtractor={item => item.id}
    />
  )

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#f5f5f5',
      }}
    >
      {list.length ? renderList() : renderEmptyScreen()}

      <Button buttonStyle={styles.btnCreate} title="TẠO MỚI" onPress={() => navigation.navigate('CreatePlanToBuy')} />
    </View>
  )
}

const styles = StyleSheet.create({
  btnCreate: {
    marginBottom: responsive({ d: 35 }),
    marginHorizontal: responsive({ d: 30 }),
  },
  containerEmpty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textEmpty: { fontSize: 15, color: '#a7a7a7', marginVertical: 5 },
  separator: {
    height: 2,
    backgroundColor: '#f5f5f5',
    marginHorizontal: 20,
  },
  containerTitle: { paddingVertical: 12, paddingHorizontal: 20, backgroundColor: '#f5f5f5' },
})

export default withNavigation(RenderItem)
