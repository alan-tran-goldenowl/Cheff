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
  row:{
    flexDirection:'row', 
    justifyContent:'space-between', 
    paddingVertical:responsive({ h: 3.5 })
  },
  icon:{
    width:responsive({ h:10 }),
    height:responsive({ h:10 })
  }
});
