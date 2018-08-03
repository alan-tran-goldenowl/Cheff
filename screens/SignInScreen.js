import React from "react";
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
  Button,
  ImageBackground,
  Text,
  TouchableOpacity,
  Image
} from "react-native";

import * as firebase from "firebase";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCBcidAJQ-aQ2C213UZ5ZVxNc0WkpP4esg",
  authDomain: "cheff-f3d45.firebaseapp.com",
  databaseURL: "https://cheff-f3d45.firebaseio.com",
  projectId: "cheff-f3d45",
  storageBucket: "cheff-f3d45.appspot.com",
  messagingSenderId: "1073567917248"
};
firebase.initializeApp(firebaseConfig);

export default class SignInScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <ImageBackground
        source={require("../assets/images/background.png")}
        style={{ flex: 1 }}
      >
        <View
          style={{ flex: 1, justifyContent: "flex-end", alignItems: "center" }}
        >
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Main")}
            style={styles.textSignInGG}
          >
            <Image
              source={require("../assets/images/btn_gg.png")}
              style={{
                width: 20,
                height: 20,
                left: 0,
                marginLeft: 25,
                position: "absolute"
              }}
            />
            <Text style={{ color: "#666", fontWeight: 'bold' }}>Google</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={this.checkUserAuthencation.bind(this)}
            style={styles.textSignInFb}
          >
            <Image
              source={require("../assets/images/btn_fb.png")}
              style={{
                width: 20,
                height: 20,
                left: 0,
                marginLeft: 25,
                position: "absolute"
              }}
            />
            <Text style={{ color: "white", fontWeight: 'bold' }}>Facebook</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
  checkUserAuthencation() {
    // Listen for authentication state to change.
    firebase.auth().onAuthStateChanged(user => {
      if (user != null) {
        console.log("We are authenticated now!" + user);
        this.props.navigation.navigate("Main");
      } else {
        console.log("User");
        logIn();
        console.log("User0000");
      }
    });
  }
  async logIn() {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(
      "1704319859617231",
      {
        permissions: ["public_profile"]
      }
    );
    if (type === "success") {
      // Get the user's name using Facebook's Graph API
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}`
      );
      console.log("Logged in!" + `Hi ${(await response.json()).name}!`);
      const credential = firebase.auth.FacebookAuthProvider.credential(token);

      firebase
        .auth()
        .signInAndRetrieveDataWithCredential(credential)
        .catch(error => {
          console.log("Login Facebook failled");
        });
    }
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    flex: 1
  },
  textSignInGG: {
    flexDirection: "row",
    height: 45,
    width: 300,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    borderColor: "#ddd",
    borderWidth: 1
  },
  textSignInFb: {
    height: 45,
    width: 300,
    margin: 20,
    backgroundColor: "#295eb5",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5
  }
});
