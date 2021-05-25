import React, { useEffect } from 'react';
import {
  Text,
  View,
  BackHandler,
  ScrollView,
  Alert,
} from 'react-native';

import Header from 'components/Header';
import ButtonSetting from 'components/ButtonSetting';
import images from 'assets/images';
import { useFirebase } from 'react-redux-firebase';
import styles from './styles';


const SettingsScreen = ({ navigation }) => {
  const firebase = useFirebase();

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', navigation.goBack);
    return () => BackHandler.removeEventListener('hardwareBackPress', navigation.goBack);
  }, []);

  const handleLogOut = () => {
    Alert.alert(
      'Opps',
      'You wanna log out ???',
      [
        {
          text: 'Yes',
          onPress: () => firebase.logout().then(() => navigation.navigate('Auth')),
        },
        { text: 'No', onPress: () => {} },
      ],
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Header
        iconLeft={images.icon_back}
        onPressLeft={() => navigation.goBack()}
      />
      <View style={styles.preferences}>
        <Text style={styles.textSetting}>
          Cài đặt
        </Text>
        <Text style={styles.textPreferences}>
          Bổ sung thông tin cần thiết
        </Text>
      </View>
      <View style={styles.accountView}>
        <Text style={styles.accountText}>
          Tài khoản
        </Text>
      </View>
      <Text style={styles.underLine} />
      <View style={styles.content}>
        <ButtonSetting
          image={images.ic_user}
          onPress={() => navigation.navigate('EditProfile')}
          text="Chỉnh sửa hồ sơ "
        />

      </View>
      <Text style={styles.underLine} />
      <View style={styles.accountView}>
        <Text style={styles.otherText}>
          Các chức năng khác
        </Text>
      </View>
      <View style={styles.subContent}>
        <ButtonSetting
          image={images.ic_privacy}
          onPress={() => navigation.navigate('PrivacyAndPolicy')}
          text="Chính sách"
        />
        <ButtonSetting
          image={images.icon_logout}
          onPress={handleLogOut}
          text="Đăng xuất"
        />
      </View>
    </ScrollView>
  );
};

export default SettingsScreen;
