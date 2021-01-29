import { StyleSheet } from 'react-native';
import { responsive } from 'utils';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
  searchView: {
    marginTop: responsive({ d: 10 }),
    alignItems: 'center',
  },
});
