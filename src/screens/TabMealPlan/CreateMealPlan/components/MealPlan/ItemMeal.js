import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {responsive, device} from 'utils';
import Icon from 'react-native-vector-icons/Ionicons';

const ItemMeal = ({onPressItem, item, isSelected}) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.inner} onPress={onPressItem}>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{uri: item?.cover}}
      />
      <Text style={styles.name}>{item?.name}</Text>
      <Icon
        name={isSelected ? 'remove-circle' : 'remove-circle-outline'}
        size={25}
        color="red"
        style={styles.icon}
      />
    </TouchableOpacity>
    <View style={styles.line} />
  </View>
);

const styles = StyleSheet.create({
  image: {
    width: device.width / 7,
    height: responsive({h: 30}),
    borderRadius: 5,
    marginRight: responsive({d: 20}),
  },
  inner: {
    paddingVertical: responsive({d: 20}),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginLeft: responsive({d: 35}),
  },
  name: {
    fontSize: responsive({f: 15}),
    fontWeight: '500',
    color: 'black',
    flex: 3,
  },
  icon: {
    marginHorizontal: 20,
  },
  line: {backgroundColor: '#dddddd', height: 1},
});

export default ItemMeal;
