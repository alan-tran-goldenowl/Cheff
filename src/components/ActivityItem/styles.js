import { StyleSheet } from 'react-native';
import { responsive } from 'utils';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: responsive({ d: 25 }),
  },
  icon: {
    marginRight: responsive({ d: 30 }),
    // marginTop: responsive({ d: 10 }),
    fontSize: responsive({ f: 20 }),
  },
  time: {
    color: 'gray',
    paddingTop: responsive({ d: 10 }),
  },
  text: {
    fontSize: responsive({ f: 17 }),
  },
  textContainer: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#ddd',
    paddingBottom: responsive({ d: 25 }),
    flex: 1,
  },
});

export default styles;
