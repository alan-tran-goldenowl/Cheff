import { StyleSheet } from 'react-native';
import { responsive } from 'utils';

export default StyleSheet.create({
  container: {
    borderBottomColor: '#dddd',
    borderBottomWidth: 1,
    paddingBottom: responsive({ d: 10 })
  },
  title: {
    marginBottom: responsive({ d: 10 }),
    color: 'black',
    fontSize: responsive({ f: 15 })
  },
});
