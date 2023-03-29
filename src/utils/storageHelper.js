import {isEmpty} from 'lodash';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default {
  setAsyncStorage: (key = '', obj = {}) =>
    new Promise((resolve, reject) => {
      try {
        if (!key || isEmpty(obj)) {
          throw TypeError('Invalid key or object supplied.');
        }
        AsyncStorage.setItem(key, JSON.stringify(obj))
          .then(() => resolve())
          .catch(err => {
            throw err;
          });
      } catch (err) {
        reject(err);
      }
    }),

  getAsyncStorage: (key = '') =>
    new Promise((resolve, reject) => {
      try {
        if (!key) {
          throw TypeError('Invalid key supplied');
        }
        AsyncStorage.getItem(key)
          .then(result => resolve(JSON.parse(result)))
          .catch(() => resolve(null));
      } catch (err) {
        reject(err);
      }
    }),
};
