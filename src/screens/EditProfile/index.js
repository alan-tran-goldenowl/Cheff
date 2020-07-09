import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  BackHandler,
  Alert,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { Image } from 'react-native-expo-image-cache';

import Header from 'components/Header';
import Loading from 'components/Loading';
import TextInput from 'components/TextInput';
import Switch from 'components/Switch';
import { FireBase } from 'constants';
import images from 'assets/images';

import {uuid} from 'utils'

import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';

import * as firebase from 'firebase';

import styles from './styles';

const EditProfile = ({ navigation }) => {
  const [user, setUser] = useState({ email: '', photoURL: '', displayName: '', providerId: '' });
  const [loading, setLoading] = useState(false);
  const userFirebase =  FireBase.auth().currentUser;

  useEffect(() => {
    setUser({
      email: userFirebase.email,
      photoURL: userFirebase.photoURL,
      displayName: userFirebase.displayName,
      providerId: userFirebase.providerData[0].providerId,
    })

    getPermissionAsync();

    BackHandler.addEventListener('hardwareBackPress', navigation.goBack);
    return () => BackHandler.removeEventListener('hardwareBackPress', navigation.goBack);
  }, [])

  const getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  };

  const updateProfile = async() => {

    setLoading(true);

    let photoURL = user.photoURL
    if(user.photoURL !== userFirebase.photoURL){
      photoURL = await uploadImage(photoURL,uuid(user.displayName))
    }
    userFirebase.updateProfile({
      displayName: user.displayName,
      photoURL,
      email: user.email,
    }).then(res => Alert.alert(
      'Update Profile', 
      'Profile updated!',
      [
        { text: "OK", onPress: () => navigation.navigate('Settings') }
      ]))
    .catch(error => Alert.alert('Update Profile', 'Update profile failure!'))
    .finally(() => setLoading(false));
  }

  const handlePickAvatar = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        setUser({...user, photoURL: result.uri })
      }

    } catch (err) {
      alert(err)
    }
  };

  const uploadImage = async (uri, imageName) => {
    const response = await fetch(uri);
    const blob = await response.blob();

    var ref = firebase.storage()
                      .ref()
                      .child(`images/avatars/${userFirebase.uid}/` + imageName);
    await ref.put(blob).catch((error) => { throw error });

    const url = await ref.getDownloadURL().catch((error) => { throw error });
    return url
  }

  return (
    <>
    { loading && <Loading/> }

    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={{flex:1}}
    >
      <ScrollView style={{backgroundColor:'white'}}>
        <TouchableOpacity style={styles.container} activeOpacity={1}>
          <Header
            rightText="Save"
            title="Edit Profile"
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
                   {...{uri:user.photoURL,preview:{}}}
                />
              </TouchableOpacity>
            </View>
            )
          }
          <TouchableOpacity style={styles.btnChangeImage} onPress={handlePickAvatar}>
            <Text style={styles.textChangeImage}>
              Change image profile
            </Text>
          </TouchableOpacity>
          <TextInput
            title='Your full name'
            placeholder="Enter your name"
            value={user.displayName}
            onChangeText={text => setUser({...user, displayName: text })}
            icon={images.icon_pen}
          />
          <TextInput
            title='Your email address'
            placeholder="Enter your email"
            value={user.email}
          />
          <View style={styles.viewTextInput}>
            <Text style={styles.textLinkAcc}>
              Link Account
            </Text>
          </View>

          <Switch
            image={images.ic_facebook}
            title='Facebook'
            valueSwitch={user.providerId === 'facebook.com'}
          />
          <Switch
            image={images.ic_google}
            title='Google'
            valueSwitch={user.providerId === 'google.com'}
          />
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
    </>
  );
}

export default EditProfile;
