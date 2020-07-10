import { StyleSheet } from 'react-native';
import { responsive } from 'utils';
import themeStyles from 'styles/theme';

export default StyleSheet.create({
  button: {
    borderRadius: 4,
    alignItems: 'center',
    paddingVertical: responsive({ d: 30 }),
    justifyContent: 'center',
    backgroundColor: '#377AFD',
  },
  text: {
    color: '#ffff',
    fontWeight: 'bold',
    fontSize: responsive({ f: themeStyles.FONT_SIZE_NORMAL }),
  },
});
