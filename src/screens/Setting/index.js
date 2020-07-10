import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  Switch,
  BackHandler,
  ScrollView,
  Alert
} from 'react-native';

import Header from 'components/Header';
import ButtonSetting from 'components/ButtonSetting';
import images from 'assets/images';
import styles from './styles';
import { useFirebase } from 'react-redux-firebase'


const SettingsScreen = ( { navigation }) => {
  const firebase = useFirebase()
  const [toggleNotification, setToggleNotification] = useState(true);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', navigation.goBack);
    return () => BackHandler.removeEventListener('hardwareBackPress', navigation.goBack);
  }, [])

  const handleLogOut = () => {
    Alert.alert(
      'Opps', 
      'You wanna log out ???',
      [
        { text: "Yes", onPress: () => 
          firebase.logout().then(()=> navigation.navigate('Auth'))
        },
        {text:'No',onPress:()=>{}}
      ]
    )
  }

  return (
    <ScrollView style={styles.container}>
      <Header
        iconLeft={images.icon_back}
        onPressLeft={() => navigation.goBack()}
      />
      <View style={styles.preferences}>
        <Text style={styles.textSetting}>
          Settings
        </Text>
        <Text style={styles.textPreferences}>
          Update your preferences
        </Text>
      </View>
      <View style={styles.accountView}>
        <Text style={styles.accountText}>
          Account
        </Text>
      </View>
      <Text style={styles.underLine} />
      <View style={styles.content}>
        <ButtonSetting
          image={images.ic_user}
          onPress={() => navigation.navigate('EditProfile')}
          text='Edit Profile'
        />
        <ButtonSetting
          image={images.ic_push_notification}
          text='Push Notification'
          rightContent={() =>
            <Switch
              onValueChange={value => setToggleNotification(value)}
              value={toggleNotification}
              thumbColor="white"
              trackColor="#45db5e"
            />
          }
        />
      </View>
      <Text style={styles.underLine} />
      <View style={styles.accountView}>
        <Text style={styles.otherText}>
          Others
        </Text>
      </View>
      <View style={styles.subContent}>
        <ButtonSetting
          image={images.ic_star}
          onPress={() => {}}
          text='Rate our app'
        />
        <ButtonSetting
          image={images.ic_chat}
          onPress={() => {}}
          text='Send us feedback'
        />
        <ButtonSetting
          image={images.ic_privacy}
          onPress={() => {}}
          text='Privacy Policy'
        />
        <ButtonSetting
          image={images.icon_logout}
          onPress={handleLogOut}
          text='Log out'
        />
      </View>
    </ScrollView>
  );
}

export default SettingsScreen;
