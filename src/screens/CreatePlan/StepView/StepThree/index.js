import React, { useState } from 'react'
import { Text, View, FlatList } from 'react-native'
import _ from 'lodash'
import Button from 'components/Button'
import Title from 'components/Title'
import { WORDS } from 'utils/constants'
import { useSelector } from 'react-redux'
import { getListFood } from 'utils/state'
import RecipeItem from './RecipeItem'
import styles from './styles'

const StepThree = ({ listFood = [], onNextStep = () => {} }) => {
  const food = useSelector(getListFood)

  const uuid = () => `${new Date().getTime()}-${Math.floor(Math.random() * 1000)}`

  const getPlayToBuy = () => listFood
    .map(item => {
      const { ingredients } = food.find(foodItem => foodItem.id === item)
      return ingredients.map(ingredient => ({ ...ingredient, id: uuid(), text: `${ingredient.name} ${ingredient.amount} ${ingredient.unit}` }))
    })
    .flat()

  const [planToBuy, setPlanToBuy] = useState(getPlayToBuy())

  const onChangeTextTodo = _.debounce((id, text, type) => {
    const newList = planToBuy.map(item => (item.id === id ? { ...item, [type]: text } : item))
    setPlanToBuy(newList)
  }, 500)

  const onRemoveTodo = id => {
    if (planToBuy.length === 1) {
      return
    }
    const newList = planToBuy.filter(i => i.id !== id)
    setPlanToBuy(newList)
  }

  return (
    <FlatList
      data={planToBuy}
      renderItem={({ item }) => <RecipeItem {...item} onChangeTextTodo={onChangeTextTodo} onRemoveTodo={onRemoveTodo} />}
      keyExtractor={item => item.id}
      ListHeaderComponent={() => (
        <View style={styles.stickyHeader}>
          <Title>Danh sách nguyên liệu cần chuẩn bị</Title>
          <View style={styles.row}>
            <Text style={styles.flexOne}>Tên</Text>
            <Text style={styles.flexHalf}>SL</Text>
            <Text style={styles.flexOne}>Đơn vị</Text>
          </View>
        </View>
      )}
      ListFooterComponent={() => <Button title={WORDS.CONFIRM} buttonStyle={{ marginTop: 10 }} onPress={() => onNextStep({ planToBuy })} />}
      stickyHeaderIndices={[0]}
    />
  )
}

export default StepThree
