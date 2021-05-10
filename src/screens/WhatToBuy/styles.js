import { StyleSheet } from 'react-native';
import { responsive } from 'utils';
import themeStyles, { COLOR } from 'styles/theme';


export default StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: COLOR.WHITE_COLOR,
  },
  keyboard: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: COLOR.WHITE_COLOR,
    flex: 1,
    paddingBottom: responsive({ d: 20 }),
    marginBottom: responsive({ d: 20 }),
    paddingHorizontal: responsive({ d: 30 }),
  },
  titleText: {
    fontSize: responsive({ f: 20 }),
    color: COLOR.TEXT_SECONDARY_COLOR,
    marginBottom: responsive({ d: 30 }),
  },
  containerTitle: {
    borderWidth: 0.2,
    borderColor: COLOR.borderColor,
    paddingVertical: responsive({ d: 10 }),
    paddingHorizontal: responsive({ d: 10 }),
    borderRadius: 3,
    fontSize: 14,
  },
  containerTodo: {
    borderWidth: 1,
    borderColor: COLOR.borderColor,
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
  picker: {
    marginTop: responsive({ d: 30 }),
  },
  note: {
    marginTop: responsive({ d: 30 }),
  },
  textNote: {
    fontSize: responsive({ f: themeStyles.FONT_SIZE_NORMAL }),
    color: 'black',
  },
  textOptional: {
    fontSize: responsive({ f: themeStyles.FONT_SIZE_NORMAL }),
    color: 'gray',
  },
  viewDate: {
    marginTop: responsive({ d: 40 }),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnCreate: {
    marginBottom: responsive({ d: 35 }),
    marginHorizontal: responsive({ d: 30 }),
  },
  pickerDate: {
    marginRight: responsive({ d: 30 }),
  },
  alarm: {
    flexDirection: 'row',
    marginTop: responsive({ d: 30 }),
    alignContent: 'center',
    justifyContent: 'center',
  },
  textAlarm: {
    fontSize: responsive({ f: themeStyles.FONT_SIZE_NORMAL }),
    color: COLOR.TEXT_SECONDARY_COLOR,
    flex: 1,
  },
});
