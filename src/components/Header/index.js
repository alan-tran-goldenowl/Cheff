import React from 'react';
import {
  Text,
  View,
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { device, responsive } from 'utils';

const styles = StyleSheet.create({
  icon: {
    height: responsive({ h: 15 }),
    width: responsive({ h: 15 }),
    padding:15,
  },
  header: {
    backgroundColor: '#ffffff',
    marginTop: responsive({ d: Platform.OS === 'ios' ? 50 : 60 }),
    height: device.height / 20,
    width: null,
    flexDirection: 'row',
    marginHorizontal: responsive({ d: 10 }),
  },
  title: {
    fontSize: responsive({ f: 17 }),
  },
  logo: {
    resizeMode: 'contain',
    width: responsive({ h: 40 }),
  },
  rightText: {
    fontSize: responsive({ f: 17 }),
  },
  button:{
    justifyContent: 'center', 
    alignItems: 'center',
    width:'30%',
    paddingHorizontal:responsive({ h: 10 }),
  }
});

const Header = (props) => (
  <View style={styles.header}>
      <TouchableOpacity 
        style={[styles.button,{alignItems:'flex-start'}]} 
        onPress={props.onPressLeft}
      >
        {props.iconLeft && (
          <Image style={styles.icon} resizeMode="center" source={props.iconLeft} />
        )}
      </TouchableOpacity>
    <View style={{ flex: 8, justifyContent: 'center', alignItems: 'center' }}>
      {props.logoVisible && (
        <Image style={styles.logo} source={require('assets/images/logo_cheff.png')} />
      )}
      {props.title && (
      <Text style={styles.title}>
        {props.title}
      </Text>
      )}
    </View>
      <TouchableOpacity 
        style={[styles.button,{alignItems:'flex-end'}]} 
        onPress={props.onPressRight}
      >
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
);

export default Header;
