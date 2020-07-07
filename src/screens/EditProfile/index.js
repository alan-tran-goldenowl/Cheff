import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  Image,
  Switch,
  TextInput,
  BackHandler,
  TouchableHighlight,
  Alert,
} from 'react-native';

import Header from 'components/Header';
import Loading from 'components/Loading';
import { FireBase } from 'constants';
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
        <View style={{ alignItems: 'center', marginTop: 30 }}>
          <TouchableHighlight style={styles.imageContainer2}>
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

      <TouchableHighlight style={{ alignItems: 'center', marginTop: 15 }}>
        <Text style={{ color: 'blue', fontSize: 15 }}>
          Change image profile
        </Text>
      </TouchableHighlight>

      <View style={{ margin: 20 }}>
        <Text style={{ fontSize: 14 }}>
          Your full name
        </Text>
        <TextInput
          multiline={false}
          style={styles.text}
          placeholder="Enter your name"
          value={user.displayName}
          underlineColorAndroid="transparent"
          onChangeText={text => setUser({...user, displayName: text })}
        />
      </View>

      <View style={{ margin: 20 }}>
        <Text style={{ fontSize: 14 }}>
          Your email address
        </Text>
        <TextInput
          multiline={false}
          style={styles.text}
          value={user.email}
          underlineColorAndroid="transparent"
          onChangeText={text => setUser({...user, email: text })}
          placeholder="Enter your email"
        />
      </View>

      <View style={{ margin: 20 }}>
        <Text style={{ fontSize: 19, color: '#999' }}>
          Link Account
        </Text>
      </View>

      <View style={{ flexDirection: 'row', height: 50 }}>
        <View style={{ height: '100%', justifyContent: 'center', flex: 1 }}>
          <Image
            resizeMode="center"
            style={{ width: 30, height: 30, marginLeft: 12 }}
            source={require('assets/images/ic_facebook.png')}
          />
        </View>

        <View
          style={{
            flex: 4,
            height: '100%',
            marginLeft: 30,
            justifyContent: 'center',
          }}
        >
          <Text style={{ fontSize: 16 }}>
            Facebook
          </Text>
        </View>

        <View
          style={{
            flex: 5,
            height: '100%',
            marginRight: 20,
            alignItems: 'flex-end',
            justifyContent: 'center',
          }}
        >
          <Switch
            thumbColor="white"
            trackColor="#45db5e"
            value={user.providerId === 'facebook.com'}
            disabled
          />
        </View>
      </View>

      <View style={{ flexDirection: 'row', height: 50 }}>
        <View style={{ height: '100%', justifyContent: 'center', flex: 1 }}>
          <Image
            resizeMode="center"
            style={{ width: 30, height: 30, marginLeft: 20 }}
            source={require('assets/images/ic_google.png')}
          />
        </View>

        <View
          style={{
            flex: 4,
            height: '100%',
            marginLeft: 30,
            justifyContent: 'center',
          }}
        >
          <Text style={{ fontSize: 16 }}>
            Google
          </Text>
        </View>

        <View
          style={{
            flex: 5,
            height: '100%',
            marginRight: 20,
            alignItems: 'flex-end',
            justifyContent: 'center',
          }}
        >
          <Switch
            thumbColor="white"
            trackColor="#45db5e"
            value={user.providerId === 'google.com'}
            disabled
          />
        </View>
      </View>
    </View>
  );
}

export default EditProfile;
