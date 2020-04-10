import { StyleSheet } from 'react-native';
import { responsive, device } from 'utils';

export default StyleSheet.create({
  imageFoodCoverSearch: {
    width: device.width / 3,
    height: responsive({ h: 80 }),
    borderRadius: 5,
    marginRight: responsive({ d: 20 }),
  },
  imageFoodSearch: {
    paddingVertical: responsive({ d: 20 }),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerSearch: {
    flex: 1,
    backgroundColor: 'white',
    marginLeft: responsive({ d: 35 }),
  },
  foodNameSearch: {
    fontSize: responsive({ f: 17 }),
    fontWeight: '500',
    color: 'black',
    flex: 3,
  },
});
