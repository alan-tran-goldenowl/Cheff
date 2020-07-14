import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

import images from 'assets/images';

import styles from './styles';

const ButtonSetting = ({
  image, onPress, text, rightContent,
}) => {
  const renderRight = () => (
    <Image
      resizeMode="center"
      style={styles.image}
      source={images.ic_move}
    />
  );

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.center}>
        <Image
          resizeMode="center"
          style={styles.image}
          source={image}
        />
      </View>
      <View style={styles.btn}>
        <View>
          <Text style={styles.commonText}>
            {text}
          </Text>
        </View>
      </View>
      <View style={styles.center}>
        { rightContent ? rightContent() : renderRight()}
      </View>
    </TouchableOpacity>
  );
};

export default ButtonSetting;
