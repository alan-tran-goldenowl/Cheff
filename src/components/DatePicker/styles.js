import { StyleSheet } from 'react-native';
import { responsive } from 'utils';
import themeStyles from 'styles/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: 'black',
    fontSize: responsive({ f: themeStyles.FONT_SIZE_SMALL }),
    fontWeight: '500',
  },
  date: {
    flexDirection: 'row',
  },
  value: {
    flex: 1,
    color: 'black',
    fontSize: responsive({ f: themeStyles.FONT_SIZE_SMALL }),
  },
  errorText: {
    color: 'red',
    fontSize: responsive({ f: themeStyles.FONT_SIZE_SMALL }),
    marginTop: responsive({ d: 10 }),
  },

});
