import AsyncStorage from '@react-native-async-storage/async-storage';

export default {
  userCredentials: async () => {
    try {
      const credentials = await AsyncStorage.getItem('user');
      return credentials;
    } catch (err) {
      console.log(err);
      return null;
    }
  },
};
