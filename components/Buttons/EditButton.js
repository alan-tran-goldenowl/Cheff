import React from 'react';
import { withNavigation } from 'react-navigation';
import { Image, TouchableOpacity } from 'react-native';

import { responsive } from '../../utils';

export default withNavigation(({ navigation = {}, routeName = '', params = {} }) => {
  const goToScreen = () => {
    navigation.navigate(routeName, { ...params });
  };

  return (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
      }}
      onPress={goToScreen}
    >
      <Image
        resizeMode="center"
        style={{
          width: responsive({ h: 50 }),
          height: responsive({ h: 50 }),
        }}
        source={require('../../assets/images/ic_ingredient.png')}
      />
    </TouchableOpacity>
  );
});
