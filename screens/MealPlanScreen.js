import React, { Component, Fragment } from "react";
import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import MyCalendar from "../components/Calendar";

export default class MealPlan extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      fullname: "Michael"
    };
  }

  renderHeader() {
    return (
      <View style={styles.header}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Setting")}
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
          <Text style={{ fontSize: 16 }}>Meal Plan</Text>
        </View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("CreatePlan")}
          >
            <Image
              style={{
                height: 30,
                width: 30,
                marginLeft: 10,
                marginRight: 10
              }}
              resizeMode={"center"}
              source={require("../assets/images/ic_plus.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  renderIntro() {
    return (
      <Fragment>
        <View style={{ height: 50, flexDirection: "row", marginLeft: 25 }}>
          <View style={{ height: "100%", justifyContent: "center" }}>
            <Image
              style={{ height: 30, width: 30 }}
              resizeMode={"center"}
              source={require("../assets/images/ic_pink_circle.png")}
            />
          </View>

          <View style={{ height: "100%", justifyContent: "center" }}>
            <Text style={{ fontSize: 16, color: "black" }}>
              Hi, {this.state.fullname}
            </Text>
          </View>
        </View>

        <View style={{ height: 50, marginLeft: 55 }}>
          <Text style={{ fontSize: 14, color: "#999" }}>
            Let's see what our recipes.
          </Text>
          <Text style={{ fontSize: 14, color: "#999" }}>for the day are.</Text>
        </View>
      </Fragment>
    );
  }

  renderCalendar() {
    return (
      <View style={{ marginTop: 15 }}>
        <MyCalendar />
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        {this.renderIntro()}
        {this.renderCalendar()}
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
  },
  list: {
    flex: 1,
    backgroundColor: "white",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20
  },
  itemFood: {
    width: "100%",
    height: 220
  },
  imageFood: {
    flex: 3
  },
  infomationFood: {
    flex: 1
  }
});
