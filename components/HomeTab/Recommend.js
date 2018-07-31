import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  View,
  Image
} from "react-native";

var arrFood = [
  {
    key: "1",
    name: "Vegetarian Fried Rice",
    like: 342,
    userLike: true,
    timeStamp: "15 minutes ago",
    imageLink:
      "http://cdn.cnn.com/cnnnext/dam/assets/171027052520-processed-foods-overlay-tease.jpg"
  },
  {
    key: "2",
    name: "Vegetarian Fried Rice",
    like: 162,
    userLike: false,
    timeStamp: "15 minutes ago",
    imageLink:
      "http://cdn.cnn.com/cnnnext/dam/assets/171027052520-processed-foods-overlay-tease.jpg"
  },
  {
    key: "3",
    name: "Vegetarian Fried Rice",
    like: 382,
    userLike: false,
    timeStamp: "15 minutes ago",
    imageLink:
      "http://cdn.cnn.com/cnnnext/dam/assets/171027052520-processed-foods-overlay-tease.jpg"
  },
  {
    key: "4",
    name: "Vegetarian Fried Rice",
    like: 1123,
    userLike: false,
    timeStamp: "15 minutes ago",
    imageLink:
      "http://cdn.cnn.com/cnnnext/dam/assets/171027052520-processed-foods-overlay-tease.jpg"
  },
  {
    key: "5",
    name: "Vegetarian Fried Rice",
    like: 632,
    userLike: false,
    timeStamp: "15 minutes ago",
    imageLink:
      "http://cdn.cnn.com/cnnnext/dam/assets/171027052520-processed-foods-overlay-tease.jpg"
  }
];

export default class Recommend extends Component {
  render() {
    return (
      <FlatList
        data={arrFood}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <TouchableOpacity
                onPress={() => this.props.moveToDetail()}
              // onPress={() => this.props.navigation.navigate("FoodDetail")}
              style={styles.itemFood}
            >
              <View style={styles.imageFood}>
                <Image
                  style={{ width: "100%", height: 150, borderRadius: 5 }}
                  resizeMode={"cover"}
                  source={{ uri: item.imageLink }}
                />
              </View>

              <View style={styles.infomationFood}>
                <Text style={{ fontSize: 14, color: "black", flex: 3 }}>
                  {item.name}
                </Text>
                <View style={{ flex: 5, flexDirection: "row" }}>
                  <View
                    style={{
                      flexDirection: "row",
                      flex: 1,
                      justifyContent: "flex-start",
                      alignItems: "center"
                    }}
                  >
                    <Image
                      style={{ height: 15, width: 15 }}
                      resizeMode={"contain"}
                      source={require("../../assets/images/ic_clock.png")}
                    />
                    <Text
                      style={{ fontSize: 11, color: "#666", marginLeft: 7 }}
                    >
                      {item.timeStamp}
                    </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      flex: 1,
                      justifyContent: "flex-end",
                      alignItems: "center"
                    }}
                  >
                    <Text
                      style={{ fontSize: 11, color: "black", marginRight: 7 }}
                    >
                      {item.like}
                    </Text>
                    <Image
                      style={{ height: 15, width: 15 }}
                      resizeMode={"contain"}
                      source={
                        item.userLike
                          ? require("../../assets/images/ic_love.png")
                          : require("../../assets/images/ic_nonlove.png")
                      }
                    />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <View style={{ backgroundColor: "#dddddd", height: 1 }} />
          </View>
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
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
