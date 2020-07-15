import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import images from 'assets/images';

import styles from './styles';

const Header = ({
  onPressLeft, iconLeft, logoVisible, title, onPressRight, iconRight, rightText, customRight,
}) => (
  <View style={styles.header}>
    <TouchableOpacity
      style={[styles.button, { alignItems: 'flex-start' }]}
      onPress={onPressLeft}
    >
      {iconLeft && (
      <Image style={styles.icon} resizeMode="center" source={iconLeft} />
      )}
    </TouchableOpacity>
    <View style={styles.logoVisible}>
      {logoVisible && (
        <Image style={styles.logo} source={images.logo_cheff} />
      )}
      {title && (
      <Text style={styles.title}>
        {title}
      </Text>
      )}
    </View>
    <TouchableOpacity
      style={[styles.button, { alignItems: 'flex-end' }]}
      onPress={onPressRight}
    >
      {iconRight && (
      <Image style={styles.icon} resizeMode="center" source={iconRight} />
      )}
      {rightText && (
        <Text style={styles.rightText}>
          {rightText}
        </Text>
      )}
      {customRight && customRight()}
    </TouchableOpacity>
  </View>
);

export default Header;
