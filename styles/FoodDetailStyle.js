import { StyleSheet } from 'react-native';
import { responsive } from '../utils';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  iconHeart: {
    height: responsive({ h: 30 }),
    width: responsive({ h: 30 }),
  },
  likeView: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingRight: responsive({ d: 30 }),
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
    borderBottomColor: 'rgb(217,217,217)',
    borderBottomWidth: 0.7,
    marginBottom: responsive({ d: 30 }),
  },
  nameText: {
    fontSize: responsive({ f: 20 }),
    fontWeight: '400',
  },
  flexRowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
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
    borderBottomColor: 'rgb(217,217,217)',
    borderBottomWidth: 0.7,
    marginBottom: responsive({ d: 30 }),
    paddingBottom: responsive({ d: 40 }),
  },
  flatList: {
    flexWrap: 'wrap',
  },
  tagView: {
    marginRight: responsive({ d: 10 }),
    borderRadius: 2,
    backgroundColor: 'rgb(226,226,226)',
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
    borderWidth: 0.7,
    marginRight: responsive({ d: 30 }),
  },
  iconServing: {
    height: responsive({ h: 25 }),
    width: responsive({ h: 25 }),
  },
  instructionView: {
    marginLeft: responsive({ d: 30 }),
    marginBottom: responsive({ d: 30 }),
  },
});
