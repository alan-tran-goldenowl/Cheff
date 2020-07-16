import { useEffect } from 'react';
import { Alert } from 'react-native';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import { useFirebase } from 'react-redux-firebase';
import { isIOS } from 'utils';

const PushNotificationHandler = () => {
  const firebase = useFirebase();

  useEffect(() => {
    registerForPushNotificationsAsync();
  }, []);

  const registerForPushNotificationsAsync = async () => {
    if (Constants.isDevice) {
      const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        Alert.alert('Failed to get push token for push notification!');
        return;
      }
      const token = await Notifications.getExpoPushTokenAsync();
      const userUid = firebase.auth().currentUser.uid;
      firebase.update(`users/${userUid}`, { pushToken: token });
    }
    if (!isIOS) {
      Notifications.createChannelAndroidAsync('default', {
        name: 'default',
        sound: true,
        priority: 'max',
        vibrate: true,
      });
    }
  };

  return null;
};

export default PushNotificationHandler;
