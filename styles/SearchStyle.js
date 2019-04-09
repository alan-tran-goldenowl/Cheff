import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  searchView: {
    justifyContent: 'center',
  },
  search: {
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 1,
    borderColor: '#dddddd',
    shadowOffset: { width: 0, height: 0 },
    shadowColor: 'white',
    shadowOpacity: 1,
    elevation: 0,
    alignSelf: 'center',
  },
});
