import React, { Component } from 'react';
import {
  View, Text, Image as RNImage, ScrollView, FlatList, TouchableWithoutFeedback,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { Image } from 'react-native-expo-image-cache';

import CollapseView from '../components/CollapseView';
import Header from '../components/Header';
import styles from '../styles/FoodDetailStyle';
import { device, responsive } from '../utils';

export default class FoodDetail extends Component {
  constructor(props) {
    super(props);
    const data = this.props.navigation.getParam('data');
    const { serveForPeople } = data;
    this.state = {
      ingredientsExpand: true,
      serveForPeople,
    };
  }

  render() {
    const data = this.props.navigation.getParam('data');
    return (
      <View style={styles.container}>
        <Header
          iconLeft={require('../assets/images/icon_back.png')}
          onPressLeft={() => this.props.navigation.goBack()}
          customRight={() => (
            <View style={styles.likeView}>
              <Text style={styles.likeNumber}>{data.like}</Text>
              <RNImage
                style={styles.iconHeart}
                resizeMode="center"
                source={require('../assets/images/ic_heart_black.png')}
              />
            </View>
          )}
        />
        <ScrollView>
          <View style={styles.nameView}>
            <Text style={styles.nameText}>{data.name}</Text>
          </View>
          <View>
            <Carousel
              data={data.images}
              renderItem={({ item }) => (
                <Image
                  style={styles.imageFoodCover}
                  resizeMode="cover"
                  uri={item}
                />
              )}
              removeClippedSubviews={false}
              sliderWidth={device.width}
              itemWidth={device.width - responsive({ d: 60 })}
              inactiveSlideScale={1}
              inactiveSlideOpacity={1}
            />
          </View>
          <View style={styles.tagInfoView}>
            <View style={styles.infoView}>
              <View style={styles.flexRowCenter}>
                <RNImage
                  style={styles.iconInfo}
                  resizeMode="contain"
                  source={require('../assets/images/ic_clock.png')}
                />
                <Text style={styles.infoText}>{data.timeCook}</Text>
              </View>
              <View style={[styles.flexRowCenter, { marginLeft: 10 }]}>
                <RNImage
                  style={styles.iconInfo}
                  resizeMode="contain"
                  source={require('../assets/images/ic_ingredient.png')}
                />
                <Text>{`${data.ingredients.length} ingredients`}</Text>
              </View>
              <View style={[styles.flexRowCenter, { marginLeft: 10 }]}>
                <RNImage
                  style={styles.iconInfo}
                  resizeMode="contain"
                  source={require('../assets/images/ic_fire.png')}
                />
                <Text>{`${data.calories} calories`}</Text>
              </View>
            </View>
            <FlatList
              data={data.tags}
              keyExtractor={(item, index) => String(index)}
              horizontal
              style={styles.flatList}
              renderItem={({ item }) => (
                <View style={styles.tagView}>
                  <Text style={styles.tagText}>{item.toUpperCase()}</Text>
                </View>
              )}
            />
          </View>
          <View style={styles.ingredientsView}>
            <CollapseView
              onExpand={() => this.setState({ ingredientsExpand: true })}
              onCollapse={() => this.setState({ ingredientsExpand: false })}
            >
              <Text style={styles.ingredientsTitle}>INGREDIENTS</Text>
              <FlatList
                data={data.ingredients}
                keyExtractor={(item, index) => String(index)}
                renderItem={({ item }) => {
                  const { serveForPeople } = this.state;
                  const amountForOne = Math.round(item.amount / data.serveForPeople);
                  return (
                    <Text style={styles.ingredientsText}>{`${amountForOne * serveForPeople}  ${item.name}`}</Text>
                  );
                }}
                extraData={this.state.serveForPeople}
              />
              {
                this.state.ingredientsExpand && (
                  <View style={styles.servingBox}>
                    <TouchableWithoutFeedback
                      onPress={() => this.setState(prevState => ({
                        serveForPeople: prevState.serveForPeople - 1,
                      }))}
                    >
                      <RNImage
                        style={styles.iconServing}
                        resizeMode="center"
                        source={require('../assets/images/ic_minus.png')}
                      />
                    </TouchableWithoutFeedback>
                    <Text>{`${this.state.serveForPeople} serving${this.state.serveForPeople > 1 ? 's' : ''}`}</Text>
                    <TouchableWithoutFeedback
                      onPress={() => this.setState(prevState => ({
                        serveForPeople: prevState.serveForPeople + 1,
                      }))}
                    >
                      <RNImage
                        style={styles.iconServing}
                        resizeMode="center"
                        source={require('../assets/images/ic_plus.png')}
                      />
                    </TouchableWithoutFeedback>
                  </View>
                )
              }
            </CollapseView>
          </View>
          <View style={styles.instructionView}>
            <CollapseView isCollapse>
              <Text style={styles.ingredientsTitle}>INSTRUCTIONS</Text>
              <FlatList
                data={data.guidline}
                keyExtractor={(item, index) => String(index)}
                renderItem={({ item, index }) => <Text style={styles.ingredientsText}>{`${index + 1}. ${item}`}</Text>}
              />
            </CollapseView>
          </View>
        </ScrollView>
      </View>
    );
  }
}
