import { StyleSheet } from 'react-native'
import { COLOR } from 'styles/theme'

export default StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 5,
  },
  titleText: {
    color: COLOR.TEXT_SECONDARY_COLOR,
  },
  containerTitle: {
    borderWidth: 0.2,
    borderColor: COLOR.BORDER_COLOR,
    borderRadius: 3,
    fontSize: 14,
    marginHorizontal: 10,
    padding: 5,
  },
  containerTodo: {
    borderWidth: 1,
    borderColor: COLOR.BORDER_COLOR,
    borderRadius: 3,
    fontSize: 14,
  },
  flexOne: { flex: 1 },
  flexHalf: { flex: 0.5 },
  stickyHeader: {
    backgroundColor: COLOR.WHITE_COLOR,
  },
})
