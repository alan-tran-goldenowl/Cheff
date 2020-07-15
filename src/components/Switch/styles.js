import { StyleSheet } from 'react-native';
import { responsive } from 'utils';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: responsive({ h: 50 }),
  },
  viewImage: {
    height: '100%',
    justifyContent: 'center',
    flex: 1,
  },
  image: {
    width: responsive({ h: 30 }),
    height: responsive({ h: 30 }),
    marginLeft: responsive({ d: 12 }),
  },
  content: {
    flex: 4,
    height: '100%',
    marginLeft: responsive({ d: 30 }),
    justifyContent: 'center',
  },
  title: {
    fontSize: responsive({ f: 16 }),
  },
  switch: {
    flex: 5,
    height: '100%',
    marginRight: responsive({ d: 16 }),
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});
