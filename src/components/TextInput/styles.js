import { StyleSheet } from 'react-native';
import { responsive } from 'utils';

export default StyleSheet.create({
  viewTextInput: {
    margin: responsive({ d: 20 }),
  },
  textInput: {
    fontSize: responsive({ f: 14 }),
  },
  text: {
    width: responsive({ h: 200 }),
    fontSize: responsive({ f: 17 }),
    color: 'black',
  },
});
