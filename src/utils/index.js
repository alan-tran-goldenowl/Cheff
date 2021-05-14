import { Dimensions, PixelRatio, Platform } from 'react-native';
// import { Notifications } from 'expo';
import images from 'assets/images';
import moment from 'moment';

// export authHelper from './authHelper';
// export storageHelper from './storageHelper';

const { width, height } = Dimensions.get('window');

export const device = {
  width,
  height,
};

const ratio = Math.min(PixelRatio.get(), 3);

const baseSize = (0.85 * height * 3 * 0.67) / (570 * ratio);

export const responsive = ({ f, h, d }) => {
  if (f) return PixelRatio.getPixelSizeForLayoutSize(f) * baseSize * 0.45;
  if (h) return PixelRatio.getPixelSizeForLayoutSize(h) * baseSize * 0.55;
  if (d) return PixelRatio.getPixelSizeForLayoutSize(d) * baseSize * 0.25;
  return null;
};

export const isEmail = email => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

export const actionNameToTypes = actionName => actionName
  .replace(/([A-Z])/g, '_$1')
  .trim()
  .toUpperCase();

export const isIOS = Platform.OS === 'ios';
export const convertDataPicker = (list = []) => list.map(item => ({
  label: item?.value?.name,
  value: item?.key,
  key: item?.key,
}));

export const uuid = name => {
  const S4 = () => ((1 + Math.random()) * 0x10000 || 0).toString(16).substring(1);
  return `${name + S4() + S4()}-${S4()}-${S4()}-${S4()}-${S4()}${S4()}${S4()}`;
};

export const validateEditProfile = fields => {
  const { displayName } = fields;

  const errors = {};

  if (!displayName) errors.displayName = 'Please enter your full name';

  return errors;
};

export const listIconPlan = {
  lunch: images.icon_lunch,
  brunch: images.icon_brunch,
  diner: images.icon_dinner,
  breakfast: images.icon_breakfast,
};

export const dataPickerMeal = [
  { label: 'Breakfast', value: 'breakfast' },
  { label: 'Lunch', value: 'lunch' },
  { label: 'Brunch', value: 'brunch' },
  { label: 'Dinner', value: 'dinner' },
];

export const appropriatePluralisation = (num, sigular, plural) => (num <= 1 ? sigular : plural);

export const formatNumber = (num, digits) => Number.parseFloat(num).toFixed(digits);

const WEEK_LENGTH = 604800000;

export const onCurrentWeek = date => {
  const parseDate = new Date(date);

  const lastMonday = new Date(); // Creating new date object for today
  lastMonday.setDate(lastMonday.getDate() - (lastMonday.getDay() - 1)); // Setting date to last monday
  lastMonday.setHours(0, 0, 0, 0); // Setting Hour to 00:00:00:00

  const res = lastMonday.getTime() < parseDate.getTime()
    && parseDate.getTime() < lastMonday.getTime() + WEEK_LENGTH;
  return res; // Boolean
};

export const onCurrentMonth = date => {
  const currentMonth = new Date().getMonth() + 1;
  const monthFromDate = new Date(date).getMonth() + 1;
  return currentMonth === monthFromDate;
};

export const isToday = date => {
  const today = new Date();
  const parseDate = new Date(date);

  return (
    parseDate.getDate() === today.getDate()
    && parseDate.getMonth() === today.getMonth()
    && parseDate.getFullYear() === today.getFullYear()
  );
};
// export const setNotification = time => Notifications.scheduleLocalNotificationAsync(
//   {
//     title: 'Meal Plan',
//     body: 'You have a meal plan',
//     ios: {
//       sound: true,
//       _displayInForeground: true,
//     },
//   },
//   {
//     time,
//   },
// );

// export const cancelNotification = id => Notifications.cancelScheduledNotificationAsync(id);

export const groupDataByDate = data => {
  const finalObj = {};
  data.forEach(item => {
    const date = moment(item.date).format('DD-MM-YYYY');
    if (finalObj[date]) {
      finalObj[date].push(item);
    } else {
      finalObj[date] = [item];
    }
  });
  const finalArr = [];
  const listKey = Object.keys(finalObj);
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < listKey.length; i++) {
    finalArr.push({
      title: listKey[i],
      data: finalObj[listKey[i]],
    });
  }

  return finalArr.sort((a, b) => a.title - b.title);
};
