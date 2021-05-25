import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  BackHandler,
  Alert,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Image } from 'react-native-expo-image-cache';

import Header from 'components/Header';
import Loading from 'components/Loading';
import TextInput from 'components/TextInput';
import Switch from 'components/Switch';
import { FireBase } from 'constants';
import images from 'assets/images';

import { uuid, validateEditProfile } from 'utils';

import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';

import * as firebase from 'firebase';

import styles from './styles';

const EditProfile = ({ navigation }) => {
  const [user, setUser] = useState({
    email: '', photoURL: '', displayName: '', providerId: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});

  const userFirebase = FireBase.auth().currentUser;
  useEffect(() => {
    setUser({
      email: userFirebase.email,
      photoURL: userFirebase.photoURL,
      displayName: userFirebase.displayName,
      providerId: userFirebase.providerData[0].providerId,
    });

    getPermissionAsync();

    BackHandler.addEventListener('hardwareBackPress', navigation.goBack);
    return () => BackHandler.removeEventListener('hardwareBackPress', navigation.goBack);
  }, []);

  const getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  };

  const updateProfile = async () => {
    const err = validateEditProfile(user);
    if (Object.keys(err).length) {
      setError(err);
      return;
    }

    setLoading(true);

    let { photoURL } = user;
    if (user.photoURL !== userFirebase.photoURL) {
      photoURL = await uploadImage(photoURL, uuid(user.displayName));
    }
    userFirebase.updateProfile({
      displayName: user.displayName,
      photoURL,
      email: user.email,
    }).then(res => Alert.alert(
      'Chỉnh sửa hồ sơ',
      'Thành công!',
      [
        { text: 'OK', onPress: () => navigation.navigate('Settings') },
      ],
    ))
      .catch(error => Alert.alert('Chỉnh sửa hồ sơ', 'Thất bại!'))
      .finally(() => setLoading(false));
  };

  const handlePickAvatar = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        setUser({ ...user, photoURL: result.uri });
      }
    } catch (err) {
      alert(err);
    }
  };

  const uploadImage = async (uri, imageName) => {
    const response = await fetch(uri);
    const blob = await response.blob();

    const ref = firebase.storage()
      .ref()
      .child(`images/avatars/${userFirebase.uid}/${imageName}`);
    await ref.put(blob).catch(error => { throw error; });

    const url = await ref.getDownloadURL().catch(error => { throw error; });
    return url;
  };

  const handleChangeText = (name, value) => {
    if (error[name]) {
      setError({
        ...error,
        [name]: '',
      });
    }
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <>
      { loading && <Loading /> }

      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView style={{ backgroundColor: 'white' }}>
          <TouchableOpacity style={styles.container} activeOpacity={1}>
            <Header
              rightText="Lưu"
              title="Chỉnh sửa hồ sơ"
              onPressLeft={() => navigation.goBack()}
              iconLeft={images.icon_back}
              onPressRight={updateProfile}
            />
            {
            !!user.photoURL && (
            <View style={styles.viewImage}>
              <TouchableOpacity onPress={handlePickAvatar}>
                <Image
                  style={styles.image}
                  {...{ uri: user.photoURL, preview: {} }}
                />
              </TouchableOpacity>
            </View>
            )
          }
            <TouchableOpacity style={styles.btnChangeImage} onPress={handlePickAvatar}>
              <Text style={styles.textChangeImage}>
                Thay đổi hình ảnh
              </Text>
            </TouchableOpacity>
            <TextInput
              title="Tên đầy đủ"
              placeholder="Nhập tên"
              value={user.displayName}
              onChangeText={text => handleChangeText('displayName', text)}
              icon={images.icon_pen}
              error={error?.displayName}
              containerStyles={styles.viewTextInput}
            />
            <TextInput
              title="Email"
              placeholder="Nhập email"
              value={user.email}
              containerStyles={styles.viewTextInput}
            />
            <View style={styles.viewTextInput}>
              <Text style={styles.textLinkAcc}>
                Liên kết tài khoản
              </Text>
            </View>

            <Switch
              image={images.ic_facebook}
              title="Facebook"
              valueSwitch={user.providerId === 'facebook.com'}
            />
            <Switch
              image={images.ic_google}
              title="Google"
              valueSwitch={user.providerId === 'google.com'}
            />
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default EditProfile;
