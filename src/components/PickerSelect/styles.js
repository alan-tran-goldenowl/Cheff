import { StyleSheet } from 'react-native';
import { responsive } from 'utils';
import themeStyles from 'styles/theme';

export default StyleSheet.create({
  container: {
    borderBottomColor: '#dddd',
    borderBottomWidth: 1,
    paddingBottom: responsive({ d: 10 })
  },
  title: {
    marginBottom: responsive({ d: 10 }),
    color: 'black',
    fontSize: responsive({ f: themeStyles.FONT_SIZE_NORMAL }),
  },
  errorText: {
    color: 'red',
    fontSize: responsive({ f: themeStyles.FONT_SIZE_SMALL }),
    marginTop:  responsive({ d: 10 })
  }
});
