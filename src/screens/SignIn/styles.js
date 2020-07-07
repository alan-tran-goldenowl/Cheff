import { StyleSheet } from 'react-native';
import { responsive } from 'utils';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  textSignInGG: {
    flexDirection: 'row',
    height: responsive({ h: 40 }),
    width: '90%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  textSignInFb: {
    height: responsive({ h: 40 }),
    width: '90%',
    margin: responsive({ d: 35 }),
    backgroundColor: '#295eb5',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  image: {
    width: responsive({ h: 15 }),
    height: responsive({ h: 15 }),
    left: 0,
    marginLeft: responsive({ d: 25 }),
    position: 'absolute',
  },
  textGG: {
    color: '#666',
    fontWeight: 'bold',
    fontSize: responsive({ f: 16 }),
  },
  textFB: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: responsive({ f: 16 }),
  },
});
