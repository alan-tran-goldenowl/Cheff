import { StyleSheet } from 'react-native';
import { responsive } from 'utils';
import themeStyles, { COLOR } from 'styles/theme';


export default StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: COLOR.WHITE_COLOR,
  },

  container: {
    backgroundColor: COLOR.WHITE_COLOR,
    flex: 1,
    paddingBottom: responsive({ d: 20 }),
    marginBottom: responsive({ d: 20 }),
  },
  titleText: {
    fontSize: responsive({ f: 20 }),
    color: COLOR.TEXT_SECONDARY_COLOR,
    marginBottom: responsive({ d: 30 }),
  },
  containerTitle: {
    borderWidth: 0.2,
    borderColor: COLOR.BORDER_COLOR,
    paddingVertical: responsive({ d: 10 }),
    paddingHorizontal: responsive({ d: 10 }),
    borderRadius: 3,
    fontSize: 14,
  },
  containerTodo: {
    borderWidth: 1,
    borderColor: COLOR.BORDER_COLOR,
    paddingVertical: responsive({ d: 10 }),
    paddingHorizontal: responsive({ d: 10 }),
    borderRadius: 3,
    fontSize: 14,
  },
  text: {
    paddingTop: responsive({ d: 40 }),
    fontSize: responsive({ f: themeStyles.FONT_SIZE_NORMAL }),
    color: 'black',
  },

  containerAddMore: { flexDirection: 'row', alignItems: 'center', marginTop: 10 },
  flexOne: { flex: 1 },
  flexHalf: { flex: 0.5 },
  fontWeight500: { fontWeight: '500' },
  marginLeftSmall: { marginLeft: 5 },
  btnAddMore: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
});
