import { device } from '../utils';

const { width } = device;

export default {
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  nameView: {
    height: 55,
    marginLeft: 17,
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    justifyContent: 'space-between',
  },
  nameText: {
    fontSize: 24,
    color: 'black',
    marginTop: 15,
  },
  rowView: {
    minHeight: 50,
    width: '100%',
    height: 'auto',
    paddingTop: 15,
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  iconView: {
    width: 60,
    paddingLeft: 17,
  },
  icon: {
    width: 20,
    height: 20,
  },
  typeIcon: {
    width: 8,
    height: 8,
  },
  textView: {
    display: 'flex',
    paddingLeft: 10,
    paddingRight: 15,
    width: width - 60,
    paddingBottom: 15,
    flexDirection: 'row',
  },
  textViewWithIconInFront: {
    paddingLeft: 0,
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: 'hsl(0, 0%, 95%)',
  },
};
