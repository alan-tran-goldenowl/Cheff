import React, { Component } from 'react';
import {
  View, Text, Image as RNImage, ScrollView, FlatList, TouchableWithoutFeedback, TouchableOpacity,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { Image } from 'react-native-expo-image-cache';

import Header from '../components/Header';
import styles from '../styles/FoodDetailStyle';
import CollapseView from '../components/CollapseView';

import { device, responsive } from '../utils';

export default class FoodDetail extends Component {
  state = {
    like: 0,
    userLike: false,
    serveForPeople: 0,
    ingredientsExpand: true,
  }

  componentDidMount() {
    const {
      like = 0,
      userLike = false,
      serveForPeople = 0,
    } = this.props.navigation.getParam('data') || {};

    this.setState({
      like,
      userLike,
      serveForPeople,
    });
  }

  handleToggleLike = () => this.setState(prevState => ({
    userLike: !prevState.userLike,
    like: prevState.like + (prevState.userLike ? -1 : 1),
  }))

  handleAddServe = () => this.setState(prevState => ({
    serveForPeople: prevState.serveForPeople + 1,
  }))

  handleSubtractServe = () => this.setState(prevState => ({
    serveForPeople: prevState.serveForPeople > 1 ? prevState.serveForPeople - 1 : 1,
  }))

  render() {
    const data = this.props.navigation.getParam('data') || {};

    return (
      <View style={styles.container}>
        <Header
          onPressLeft={this.props.navigation.goBack}
          iconLeft={require('../assets/images/icon_back.png')}
          customRight={() => (
            <TouchableOpacity
              style={styles.likeView}
              onPress={this.handleToggleLike}
            >
              <Text style={styles.likeNumber}>
                {this.state.like}
              </Text>
              <RNImage
                resizeMode="center"
                style={styles.iconHeart}
                source={
                  this.state.userLike
                    ? require('../assets/images/ic_love.png')
                    : require('../assets/images/ic_nonlove.png')
                }
              />
            </TouchableOpacity>
          )}
        />
        <ScrollView>
          <View style={styles.nameView}>
            <Text style={styles.nameText}>
              {data.name}
            </Text>
          </View>
          <View>
            <Carousel
              data={data.images}
              renderItem={({ item }) => (
                <Image
                  uri={item}
                  resizeMode="cover"
                  style={styles.imageFoodCover}
                />
              )}
              inactiveSlideScale={1}
              inactiveSlideOpacity={1}
              sliderWidth={device.width}
              removeClippedSubviews={false}
              itemWidth={device.width - responsive({ d: 60 })}
            />
          </View>
          <View style={styles.tagInfoView}>
            <View style={styles.infoView}>
              <View style={styles.flexRowCenter}>
                <RNImage
                  resizeMode="contain"
                  style={styles.iconInfo}
                  source={require('../assets/images/ic_clock.png')}
                />
                <Text style={styles.infoText}>
                  {data.timeCook}
                </Text>
              </View>
              <View style={[styles.flexRowCenter, { marginLeft: 10 }]}>
                <RNImage
                  resizeMode="contain"
                  style={styles.iconInfo}
                  source={require('../assets/images/ic_ingredient.png')}
                />
                <Text>
                  {`${data.ingredients.length} ingredients`}
                </Text>
              </View>
              <View style={[styles.flexRowCenter, { marginLeft: 10 }]}>
                <RNImage
                  resizeMode="contain"
                  style={styles.iconInfo}
                  source={require('../assets/images/ic_fire.png')}
                />
                <Text>
                  {`${data.calories} calories`}
                </Text>
              </View>
            </View>
            <FlatList
              data={data.tags}
              keyExtractor={(item, index) => String(index)}
              horizontal
              style={styles.flatList}
              renderItem={({ item }) => (
                <View style={styles.tagView}>
                  <Text style={styles.tagText}>
                    {item.toUpperCase()}
                  </Text>
                </View>
              )}
            />
          </View>
          <View style={styles.ingredientsView}>
            <CollapseView
              onExpand={() => this.setState({ ingredientsExpand: true })}
              onCollapse={() => this.setState({ ingredientsExpand: false })}
            >
              <Text style={styles.ingredientsTitle}>
                INGREDIENTS
              </Text>
              <FlatList
                data={data.ingredients}
                keyExtractor={(item, index) => String(index)}
                renderItem={({ item }) => {
                  const { serveForPeople } = this.state;
                  const amountForOne = Math.round(item.amount / data.serveForPeople);
                  return (
                    <Text style={styles.ingredientsText}>
                      {`${amountForOne * serveForPeople}  ${item.name}`}
                    </Text>
                  );
                }}
                extraData={this.state.serveForPeople}
              />
              {
                this.state.ingredientsExpand && (
                  <View style={styles.servingBox}>
                    <TouchableWithoutFeedback
                      onPress={this.handleSubtractServe}
                    >
                      <RNImage
                        resizeMode="center"
                        style={styles.iconServing}
                        source={require('../assets/images/ic_minus.png')}
                      />
                    </TouchableWithoutFeedback>
                    <Text>
                      {`${this.state.serveForPeople} serving${this.state.serveForPeople > 1 ? 's' : ''}`}
                    </Text>
                    <TouchableWithoutFeedback
                      onPress={this.handleAddServe}
                    >
                      <RNImage
                        resizeMode="center"
                        style={styles.iconServing}
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
              <Text style={styles.ingredientsTitle}>
                INSTRUCTIONS
              </Text>
              <FlatList
                data={data.guidline}
                keyExtractor={(item, index) => String(index)}
                renderItem={({ item, index }) => (
                  <Text style={styles.ingredientsText}>
                    {`${index + 1}. ${item}`}
                  </Text>
                )}
              />
            </CollapseView>
          </View>
        </ScrollView>
      </View>
    );
  }
}
