import { StyleSheet } from 'react-native';
import { COLOR } from 'styles/theme';


export default StyleSheet.create({
  container: {
    backgroundColor: COLOR.WHITE_COLOR,
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomColor: COLOR.BORDER_COLOR,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  notes: {
    marginBottom: 10,
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
  },
  listContainer: {
    flex: 1,
    padding: 25,
  },
  listTitle: {
    fontSize: 16,
    marginBottom: 20,
    color: '#666',
  },
  listButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  listIcon: {
    fontSize: 26,
    color: '#666',
    width: 60,
  },
  listLabel: {
    fontSize: 16,
  },
});
