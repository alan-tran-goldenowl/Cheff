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
  },
  iconBack: {
    height: responsive({ h: 20 }),
    width: responsive({ h: 20 }),
    marginLeft: responsive({ d: 10 }),
  },
  searchView: {
    justifyContent: 'center',
  },
  search: {
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 1,
    borderColor: '#dddddd',
    shadowOffset: { width: 0, height: 0 },
    shadowColor: 'white',
    shadowOpacity: 1,
    elevation: 0,
    alignSelf: 'center',
  },
});
