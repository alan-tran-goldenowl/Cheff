import { StyleSheet } from 'react-native';
import { responsive } from 'utils';
import themeStyles from 'styles/theme';
import theme from 'styles/theme';

export default StyleSheet.create({
  textInput: {
    fontSize: responsive({ f: themeStyles.FONT_SIZE_NORMAL }),
  },
  text: {
    fontSize: responsive({ f: themeStyles.FONT_SIZE_MEDIUM }),
    color: 'black',
  },
  row:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: responsive({ h: 3.5 }),
  },
  icon:{
    width: responsive({ h: 10 }),
    height: responsive({ h: 10 })
  },
  errorText:{
    color: 'red',
    fontSize: responsive({ f: themeStyles.FONT_SIZE_SMALL }),
  }
});
