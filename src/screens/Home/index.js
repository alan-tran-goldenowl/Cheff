import React from 'react';
import { View, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { useFirebaseConnect } from 'react-redux-firebase';

import SearchViewCheff from 'components/SearchViewCheff';
import HomeTab from 'components/HomeTab/HomeTab';
import Header from 'components/Header';
import images from 'assets/images';
import { FireBase } from 'constants';
import styles from './styles';

const HomeScreen = ({ navigation }) => {
  const user = FireBase.auth().currentUser || {};

  useFirebaseConnect([
    'Food',
    'Type_Food',
    'Favourites',
    'Activity',
    `Plan_To_do/${user.uid}`,
    `Meal_Plan/${user?.uid}`,
  ]);
  const typeFood = useSelector(
    ({
      firebase: {
        ordered: { Type_Food },
      },
    }) => Type_Food || [],
  );

  const CustomHeader = () => (
    <>
      <Header
        logoVisible
        iconLeft={images.icon_side_menu}
        onPressLeft={() => navigation.navigate('Settings')}
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
            editable={false}
          />
        </View>
      </View>
    </>
  );

  return (
    <View style={styles.container}>
      <CustomHeader />
      <HomeTab tab={typeFood} navigation={navigation} />
    </View>
  );
};

export default HomeScreen;
