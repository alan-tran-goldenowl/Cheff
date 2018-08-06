import React, { Component } from "react";
import { View, StyleSheet, Image, TextInput } from "react-native";

export default class SearchiewCheff extends Component {
  render() {
    return (
      <View style={styles.search}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            style={{ height: 30, width: 30, marginLeft: 10, marginRight: 10 }}
            resizeMode={"center"}
            source={require("../assets/images/ic_search.png")}
          />
        </View>
        <View style={{ display: "flex", justifyContent: "center" }}>
          <TextInput
            underlineColorAndroid={"transparent"}
            autofocus={false}
            onFocus={() => this.props.moveToSeacrh()}
            placeholder={"Search your recipes..."}
            style={styles.text}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  search: {
    display: "flex",
    height: 50,
    width: "90%",
    flexDirection: "row",
    backgroundColor: "white",
    borderWidth: 0.2,
    borderRadius: 4,
    borderColor: "#dddddd",
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "#000",
    shadowOpacity: 0.1,
    elevation: 0.5
  },
  icon: {
    height: 30,
    width: 30,
    marginLeft: 10
  },
  text: {
    width: 200,
    fontSize: 14,
    color: "#bcbcbc"
  }
});