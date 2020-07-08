import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

import images from 'assets/images';

import styles from './styles';

const ButtonSetting = ({ image, onPress, text, rightContent }) => {
  const renderRight = () => (
    <Image
      resizeMode="center"
      style={styles.image}
      source={images.ic_move}
    />
  )

  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <Image
          resizeMode="center"
          style={styles.image}
          source={image}
        />
      </View>
      <View style={styles.btn}>
        <TouchableOpacity
          onPress={onPress}
        >
          <Text style={styles.commonText}>
            {text}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.center}>
        { rightContent ? rightContent() : renderRight()}
      </View>
    </View>
  )
}

export default ButtonSetting;
