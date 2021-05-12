import React from 'react';
import {
  Text, View, Image, TouchableOpacity,
} from 'react-native';

import images from 'assets/images';

import { device } from 'utils';
import styles from './styles';


const Header = ({
  onPressLeft,
  iconLeft,
  logoVisible,
  title,
  onPressRight,
  iconRight,
  rightText,
  customRight,
  type,
  bigTitle,
}) => (
  <View style={[
    styles.header,
    bigTitle
      ? { minHeight: device.height / 20 }
      : { height: device.height / 20 }]}
  >
    <TouchableOpacity
      style={[
        styles.button,
        { alignItems: 'flex-start' },
        type === 'back' ? styles.noPadding : null,
      ]}
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
      {bigTitle && <Text style={styles.bigTitle}>{bigTitle}</Text>}
      {title && <Text style={styles.title}>{title}</Text>}
    </View>
    <TouchableOpacity
      style={[styles.button, { alignItems: 'flex-end' }]}
      onPress={onPressRight}
    >
      {iconRight && (
      <Image style={styles.icon} resizeMode="center" source={iconRight} />
      )}
      {rightText && <Text style={styles.rightText}>{rightText}</Text>}
      {customRight && customRight()}
    </TouchableOpacity>
  </View>
);

export default Header;
