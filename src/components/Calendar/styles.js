import { StyleSheet } from 'react-native';
import { responsive } from 'utils';

export default StyleSheet.create({
  headerCalendar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: responsive({ d: 10 }),
    paddingRight: responsive({ d: 10 }),
    alignItems: 'center',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  dayHeaderCalendar: {
    marginTop: 2,
    marginBottom: 7,
    width: responsive({ h: 32 }),
    textAlign: 'center',
    color: 'black',
  },
  dotCalendar: {
    width: responsive({ h: 4 }),
    height: responsive({ h: 4 }),
    marginTop: responsive({ d: -35 }),
    marginLeft: responsive({ d: 35 }),
    borderRadius: 3,
    opacity: 1,
  },
  selectedDotCalendar: {
    backgroundColor: 'red',
  },
  calendar: {
    width: '100%',
    paddingLeft: 0,
    paddingRight: 0,
  },
});
