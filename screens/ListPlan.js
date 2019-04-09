import React, { Component, Fragment } from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import Header from '../components/Header';

const breakfastIcon = require('../assets/images/icon-breakfast.png');
const brunchIcon = require('../assets/images/icon-brunch.png');
const lunchIcon = require('../assets/images/icon-lunch.png');
const dinnerIcon = require('../assets/images/icon-dinner.png');

// const iconName = `${type}Icon`;

const data = [
  {
    id: '1',
    time: '5:00 AM',
    title: 'Let have breakfast',
    description: 'Tiểu nhị! Cho tô phở tái',
    type: 'breakfast',
  },
  {
    id: '2',
    time: '10:30 AM',
    title: 'Brunch with dog',
    description: 'Mang đây 1 pizza ko hành ko giá',
    type: 'brunch',
  },
  {
    id: '3',
    time: '1:30 PM',
    title: 'Lunch love',
    description: 'Bò xào cần tây ft rau ngót hầm xương',
    type: 'lunch',
  },
  {
    id: '4',
    time: '7:50 PM',
    title: 'Ready for dinner',
    description: 'Nhẹ nhàng chào buổi tối bằng nồi lẩu hải sản <3',
    type: 'dinner',
  },
];

class ListPlan extends Component {
  renderHeader() {
    return (
      <Header
        iconLeft={require('../assets/images/icon_back.png')}
        onPressLeft={() => this.props.navigation.goBack()}
      />
    );
  }

  renderDayTime() {
    return (
      <View
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'row',
          height: 50,
          marginLeft: 17,
          borderBottomWidth: 1,
          borderBottomColor: '#ddd',
        }}
      >
        <Text style={{ marginTop: 15, color: 'black', fontSize: 24 }}>
          01 August, 2018
        </Text>
        <Text
          style={{
            color: '#666',
            fontSize: 18,
            marginTop: 20,
            marginRight: 15,
          }}
        >
          Today
        </Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        {this.renderDayTime()}
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            const {
              title, time, description, type,
            } = item;
            let icon;
            switch (type) {
              case 'breakfast':
                icon = require('../assets/images/icon-breakfast.png');
                break;
              case 'brunch':
                icon = require('../assets/images/icon-brunch.png');
                break;
              case 'lunch':
                icon = require('../assets/images/icon-lunch.png');
                break;
              case 'dinner':
                icon = require('../assets/images/icon-dinner.png');
                break;
              default:
                icon = require('../assets/images/icon-breakfast.png');
            }

            return (
              <View
                style={{
                  minHeight: 50,
                  height: 'auto',
                  flexWrap: 'wrap',
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'row',
                  paddingTop: 15,
                }}
              >
                <View style={{ width: '25%', paddingLeft: 17 }}>
                  <Text>{time}</Text>
                </View>
                <View
                  style={{
                    width: '75%',
                    display: 'flex',
                    flexDirection: 'row',
                    paddingBottom: 15,
                    borderBottomWidth: 1,
                    borderBottomColor: 'hsl(0, 0%, 95%)',
                  }}
                >
                  <View style={{ paddingTop: 5 }}>
                    <Image
                      style={{ width: 8, height: 8 }}
                      resizeMode="center"
                      source={icon}
                    />
                  </View>
                  <View style={{ paddingLeft: 10, paddingRight: 15, display: 'flex' }}>
                    <Text>{title}</Text>
                    <Text style={{ marginTop: 5, color: '#666' }}>{description}</Text>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
    );
  }
}

export default ListPlan;

const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: '#ffffff',
    marginTop: 30,
    height: height / 20,
    width: null,
    flexDirection: 'row',
  },
});
