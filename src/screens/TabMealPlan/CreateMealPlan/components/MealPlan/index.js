import React, { useState, useRef } from 'react';
import {
  View, Text, StyleSheet, FlatList,
} from 'react-native';
import { responsive, device } from 'utils';
import { COLOR } from 'styles/theme';
import ContainerInput from 'components/ContainerInput';
import PickerSelect from 'components/PickerSelect';
import { useSelector } from 'react-redux';
import RBSheet from 'react-native-raw-bottom-sheet';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from '@expo/vector-icons/Ionicons';
import SearchComponent from '../SearchMeal';
import ItemMeal from './ItemMeal';

const MealPlan = ({
  onSelectType,
  onSelectFood,
  plan: { food: foodList, meal },
}) => {
  const bottomSheetRef = useRef();

  const [listSelected, setListSelected] = useState(foodList);

  const food = useSelector(({ firebase: { data: { Food = {} } } }) => (listSelected || []).map(item => ({ ...Food[item.key], key: item.key })));
  const typeFood = useSelector(
    ({
      firebase: {
        ordered: { Type_Food = {} },
      },
    }) => Type_Food.map(item => ({
      ...item,
      label: item.value.name,
      value: item.key,
    })),
  );

  const showModal = () => bottomSheetRef?.current?.open();

  const addToList = item => {
    let list = [...listSelected];
    list = listSelected.filter(listItem => listItem.key !== item.key);

    setListSelected(list);
    onSelectFood(list);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lịch nấu ăn</Text>
      <ContainerInput label="Bữa ăn">
        {/* meal type picker */}
        <PickerSelect
          onValueChange={onSelectType}
          value={meal}
          items={typeFood}
          containerStyle={styles.picker}
        />
      </ContainerInput>

      <ContainerInput label="Chọn món ăn">
        <TouchableOpacity
          onPress={showModal}
          style={[styles.picker, styles.rowBetweenCenter]}
        >
          <View style={styles.rowBetweenCenter}>
            <Icon size={25} name="search" color={COLOR.LIGHT_GRAY_COLOR} />
            <Text
              style={{
                marginLeft: 20,
                fontSize: 16,
                color: COLOR.LIGHT_GRAY_COLOR,
              }}
            >
              Tra cứu
            </Text>
          </View>

          <Icon name="chevron-down" />
        </TouchableOpacity>
        <FlatList
          data={food}
          renderItem={({ item }) => (
            <ItemMeal
              item={item}
              onPressItem={() => addToList(item)}
              isSelected={
                foodList.find(foodItem => foodItem.key === item.key)
                !== undefined
              }
            />
          )}
          keyExtractor={item => String(item.key)}
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
        onClose={() => onSelectFood(listSelected)}
      >
        <SearchComponent
          onCompleted={value => setListSelected(value)}
          listSelected={listSelected}
        />
      </RBSheet>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
  containerTitle: {
    borderWidth: 0.2,
    borderColor: COLOR.BORDER_COLOR,
    paddingVertical: responsive({ d: 10 }),
    paddingHorizontal: responsive({ d: 10 }),
    borderRadius: 3,
    fontSize: 14,
  },
  title: {
    fontSize: responsive({ f: 18 }),
    fontWeight: '700',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  spaceSmall: {
    height: 20,
  },
  picker: {
    borderWidth: 0.2,
    borderColor: COLOR.BORDER_COLOR,
    paddingVertical: responsive({ d: 15 }),
    paddingHorizontal: responsive({ d: 20 }),
    borderRadius: 5,
  },
  rowBetweenCenter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default MealPlan;
