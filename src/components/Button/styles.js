import { StyleSheet } from 'react-native';
import { responsive } from 'utils';

export default StyleSheet.create({
  button: {
    borderRadius: 4,
    alignItems: 'center',
    paddingVertical: responsive({ d: 30 }),
    justifyContent: 'center',
    backgroundColor: '#377AFD',
  },
  text: {
    color: '#ffff',
    fontWeight: 'bold',
    fontSize: responsive({ f: 15 }),
  },
});
