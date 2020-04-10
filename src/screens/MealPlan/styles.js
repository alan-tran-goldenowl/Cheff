import { StyleSheet } from 'react-native';
import { responsive, device } from 'utils';

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
  welcomeView: {
    height: responsive({ h: 40 }),
    flexDirection: 'row',
    marginLeft: responsive({ d: 25 }),
    marginBottom: responsive({ d: 15 }),
  },
  nameText: {
    fontSize: responsive({ f: 16 }),
    color: 'black',
  },
  welcomeView2: {
    height: responsive({ h: 40 }),
    marginLeft: responsive({ d: 55 }),
  },
  welcomeText: {
    fontSize: responsive({ f: 14 }),
    color: '#999',
  },
});
