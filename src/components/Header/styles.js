import { StyleSheet, Platform } from 'react-native';
import { device, responsive } from 'utils';

export default StyleSheet.create({
  icon: {
    height: responsive({ h: 15 }),
    width: responsive({ h: 15 }),
    padding: 15,
  },
  header: {
    backgroundColor: '#ffffff',
    marginTop:
      Platform.OS !== 'ios' ? responsive({ d: responsive({ d: 70 }) }) : 0,
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
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '30%',
    paddingHorizontal: responsive({ h: 10 }),
  },
  logoVisible: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
