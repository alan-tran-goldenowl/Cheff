import React, { useState, useRef } from 'react';
import {
  View, Text, StyleSheet, FlatList,
} from 'react-native';
import { responsive, dataPickerMeal, device } from 'utils';
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

  const food = useSelector(({ firebase: { data: { Food = {} } } }) => (listSelected || []).map(item => ({ ...Food[item], key: item })));

  const showModal = () => bottomSheetRef?.current?.open();

  const addToList = key => {
    let list = [...listSelected];
    if (list.indexOf(key) !== -1) {
      list = list.filter(item => item !== key);
    } else {
      list.push(key);
    }
    setListSelected(list);
    onSelectFood(list);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meal Plan</Text>
      <ContainerInput label="This meal for">
        {/* meal type picker */}
        <PickerSelect
          onValueChange={onSelectType}
          value={meal}
          items={dataPickerMeal}
          containerStyle={styles.picker}
        />
      </ContainerInput>

      <ContainerInput label="Choose your dishes">
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
              Select
            </Text>
          </View>

          <Icon name="chevron-down" />
        </TouchableOpacity>
        <FlatList
          data={food}
          renderItem={({ item }) => (
            <ItemMeal
              item={item}
              onPressItem={() => addToList(item.key)}
              isSelected={foodList.indexOf(item.key) !== -1}
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
