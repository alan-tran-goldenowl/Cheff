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
import Recommend from "../screens/Recommend";
import TopNavigator from "../navigation/TopNavigator";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigator />
        <Recommend
          moveToDetail={() => this.props.navigation.navigate("FoodDetail")}
        />
      </Fragment>
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
export default Home;
