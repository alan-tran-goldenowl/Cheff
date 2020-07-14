import React from 'react';
import { View, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { useFirebaseConnect } from 'react-redux-firebase';

import SearchViewCheff from 'components/SearchViewCheff';
import HomeTab from 'components/HomeTab/HomeTab';
import Header from 'components/Header';
import images from 'assets/images';
import styles from './styles';

const HomeScreen = ({ navigation }) => {
  useFirebaseConnect(['Food', 'Type_Food', 'Favourites']);
  const typeFood = useSelector(({ firebase: { ordered: { Type_Food } } }) => Type_Food || []);

  const renderHeader = () => (
    <>
      <Header
        logoVisible
        iconLeft={images.icon_side_menu}
        onPressLeft={() => navigation.navigate('Settings')}
        iconRight={images.ic_push_notification}
      />
      <View style={styles.searchView}>
        <Image
          resizeMode="stretch"
          source={images.img1}
          style={styles.backgroundImage}
        />
        <View style={styles.search}>
          <SearchViewCheff
            moveToSeacrh={() => navigation.navigate('Search')}
            pointerEvents="none"
          />
        </View>
      </View>
    </>
  );

  return (
    <View style={styles.container}>
      {renderHeader()}
      <HomeTab
        tab={typeFood}
        navigation={navigation}
      />
    </View>
  );
};


export default HomeScreen;
