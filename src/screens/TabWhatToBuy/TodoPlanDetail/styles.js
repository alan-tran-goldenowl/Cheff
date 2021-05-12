import { StyleSheet } from 'react-native';
import { COLOR } from 'styles/theme';
import { responsive } from 'utils';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.WHITE_COLOR,
    flex: 1,
  },
  containerInner: {
    padding: 20,
    // paddingBottom: 150,
  },
  status: {
    fontSize: 12,
  },
  percent: {
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  containerProgress: {
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderBottomWidth: 0.25,
    borderBottomColor: COLOR.BORDER_COLOR,
  },
  title: {
    fontWeight: '500',
  },
  btnCreate: {
    marginBottom: responsive({ d: 35 }),
    marginHorizontal: responsive({ d: 30 }),
  },
});

export default styles;
