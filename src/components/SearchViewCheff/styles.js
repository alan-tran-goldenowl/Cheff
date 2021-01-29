import { StyleSheet } from 'react-native';
import { responsive } from 'utils';

export default StyleSheet.create({
  search: {
    display: 'flex',
    height: responsive({ h: 40 }),
    width: '90%',
    flexDirection: 'row',
    backgroundColor: 'white',
    borderWidth: 0.2,
    borderRadius: 4,
    borderColor: '#dddddd',
    shadowOffset: { width: 2, height: 2 },
    shadowColor: '#000',
    shadowOpacity: 0.1,
    elevation: 0.5,
    alignSelf: 'center',
  },
  icon: {
    height: responsive({ h: 20 }),
    width: responsive({ h: 20 }),
    marginLeft: responsive({ d: 10 }),
  },
  text: {
    // width: '100%',
    fontSize: responsive({ f: 14 }),
    color: '#bcbcbc',
  },
  iconSearch: {
    height: responsive({ h: 20 }),
    width: responsive({ h: 20 }),
    marginLeft: responsive({ h: 10 }),
    marginRight: responsive({ h: 10 }),
  },
});
