import { Dimensions, StyleSheet } from 'react-native';

const { height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    width: null,
    marginTop: 30,
    height: height / 20,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
  },
});
