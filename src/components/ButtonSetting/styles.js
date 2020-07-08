import { StyleSheet } from 'react-native';
import { responsive } from 'utils';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  image: {
    alignItems: 'center',
  },
  btn: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  commonText: {
    textAlignVertical: 'center',
    fontSize: responsive({ f: 17 }),
    color: '#5E5E5E',
    paddingLeft: responsive({ d: 10 }),
  },
});
