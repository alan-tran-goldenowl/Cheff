import { StyleSheet } from 'react-native';
import { responsive } from 'utils';

const styles = StyleSheet.create({
  linearGradient: {
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
    height: responsive({ h: 20 }),
  },
  iconUpDown: {
    width: responsive({ h: 15 }),
    height: responsive({ h: 15 }),
  },
  iconView: {
    alignItems: 'center',
    borderBottomWidth: 0.7,
    justifyContent: 'center',
    paddingVertical: responsive({ d: 10 }),
    borderBottomColor: 'rgb(217,217,217)',
    paddingRight: responsive({ d: 15 }),
  },
  container: { flex: 1, overflow: 'hidden' },
});

export default styles;
