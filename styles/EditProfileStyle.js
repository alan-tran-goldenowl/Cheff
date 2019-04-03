import { StyleSheet } from 'react-native';
import { device, responsive } from '../utils';

export default StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  header: {
    backgroundColor: '#ffffff',
    marginTop: responsive({ d: 30 }),
    height: device.height / 20,
    width: null,
    flexDirection: 'row',
    marginHorizontal: responsive({ d: 10 }),
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconBack: {
    height: responsive({ h: 20 }),
    width: responsive({ h: 20 }),
    marginLeft: responsive({ d: 10 }),
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
  title: {
    fontSize: responsive({ f: 15 }),
  },
  saveText: {
    fontSize: responsive({ f: 14 }),
    marginRight: responsive({ d: 10 }),
  },
});
