import { StyleSheet } from 'react-native';
import { responsive } from 'utils';
import themeStyles from 'styles/theme';

export default StyleSheet.create({
  container: {
    minHeight: responsive({ h: 50 }),
    width: '100%',
    height: 'auto',
    paddingTop: responsive({ d: 20 }),
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    flex: 1,
  },
  textViewTime: {
    width: '25%',
  },
  touchable: {
    width: '75%',
    display: 'flex',
    paddingBottom: responsive({ d: 15 }),
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'hsl(0, 0%, 95%)',
  },
  iconView: {
    paddingTop: responsive({ d: 5 }),
  },
  iconViewImage: {
    width: responsive({ h: 8 }),
    height: responsive({ h: 8 }),
  },
  textViewSummary: {
    display: 'flex',
    paddingLeft: responsive({ d: 10 }),
  },
  textViewDescription: {
    marginTop: responsive({ d: 10 }),
    color: themeStyles.COLOR.TEXT_SECONDARY_COLOR,
    fontSize: responsive({ f: themeStyles.FONT_SIZE_NORMAL }),
  },
  text: {
    fontSize: responsive({ f: themeStyles.FONT_SIZE_NORMAL }),
    color: themeStyles.COLOR.BLACK_COLOR,
  },
});
