import { StyleSheet } from 'react-native';
import { responsive } from 'utils';
import { COLOR } from 'styles/theme';


export default StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: COLOR.WHITE_COLOR,
  },
  container: {
    backgroundColor: COLOR.WHITE_COLOR,
    flex: 1,
    paddingBottom: responsive({ d: 20 }),
    marginBottom: responsive({ d: 20 }),
    paddingHorizontal: responsive({ d: 30 }),
    borderTopWidth: 0.5,
    borderTopColor: COLOR.BORDER_COLOR,
    paddingTop: responsive({ d: 20 }),
  },


  btnCreate: {
    marginBottom: responsive({ d: 35 }),
    marginHorizontal: responsive({ d: 30 }),
  },

});
