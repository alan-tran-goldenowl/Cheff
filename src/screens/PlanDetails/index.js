import React from 'react';
import { upperFirst } from 'lodash';
import {
  Text, View, Image, FlatList,
} from 'react-native';
import { withNavigation, NavigationActions } from 'react-navigation';

import Header from 'components/Header';
import EditButton from 'components/Buttons/EditButton';
import styles from './styles';


const icon = {
  lunch: require('assets/images/icon-lunch.png'),
  brunch: require('assets/images/icon-brunch.png'),
  dinner: require('assets/images/icon-dinner.png'),
  breakfast: require('assets/images/icon-breakfast.png'),
};

const data = {
  id: 1,
  title: 'breakfast with family',
  date: '1 August, 2018',
  time: '05:00 AM',
  type: 'breakfast',
  food: [
    {
      id: 1,
      name: 'Vegetarian Fried Fried Rice',
    },
    {
      id: 2,
      name: 'Grab Soup',
    },
  ],
  notes: 'Duis eu faucibus libero. Etiam non dui orci. Vestibulum id turpis eu est tincidunt porttitor vel at velit. Integer venenatis massa vitae mauris sagittis, sed condimentum lorem sodales. Quisque id est bibendum nibh cursus blandit nec nec purus. Nullam sit amet libero ut leo facilisis finibus vel at urna. Ut vehicula, lorem eget dictum laoreet, lectus ipsum consequat dolor, vel convallis sem nisl ac diam. Donec quis auctor massa, nec auctor nisl. Sed convallis molestie arcu vel semper. Duis et fermentum mauris. Vivamus posuere ullamcorper aliquam. Sed ut risus vitae erat pretium commodo non sed erat. Ut vel lacus eu purus dictum ultricies in sit amet magna. Phasellus rutrum viverra risus, sit amet imperdiet metus dignissim consectetur.',
};

export default withNavigation(({ navigation }) => {
  const goBack = () => {
    navigation.dispatch(NavigationActions.back());
  };

  const renderHeader = () => (
    <Header
      onPressLeft={goBack}
      iconLeft={require('assets/images/icon_back.png')}
      customRight={() => <EditButton routeName="EditPlanDetails" params={{ id: data.id }} />}
    />
  );

  return (
    <View style={styles.container}>
      {/* header */}
      {renderHeader()}

      {/* title */}
      <View style={styles.nameView}>
        <Text style={styles.nameText}>
          {upperFirst(data.title)}
        </Text>
      </View>

      {/* date */}
      <View style={styles.rowView}>
        <View style={styles.iconView}>
          <Image
            style={styles.icon}
            resizeMode="center"
            source={require('assets/images/ic_ingredient.png')}
          />
        </View>
        <View style={styles.textView}>
          <Text styles={styles.text}>
            {data.date}
          </Text>
        </View>
      </View>

      {/* time */}
      <View style={styles.rowView}>
        <View style={styles.iconView}>
          <Image
            style={styles.icon}
            resizeMode="center"
            source={require('assets/images/ic_ingredient.png')}
          />
        </View>
        <View style={styles.textView}>
          <Text styles={styles.text}>
            {data.time}
          </Text>
        </View>
      </View>

      {/* type */}
      <View style={styles.rowView}>
        <View style={styles.iconView}>
          <Image
            style={styles.icon}
            resizeMode="center"
            source={require('assets/images/ic_ingredient.png')}
          />
        </View>
        <View style={{
          ...styles.textView,
          ...styles.borderBottom,
          ...styles.textViewWithIconInFront,
        }}
        >
          <Image
            source={icon[data.type]}
            resizeMode="center"
            style={styles.iconViewImage}
          />
          <Text styles={styles.text}>
            {' '}
            {upperFirst(data.type)}
          </Text>
        </View>
      </View>

      {/* food */}
      <View style={styles.rowView}>
        <View style={styles.iconView}>
          <Image
            style={styles.icon}
            resizeMode="center"
            source={require('assets/images/ic_ingredient.png')}
          />
        </View>
        <View style={{ ...styles.textView, ...styles.borderBottom }}>
          <FlatList
            data={data.food}
            keyExtractor={({ id }) => String(id)}
            renderItem={({ item }) => (
              <Text styles={styles.text}>
                {upperFirst(item.name)}
              </Text>
            )}
          />
        </View>
      </View>

      {/* notes */}
      <View style={styles.rowView}>
        <View style={styles.iconView}>
          <Image
            style={styles.icon}
            resizeMode="center"
            source={require('assets/images/ic_ingredient.png')}
          />
        </View>
        <View style={styles.textView}>
          <Text styles={styles.notes}>
            {data.notes}
          </Text>
        </View>
      </View>
    </View>
  );
});
