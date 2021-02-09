import { StyleSheet } from 'react-native';
import { responsive } from 'utils';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  changeTypeListView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginVertical: responsive({ d: 15 }),
    paddingHorizontal: responsive({ h: 15 }),
    backgroundColor: 'white',
  },
  changeTypeList: {
    width: 30,
    height: 30,
  },
  iconTypeList: {
    width: '100%',
    height: '100%',
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
