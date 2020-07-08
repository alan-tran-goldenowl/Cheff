import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  Image,
  BackHandler,
  TouchableHighlight,
  Alert,
} from 'react-native';

import Header from 'components/Header';
import Loading from 'components/Loading';
import TextInput from 'components/TextInput';
import Switch from 'components/Switch';
import { FireBase } from 'constants';
import images from 'assets/images';

import styles from './styles';

const EditProfile = ({ navigation }) => {
  const [user, setUser] = useState({ email: '', photoURL: '', displayName: '', providerId: '' });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const user =  FireBase.auth().currentUser;
    setUser({
      email: user.email,
      photoURL: user.photoURL,
      displayName: user.displayName,
      providerId: user.providerData[0].providerId,
    })
    BackHandler.addEventListener('hardwareBackPress', navigation.goBack);
    return () => BackHandler.removeEventListener('hardwareBackPress', navigation.goBack);
  }, [])

  const updateProfile = () => {
    setLoading(true);
    const userFirebase =  FireBase.auth().currentUser;
    userFirebase.updateProfile({
      displayName: user.displayName,
      photoURL: user.photoURL,
      email: user.email,
    }).then(res => Alert.alert('Update Profile', 'Profile updated!'))
    .catch(error => Alert.alert('Update Profile', 'Update profile failure!'))
    .finally(() => setLoading(false));
  }

  return (
    <View style={styles.container}>
      { loading && <Loading/> }
      <Header
        rightText="Save"
        title="Edit Profile"
        onPressLeft={() => navigation.goBack()}
        iconLeft={require('assets/images/icon_back.png')}
        onPressRight={updateProfile}
      />
      {
        !!user.photoURL && (
        <View style={styles.viewImage}>
          <TouchableHighlight>
            <Image
              style={styles.image}
              source={{
                uri: user.photoURL,
              }}
            />
          </TouchableHighlight>
        </View>
        )
      }
      <TouchableHighlight style={styles.btnChangeImage}>
        <Text style={styles.textChangeImage}>
          Change image profile
        </Text>
      </TouchableHighlight>
      <TextInput
        title='Your full name'
        placeholder="Enter your name"
        value={user.displayName}
        onChangeText={text => setUser({...user, displayName: text })}
      />
      <TextInput
        title='Your email address'
        placeholder="Enter your email"
        value={user.email}
        onChangeText={text => setUser({...user, email: text })}
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
    </View>
  );
}

export default EditProfile;
