import { StyleSheet } from 'react-native'
import { COLOR } from 'styles/theme'

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    marginTop: 15,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  input: {
    borderWidth: 0.2,
    borderColor: COLOR.BORDER_COLOR,
    padding: 10,
    borderRadius: 3,
    fontSize: 14,
    minHeight: 50,
  },
  note: {
    borderWidth: 0.2,
    borderColor: COLOR.BORDER_COLOR,
    padding: 10,
    borderRadius: 3,
    fontSize: 14,
    marginBottom: 10,
  },
})

export default styles
