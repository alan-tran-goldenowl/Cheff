import { StyleSheet } from 'react-native';
import { responsive } from 'utils';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: 'black',
    fontSize: responsive({ f: 15 }),
    fontWeight: '500',
  },
  date: {
    flexDirection: 'row',
    paddingTop: responsive({ d: 10 }),
    paddingBottom: responsive({ d: 10 }),
    borderBottomWidth: 0.7,
    borderBottomColor: '#dddd',
  },
  value: {
    flex: 1,
    color: 'black',
    fontSize: responsive({ f: 15 })
  },

});
