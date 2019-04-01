import { StyleSheet } from 'react-native';
import { device, responsive } from '../utils';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: '#ffffff',
    marginTop: responsive({ d: 30 }),
    height: device.height / 20,
    width: null,
    flexDirection: 'row',
    marginHorizontal: responsive({ d: 10 }),
  },
  icon: {
    height: responsive({ h: 20 }),
    width: responsive({ h: 20 }),
  },
  list: {
    flex: 1,
    backgroundColor: 'white',
    marginLeft: responsive({ d: 20 }),
    marginRight: responsive({ d: 20 }),
    marginTop: responsive({ d: 20 }),
  },
  itemFood: {
    width: '100%',
    height: responsive({ h: 180 }),
  },
  imageFood: {
    flex: 3,
  },
  infomationFood: {
    flex: 1,
  },
  title: {
    fontSize: responsive({ f: 15 }),
  },
  searchView: {
    marginTop: responsive({ d: 10 }),
    alignItems: 'center',
  },
});
