import { StyleSheet } from 'react-native';
import { device, responsive } from 'utils';

export default StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  image: {
    height: responsive({ h: 110 }),
    width: responsive({ h: 110 }),
    borderRadius: responsive({ h: 110 }) / 2,
  },
  viewImage: {
    alignItems: 'center',
    marginTop: responsive({ d: 30 }),
  },
  btnChangeImage: {
    alignItems: 'center',
    marginTop: responsive({ d: 15 }),
  },
  textChangeImage: {
    color: 'blue',
    fontSize: responsive({ f: 15 }),
  },
  viewTextInput: {
    margin: responsive({ d: 20 }),
  },
  textLinkAcc: {
    fontSize: responsive({ f: 19 }),
    color: '#999',
  }
});
