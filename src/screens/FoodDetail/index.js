import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image as RNImage,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { Image } from 'react-native-expo-image-cache';
import { NavigationActions } from 'react-navigation';

import Header from 'components/Header';
import {
  device,
  responsive,
  formatNumber,
  appropriatePluralisation,
} from 'utils';
import CollapseView from 'components/CollapseView';
import { useSelector, useDispatch } from 'react-redux';
import { isEmpty } from 'react-redux-firebase';
import { FireBase, ActivityConstant } from 'constants';
import { likeFood, addNewActivity } from 'services';
import images from 'assets/images';
import styles from './styles';

const FoodDetail = ({ navigation }) => {
  const userFirebase = FireBase.auth().currentUser;

  const dispatch = useDispatch();

  const foodKey = navigation.getParam('key');
  const fromScreen = navigation.getParam('from');

  const foodValue = useSelector(
    ({
      firebase: {
        ordered: { Food },
      },
    }) => {
      const list = (Food || []).filter(item => item?.key === foodKey);
      return list[0].value;
    },
  );

  const isLiked = useSelector(
    ({
      firebase: {
        data: { Favourites },
      },
    }) => {
      const listFavouritesOfUser = (Favourites && Favourites[userFirebase.uid]) || {};

      return listFavouritesOfUser && listFavouritesOfUser[foodKey]?.isLiked;
    },
  );

  const [serveForPeople, setServeForPeople] = useState(
    foodValue?.serveForPeople || 1,
  );

  useEffect(() => {
    if (!foodValue.name || fromScreen === 'Activity') {
      return;
    }
    const params = {
      key: foodKey,
      name: foodValue.name,
      userId: userFirebase.uid,
      action: ActivityConstant.VIEW,
    };
    dispatch(addNewActivity(params));
  }, [foodValue?.name]);

  const handleAddServe = () => setServeForPeople(serveForPeople + 1);

  const handleSubtractServe = () => {
    setServeForPeople(serveForPeople > 1 ? serveForPeople - 1 : 1);
  };

  const handleLike = () => {
    const params = {
      userId: userFirebase.uid,
      food: {
        key: foodKey,
        value: foodValue,
      },
      like: !isLiked,
    };
    dispatch(likeFood(params));
  };

  const goBack = () => {
    navigation.dispatch(NavigationActions.back());
  };

  const renderInstruction = () => foodValue.guidline?.map((item, index) => (
    <Text key={index.toString()} style={styles.ingredientsText}>
      {`${index + 1}. ${item}`}
    </Text>
  ));

  const renderIngredients = () => foodValue.ingredients?.map((item, index) => {
    const amountForOne = formatNumber(
      (item.amount / foodValue.serveForPeople) * serveForPeople,
      2,
    );

    return (
      <Text key={index.toString()} style={styles.ingredientsText}>
        {`${amountForOne}  ${item.name}`}
      </Text>
    );
  });

  const renderTags = () => (
    <View style={styles.rowWrap}>
      {foodValue.tags?.map((item, index) => (
        <View key={index.toString()} style={styles.tagView}>
          <Text style={styles.tagText}>{item.toUpperCase()}</Text>
        </View>
      ))}
    </View>
  );

  const renderHeader = () => (
    <Header
      detail
      onPressLeft={goBack}
      iconLeft={images.icon_back}
      customRight={() => (
        <TouchableOpacity style={styles.likeView} onPress={handleLike}>
          <Text style={styles.likeNumber}>{foodValue?.totalLikes || 0}</Text>
          <RNImage
            resizeMode="center"
            style={styles.iconHeart}
            source={isLiked ? images.ic_love : images.ic_nonlove}
          />
        </TouchableOpacity>
      )}
    />
  );

  if (isEmpty(foodValue)) {
    return null;
  }
  // console.log(foodValue);
  return (
    <View style={styles.container}>
      {renderHeader()}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ paddingBottom: responsive({ d: 70 }) }}>
          <View style={styles.nameView}>
            {/* {foodValue.name} */}
            <Text style={styles.nameText}>{foodValue.name}</Text>
            {/* <TouchableOpacity style={styles.likeView} onPress={handleLike}>
              <Text style={styles.likeNumber}>
                {foodValue?.totalLikes || 0}
              </Text>
              <RNImage
                resizeMode="center"
                style={styles.iconHeart}
                source={isLiked ? images.ic_love : images.ic_nonlove}
              />
            </TouchableOpacity> */}
          </View>
          <Carousel
            data={foodValue.images}
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
          <View style={styles.tagInfoView}>
            <View style={styles.infoView}>
              <View style={styles.flexRowCenter}>
                <RNImage
                  resizeMode="contain"
                  style={styles.iconInfo}
                  source={images.ic_clock}
                />
                <Text style={styles.infoText}>
                  {+foodValue.timeCook / 60}
                  {' '}
                  mins
                </Text>
              </View>
              <View style={[styles.flexRowCenter, styles.marginLeftSmall]}>
                <RNImage
                  resizeMode="contain"
                  style={styles.iconInfo}
                  source={images.ic_ingredient}
                />
                <Text>{`${foodValue.ingredients?.length} ingredients`}</Text>
              </View>
              <View style={[styles.flexRowCenter, styles.marginLeftSmall]}>
                <RNImage
                  resizeMode="contain"
                  style={styles.iconInfo}
                  source={images.ic_fire}
                />
                <Text>{`${foodValue.calories} calories`}</Text>
              </View>
            </View>
            {renderTags()}
          </View>

          <View style={styles.ingredientsView}>
            <CollapseView>
              <Text style={styles.ingredientsTitle}>INGREDIENTS</Text>
              {renderIngredients()}

              <View style={styles.servingBox}>
                <TouchableOpacity
                  onPress={handleSubtractServe}
                  style={styles.buttonServing}
                >
                  <RNImage
                    resizeMode="center"
                    style={styles.iconServing}
                    source={images.ic_minus}
                  />
                </TouchableOpacity>
                <Text>
                  {`${serveForPeople} ${appropriatePluralisation(
                    serveForPeople,
                    'serving',
                    'servings',
                  )}`}
                </Text>
                <TouchableOpacity
                  onPress={handleAddServe}
                  style={{ ...styles.buttonServing, alignItems: 'flex-end' }}
                >
                  <RNImage
                    resizeMode="center"
                    style={styles.iconServing}
                    source={images.ic_plus}
                  />
                </TouchableOpacity>
              </View>
            </CollapseView>
          </View>
          <View style={styles.instructionView}>
            <CollapseView>
              <Text style={styles.ingredientsTitle}>INSTRUCTIONS</Text>
              {renderInstruction()}
            </CollapseView>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default FoodDetail;
