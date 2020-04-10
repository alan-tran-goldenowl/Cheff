import { StyleSheet } from 'react-native';
import { responsive } from 'utils';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  searchView: {
    position: 'relative',
    height: responsive({ h: 150 }),
    backgroundColor: 'white',
    marginTop: responsive({ d: 10 }),
  },
  backgroundImage: {
    top: 0,
    left: 0,
    zIndex: 1,
    position: 'absolute',
    height: responsive({ h: 130 }),
    width: '100%',
  },
  search: {
    alignItems: 'center',
    position: 'absolute',
    zIndex: 2,
    height: responsive({ h: 150 }),
    justifyContent: 'flex-end',
    width: '100%',
  },
});
