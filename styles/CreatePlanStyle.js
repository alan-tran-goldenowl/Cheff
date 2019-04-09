import { StyleSheet } from 'react-native';
import { device } from '../utils';

export default StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  iconBack: {
    height: 15,
    width: 15,
    marginLeft: 10,
  },
  text: {
    marginLeft: 20,
    marginTop: 10,
    fontSize: 15,
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 12,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
});
