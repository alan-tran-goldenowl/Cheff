import { StyleSheet } from 'react-native';
import { device, responsive } from 'utils';

export default StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  imageContainer: {
    height: responsive({ h: 110 }),
    width: responsive({ h: 110 }),
    borderRadius: responsive({ h: 110 }) / 2,
  },
  image: {
    height: responsive({ h: 110 }),
    width: responsive({ h: 110 }),
    borderRadius: responsive({ h: 110 }) / 2,
  },
  text: {
    width: responsive({ h: 200 }),
    fontSize: responsive({ f: 17 }),
    color: 'black',
  },
});
