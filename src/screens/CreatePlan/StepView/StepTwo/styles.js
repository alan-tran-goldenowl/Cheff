import { StyleSheet } from 'react-native'
import { COLOR } from 'styles/theme'
import { responsive } from 'utils'

const styles = StyleSheet.create({
  container: {},
  containerTitle: {
    borderWidth: 0.2,
    borderColor: COLOR.BORDER_COLOR,
    paddingVertical: responsive({ d: 10 }),
    paddingHorizontal: responsive({ d: 10 }),
    borderRadius: 3,
    fontSize: 14,
  },
  title: {
    fontSize: responsive({ f: 18 }),
    fontWeight: '700',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.2,
    borderColor: COLOR.BORDER_COLOR,
    overflow: 'hidden',
    marginVertical: 10,
  },
  picker: {
    flex: 3,
    justifyContent: 'space-around',
    padding: 20,
    borderRadius: 5,
    alignItems: 'center',
    borderWidth: 0.2,
    borderColor: COLOR.LIGHT_GRAY_COLOR,
  },
  pickerDate: {
    flex: 3,
    justifyContent: 'space-around',
    padding: 20,
    borderRadius: 5,
    alignItems: 'center',
    borderWidth: 0.2,
    borderColor: COLOR.LIGHT_GRAY_COLOR,
  },
  pickerTitle: {
    fontSize: 12,
    marginBottom: 10,
  },
  pickerValue: {
    fontSize: 16,
    fontWeight: '600',
  },
  flagBottom: {
    position: 'absolute',
    alignSelf: 'center',
    width: 0,
    height: 0,
    marginLeft: 5,
    borderLeftWidth: 15,
    borderLeftColor: COLOR.BLUE_COLOR,
    borderTopWidth: 70,
    borderTopColor: 'transparent',
    borderBottomWidth: 70,
    backgroundColor: 'white',
    borderBottomColor: 'transparent',
  },
  left: {
    backgroundColor: COLOR.BLUE_COLOR,
  },
  leftContent: {
    backgroundColor: COLOR.BLUE_COLOR,
    color: COLOR.WHITE_COLOR,
  },
  spaceSmall: {
    height: 20,
  },
})

export const mealPlanStyles = StyleSheet.create({
  container: {},
  containerTitle: {
    borderWidth: 0.2,
    borderColor: COLOR.BORDER_COLOR,
    paddingVertical: responsive({ d: 10 }),
    paddingHorizontal: responsive({ d: 10 }),
    borderRadius: 3,
    fontSize: 14,
  },
  title: {
    fontSize: responsive({ f: 18 }),
    fontWeight: '700',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  spaceSmall: {
    height: 20,
  },
  picker: {
    borderWidth: 0.2,
    borderColor: COLOR.BORDER_COLOR,
    paddingVertical: responsive({ d: 15 }),
    paddingHorizontal: responsive({ d: 20 }),
    borderRadius: 5,
  },
  rowBetweenCenter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btnSearch: {
    marginLeft: 20,
    fontSize: 16,
    color: COLOR.LIGHT_GRAY_COLOR,
  },
})

export const datePickerStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    borderWidth: 0.3,
    overflow: 'hidden',
    marginVertical: 10,
    borderColor: COLOR.LIGHT_GRAY_COLOR,
    borderRadius: 5,
  },
  picker: {
    flex: 3,
    justifyContent: 'space-around',
    padding: 20,
    borderRadius: 5,
    alignItems: 'center',
    borderColor: COLOR.LIGHT_GRAY_COLOR,
  },
  pickerDate: {
    flex: 3,
    justifyContent: 'space-around',
    padding: 20,
    alignItems: 'center',
  },
  pickerTitle: {
    fontSize: 12,
    marginBottom: 10,
    textAlign: 'center',
  },
  pickerValue: {
    fontSize: 16,
    fontWeight: '600',
  },
  left: {
    backgroundColor: COLOR.BLUE_COLOR,
  },
  leftContent: {
    backgroundColor: COLOR.BLUE_COLOR,
    color: COLOR.WHITE_COLOR,
  },
})

export const searchBar = StyleSheet.create({
  container: {
    flex: 1,
  },
})
export default styles
