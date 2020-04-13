import { StyleSheet } from 'react-native';
import { device } from 'utils';

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
    minHeight: 40,
    marginLeft: 20,
    marginTop: 10,
    fontSize: 15,
  },
  buttonView: {
    left: 0,
    bottom: 20,
    height: 50,
    color: '#fff',
    display: 'flex',
    borderRadius: 4,
    paddingVertical: 0,
    position: 'absolute',
    alignItems: 'center',
    marginHorizontal: 20,
    paddingHorizontal: 20,
    justifyContent: 'center',
    width: device.width - 40,
    backgroundColor: '#404aff',
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  buttonText: {
    color: '#fff',
  },
  titleText: {
    fontSize: 20,
    color: '#777',
    marginTop: 40,
    marginLeft: 20,
  },
  hasBottomBorder: {
    paddingBottom: 9,
    borderBottomWidth: 0.7,
    borderBottomColor: '#ddd',
  },
  pickMealTypeView: {
    marginTop: 25,
    marginHorizontal: 20,
  },
  picker: {
    marginLeft: -10,
    marginBottom: -15,
  },
});
