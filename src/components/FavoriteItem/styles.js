import { StyleSheet } from 'react-native';
import { responsive, device } from 'utils';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginLeft: responsive({ d: 35 }),
    marginRight: responsive({ d: 35 }),
    marginTop: responsive({ d: 30 }),
  },
  itemFood: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    // paddingVertical: responsive({ d: 15 }),
    // justifyContent: 'space-between',
    // alignItems: 'center',
    alignContent: 'space-between',
    // height: responsive({ h: 180 }),
  },
  imageFood: {
    width: device.width / 3,
    // height: responsive({ h: 60 }),
    borderRadius: 5,
    marginRight: responsive({ d: 20 }),
  },
  infomationFood: {
    flex: 3,
    display: 'flex',
  },
  imageFoodCover: {
    width: '100%',
    height: responsive({ h: 60 }),
    borderRadius: 5,
    marginBottom: responsive({ d: 25 }),
  },
  foodName: {
    fontSize: responsive({ f: 14 }),
    color: 'black',
    // flex: 3,
    marginBottom: responsive({ d: 10 }),
  },
  timeStamp: {
    fontSize: responsive({ f: 11 }),
    color: '#666',
    marginLeft: responsive({ d: 10 }),
  },
  icon: {
    height: responsive({ h: 12 }),
    width: responsive({ h: 12 }),
  },
  like: {
    fontSize: responsive({ f: 11 }),
    color: '#666',
    marginRight: responsive({ d: 10 }),
  },
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
  line: { backgroundColor: '#dddddd', height: 1 },
  timeStampContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  likeContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  footer: {
    // marginBottom: responsive({ d: 20 }),
    // flex: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tagView: {
    borderRadius: 2,
    marginRight: responsive({ d: 25 }),
    backgroundColor: 'rgb(226,226,226)',
    paddingHorizontal: responsive({ d: 5 }),
    marginBottom: responsive({ d: 12 }),
  },
  tagText: {
    padding: responsive({ d: 10 }),
    color: 'rgb(68,68,68)',
  },
});
