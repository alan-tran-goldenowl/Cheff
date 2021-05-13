import { StyleSheet } from 'react-native';
import { responsive } from 'utils';
import { COLOR } from 'styles/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  nameView: {
    height: responsive({ h: 45 }),
    marginLeft: responsive({ d: 30 }),
    display: 'flex',
    flexDirection: 'row',
  },
  nameText: {
    fontSize: responsive({ f: 24 }),
    marginTop: responsive({ d: 15 }),
    fontWeight: 'bold',
  },
  inner: {
    paddingLeft: 20,
  },
  boldText: {
    fontWeight: '600',
    fontSize: 16,
  },
  blurText: {
    fontSize: 14,
    marginTop: 10,
    color: COLOR.TEXT_SECONDARY_COLOR,
  },
  editButton: {
    width: 50,
  },
  editText: {
    color: COLOR.BLUE_COLOR,
    textAlign: 'right',
    fontSize: 18,
  },
  deleteButton: {
    borderTopWidth: 0.15,
    borderBottomWidth: 0.15,
    paddingVertical: 10,
    borderTopColor: COLOR.BORDER_COLOR,
    borderBottomColor: COLOR.BORDER_COLOR,
    backgroundColor: COLOR.WHITE_COLOR,
    marginTop: 50,
  },
  deleteText: {
    textAlign: 'center',
    color: 'red',
  },
  backgroundWhite: {
    backgroundColor: 'white',
  },
});
