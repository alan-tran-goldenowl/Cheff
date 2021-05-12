import { StyleSheet } from 'react-native';
import { responsive } from 'utils';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  iconHeart: {
    height: responsive({ h: 35 }),
    width: responsive({ h: 35 }),
  },
  likeView: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    right: responsive({ d: -20 }),
    marginRight: responsive({ d: 10 }),
  },
  likeNumber: {
    fontSize: responsive({ f: 15 }),
  },
  imageFoodCover: {
    height: responsive({ h: 120 }),
    marginRight: responsive({ d: 20 }),
    borderRadius: 5,
  },
  nameView: {
    paddingVertical: responsive({ d: 20 }),
    marginLeft: responsive({ d: 30 }),
    marginRight: responsive({ d: 30 }),
    borderBottomColor: 'rgb(217,217,217)',
    borderBottomWidth: 0.7,
    marginBottom: responsive({ d: 30 }),
    // display: 'flex',
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'space-between',
  },
  nameText: {
    fontSize: responsive({ f: 20 }),
    fontWeight: '400',
  },
  flexRowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: responsive({ d: 5 }),
  },
  infoText: {
    color: 'rgb(68,68,68)',
    fontSize: responsive({ f: 15 }),
  },
  infoView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: responsive({ d: 20 }),
  },
  tagInfoView: {
    marginLeft: responsive({ d: 30 }),
    marginRight: responsive({ d: 30 }),
    borderBottomColor: 'rgb(217,217,217)',
    borderBottomWidth: 0.7,
    marginBottom: responsive({ d: 30 }),
    paddingBottom: responsive({ d: 40 }),
  },
  likeSection:{
    // marginLeft: responsive({ d: 30 }),
    borderBottomColor: 'rgb(217,217,217)',
    borderBottomWidth: 0.7,
    marginBottom: responsive({ d: 10 }),
    paddingBottom: responsive({ d: 10 }),
  },
  flatList: {
    flexWrap: 'wrap',
  },
  tagView: {
    borderRadius: 2,
    marginRight: responsive({ d: 25 }),
    backgroundColor: 'rgb(226,226,226)',
    paddingHorizontal: responsive({ d: 5 }),
    marginBottom: responsive({ d: 5 }),
  },
  tagText: {
    padding: responsive({ d: 10 }),
    color: 'rgb(68,68,68)',
  },
  iconInfo: {
    height: responsive({ h: 12 }),
    width: responsive({ h: 12 }),
    marginRight: responsive({ d: 10 }),
  },
  ingredientsView: {
    marginLeft: responsive({ d: 30 }),
    marginRight: responsive({ d: 30 }),
    marginBottom: responsive({ d: 30 }),
  },
  ingredientsTitle: {
    fontSize: responsive({ f: 16 }),
    fontWeight: '400',
    paddingBottom: responsive({ d: 20 }),
  },
  ingredientsText: {
    fontSize: responsive({ f: 14 }),
    color: 'rgb(68,68,68)',
    lineHeight: 25,
  },
  servingBox: {
    marginTop: responsive({ d: 20 }),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: 'rgb(217,217,217)',
    borderLeftWidth: 0.25,
    borderRightWidth: 0.25,
    borderTopWidth: 1.5,
    borderBottomWidth: 1.5,
    marginBottom: responsive({ d: 10 }),

    // marginRight: responsive({ d: 30 }),
    padding: responsive({ d: 20 }),
  },
  iconServing: {
    height: responsive({ h: 10 }),
    width: responsive({ h: 10 }),
  },
  instructionView: {
    marginLeft: responsive({ d: 30 }),
    marginRight: responsive({ d: 30 }),
    marginBottom: responsive({ d: 30 }),
  },
  rowWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  buttonServing: {
    width: '30%',
    paddingVertical: responsive({ d: 7 }),
  },
  marginLeftSmall: {
    marginLeft: responsive({ d: 20 }),
  },
});
