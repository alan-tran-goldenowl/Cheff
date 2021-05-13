import { StyleSheet } from 'react-native';
import { responsive, device } from 'utils';
import themeStyles from 'styles/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: responsive({ d: 30 }),
  },
  header: {
    width: null,
    marginTop: responsive({ d: 30 }),
    height: device.height / responsive({ h: 20 }),
    flexDirection: 'row',
    backgroundColor: '#ffffff',
  },
  dayView: {
    height: responsive({ h: 50 }),
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingBottom: responsive({ d: 20 }),
  },
  day: {
    color: 'black',
    fontSize: responsive({ f: 24 }),
  },
  today: {
    color: '#666',
    fontSize: responsive({ f: themeStyles.FONT_SIZE_LARGE }),
  },
});
