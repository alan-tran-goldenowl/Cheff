import { StyleSheet } from 'react-native';
import { device, responsive } from 'utils';
import theme from 'styles/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  nameView: {
    height: responsive({ h: 45 }),
    marginLeft: responsive({ d: 30 }),
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    justifyContent: 'space-between',
    marginBottom: responsive({ d: 15 }),
  },
  nameText: {
    fontSize: responsive({ f: 24 }),
    color: 'black',
    marginTop: responsive({ d: 15 }),
  },
  rowView: {
    // minHeight: responsive({ h: 30 }),
    width: '100%',
    height: 'auto',
    paddingVertical: responsive({ d: 15 }),
    display: 'flex',
    // flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
  },
  listItem: {
    alignItems: 'flex-start',
  },
  iconView: {
    width: responsive({ h: 40 }),
    paddingLeft: responsive({ d: 30 }),
  },
  icon: {
    width: responsive({ h: 12 }),
    height: responsive({ h: 12 }),
  },
  typeIcon: {
    width: responsive({ h: 8 }),
    height: responsive({ h: 8 }),
  },
  textView: {
    display: 'flex',
    // paddingLeft: responsive({ d: 10 }),
    // paddingRight: responsive({ d: 10 }),
    width: device.width - responsive({ h: 60 }),
    // paddingBottom: responsive({ d: 15 }),
    flexDirection: 'row',
  },
  textViewWithIconInFront: {
    paddingLeft: 0,
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: 'hsl(0, 0%, 95%)',
  },
  notification: {
    paddingLeft: responsive({ d: 30 }),
    paddingRight: responsive({ d: 30 }),
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#65DB5E',
    flexDirection: 'row',
    paddingVertical: responsive({ d: 10 }),
  },
  text: {
    fontSize: responsive({ f: theme.FONT_SIZE_NORMAL }),
    color: theme.COLOR.BLACK_COLOR,
  },
  textEdit: {
    fontSize: responsive({ f: theme.FONT_SIZE_NORMAL }),
    color: theme.COLOR.WHITE_COLOR,
  },
});
