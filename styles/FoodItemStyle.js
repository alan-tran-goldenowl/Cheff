import { StyleSheet } from 'react-native';
import { responsive } from '../utils';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginLeft: responsive({ d: 35 }),
    marginRight: responsive({ d: 35 }),
    marginTop: responsive({ d: 30 }),
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
  imageFoodCover: {
    width: '100%',
    height: responsive({ h: 120 }),
    borderRadius: 5,
  },
  foodName: {
    fontSize: responsive({ f: 14 }),
    color: 'black',
    flex: 3,
  },
  timeStamp: {
    fontSize: responsive({ f: 11 }),
    color: '#666',
    marginLeft: responsive({ d: 10 }),
  },
  icon: {
    height: responsive({ h: 12 }),
    width: responsive({ h: 12 }),
  },
  like: {
    fontSize: responsive({ f: 11 }),
    color: '#666',
    marginRight: responsive({ d: 10 }),
  },
});
