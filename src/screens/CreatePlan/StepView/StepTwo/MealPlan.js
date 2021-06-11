import React, { useRef } from 'react'

import { FlatList, Text, View } from 'react-native'

import { device } from 'utils'
import Title from 'components/Title'
import { COLOR } from 'styles/theme'
import ContainerInput from 'components/ContainerInput'
import Icon from '@expo/vector-icons/Ionicons'
import PickerSelect from 'components/PickerSelect'
import RBSheet from 'react-native-raw-bottom-sheet'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'
import { getListFoodByType, getListTypeFood } from 'utils/state'
import ItemSeparator from 'components/ItemSeparator'
import SearchComponent from './SearchMeal'
import ItemMeal from './ItemMeal'
import { mealPlanStyles as styles } from './styles'

const MealPlan = ({
  selectedType, setSelectedType, listSelected, setListSelected,
}) => {
  const bottomSheetRef = useRef()

  const typeFood = useSelector(getListTypeFood)
  const food = useSelector(state => getListFoodByType(state, selectedType ?? typeFood[0].key))

  const getListMeal = () => typeFood.map(type => ({
    ...type.value,
    label: type.value.name,
    value: type.key,
  }))

  const listMeal = getListMeal()

  const onSelectType = value => {
    setListSelected([])
    setSelectedType(value)
  }

  const showModal = () => bottomSheetRef?.current?.open()

  const removeToList = id => {
    const newData = listSelected.filter(item => item !== id)
    setListSelected(newData)
  }
  return (
    <View style={styles.container}>
      <Title>Lịch nấu ăn</Title>
      <ContainerInput label="Bữa ăn">
        <PickerSelect onValueChange={onSelectType} value={selectedType} items={listMeal} containerStyle={styles.picker} />
      </ContainerInput>

      <ContainerInput label="Chọn món ăn">
        <TouchableOpacity onPress={showModal} style={[styles.picker, styles.rowBetweenCenter]}>
          <View style={styles.rowBetweenCenter}>
            <Icon size={25} name="search" color={COLOR.LIGHT_GRAY_COLOR} />
            <Text style={styles.btnSearch}>Tra cứu</Text>
          </View>
          <Icon name="chevron-down" />
        </TouchableOpacity>
        <FlatList
          data={listSelected}
          renderItem={({ item }) => {
            const data = food.find(foodItem => foodItem.id === item)
            return <ItemMeal item={data} onPressItem={() => removeToList(item)} isSelected={listSelected.includes(data.id)} />
          }}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={ItemSeparator}
        />
      </ContainerInput>

      <RBSheet
        ref={bottomSheetRef}
        duration={250}
        height={device.height * 0.8}
        closeOnPressBack
        closeOnPressMask
        closeOnDragDown
        keyboardAvoidingViewEnabled={false}
      >
        <SearchComponent listFood={food} listSelected={listSelected} setListSelected={setListSelected} />
      </RBSheet>
    </View>
  )
}

export default MealPlan
