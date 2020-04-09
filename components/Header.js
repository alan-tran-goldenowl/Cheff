import React from 'react';
import {
  Text,
  View,
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { device, responsive } from '../utils';

const styles = StyleSheet.create({
  icon: {
    height: responsive({ h: 20 }),
    width: responsive({ h: 20 }),
  },
  header: {
    backgroundColor: '#ffffff',
    marginTop: responsive({ d: Platform.OS === 'ios' ? 30 : 60 }),
    height: device.height / 20,
    width: null,
    flexDirection: 'row',
    marginHorizontal: responsive({ d: 10 }),
  },
  title: {
    fontSize: responsive({ f: 15 }),
  },
  logo: {
    resizeMode: 'center',
    width: responsive({ h: 80 }),
  },
  rightText: {
    fontSize: responsive({ f: 14 }),
  },
});

const Header = props => (
  <View style={styles.header}>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={props.onPressLeft}>
        {props.iconLeft && (
          <Image style={styles.icon} resizeMode="center" source={props.iconLeft} />
        )}
      </TouchableOpacity>
    </View>
    <View style={{ flex: 8, justifyContent: 'center', alignItems: 'center' }}>
      {props.logoVisible && (
        <Image style={styles.logo} source={require('../assets/images/logo_cheff.png')} />
      )}
      {props.title && (
      <Text style={styles.title}>
        {props.title}
      </Text>
      )}
    </View>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={props.onPressRight}>
        {props.iconRight && (
          <Image style={styles.icon} resizeMode="center" source={props.iconRight} />
        )}
        {props.rightText && (
        <Text style={styles.rightText}>
          {props.rightText}
        </Text>
        )}
        {props.customRight && props.customRight()}
      </TouchableOpacity>
    </View>
  </View>
);

export default Header;
