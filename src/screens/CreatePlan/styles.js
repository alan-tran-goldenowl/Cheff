import { StyleSheet } from 'react-native';
import { device } from 'utils';

export default StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    paddingBottom: 20,
    marginBottom: 20,
  },
  iconBack: {
    height: 15,
    width: 15,
    marginLeft: 10,
  },
  text: {
    minHeight: 40,
    marginLeft: 20,
    marginTop: 0,
    paddingTop: 10,
    fontSize: 15,
  },
  buttonView: {
    height: 50,
    color: '#fff',
    display: 'flex',
    borderRadius: 4,
    paddingVertical: 0,
    alignItems: 'center',
    marginHorizontal: 20,
    paddingHorizontal: 20,
    justifyContent: 'center',
    width: device.width - 40,
    backgroundColor: '#377AFD',
    marginBottom: 20,

  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
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
    flexDirection: 'row',
    flex: 1,
    paddingTop: 10,
  },
  note: {
    marginTop: 25,
    marginBottom: 50,
    marginHorizontal: 20,
  },
});
