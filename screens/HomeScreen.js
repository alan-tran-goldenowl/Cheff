import React, { Component, Fragment } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView
} from "react-native";
import SearchViewCheff from "../components/SearchViewCheff";
import HomeTab from "../components/HomeTab/HomeTab";

export default class HomeScreen extends Component {
  static navigationOptions = {
    // title: 'Home',
    // headerStyle: {
    //   backgroundColor: '#f4511e',
    // },
    // headerTintColor: '#fff',
    // headerTitleStyle: {
    //   fontWeight: 'bold',
    // },
    header: null,
  };

  renderHeader() {
    return (
      <Fragment>
        <View style={styles.header}>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Settings")}
            >
              <Image
                style={styles.icon}
                resizeMode={"center"}
                source={require("../assets/images/icon_side_menu.png")}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{ flex: 7, justifyContent: "center", alignItems: "center" }}
          >
            <Image
              style={{ resizeMode: "center", width: 100 }}
              source={require("../assets/images/logo_cheff.png")}
            />
          </View>

          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Settings")}
            >
              <Image
                style={{
                  height: 30,
                  width: 30,
                  marginLeft: 10,
                  marginRight: 10
                }}
                resizeMode={"center"}
                source={require("../assets/images/ic_push_notification.png")}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            position: "relative",
            height: 150,
            backgroundColor: "white",
            marginTop: 10
          }}
        >
          <Image
            resizeMode={"stretch"}
            source={require("../assets/images/img1.jpg")}
            style={{
              top: 0,
              left: 0,
              zIndex: 1,
              position: "absolute",
              height: 130,
              width: "100%"
            }}
          />
          <View
            style={{
              marginLeft: 20,
              marginRight: 10,
              position: "absolute",
              zIndex: 2,
              height: 150,
              justifyContent: "flex-end",
              width: "100%"
            }}
          >
            <SearchViewCheff
              moveToSeacrh={() => this.props.navigation.navigate("Search")}
            />
          </View>
        </View>
      </Fragment>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        <HomeTab
          moveToDetail={() => this.props.navigation.navigate("FoodDetail")}
        />
      </View>
    );
  }
}

const { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  header: {
    backgroundColor: "#ffffff",
    marginTop: 30,
    height: height / 20,
    width: null,
    flexDirection: "row"
  },
  icon: {
    height: 30,
    width: 30,
    marginLeft: 10
  }
});
