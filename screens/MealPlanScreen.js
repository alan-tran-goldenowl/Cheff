import React, { Component, Fragment } from "react";
import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import moment from "moment";
import { Calendar, LocaleConfig } from "react-native-calendars";

import CustomArrow from "../components/CustomArrow";

export default class MealPlan extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      fullname: "Michael",
      currentMonth: moment()
    };

    this.loadCustomNameCalendar();
    this.themeCalendar = {
      "stylesheet.calendar.header": {
        header: {
          flexDirection: "row",
          justifyContent: "space-between",
          paddingLeft: 10,
          paddingRight: 10,
          alignItems: "center",
          borderBottomWidth: 1,
          borderTopWidth: 1,
          borderColor: "#ddd"
        },
        dayHeader: {
          marginTop: 2,
          marginBottom: 7,
          width: 32,
          textAlign: "center",
          color: "black"
        }
      },
      "stylesheet.day.basic": {
        dot: {
          width:6,
          height: 6,
          marginTop: -30,
          marginLeft: 35,
          borderRadius: 3,
          opacity: 1
        },
        selectedDot: {
          backgroundColor: 'red'
        },
      }
    };
  }

  loadCustomNameCalendar() {
    // custom text month and day on calendar
    LocaleConfig.locales["en"] = {
      monthNames: [
        "JANUARY",
        "FEBRUARY",
        "MARCH",
        "APRIL",
        "MAY",
        "JUNE",
        "JULY",
        "AUGUST",
        "SEPTEMBER",
        "OCTOBER",
        "NOVEMBER",
        "DECEMBER"
      ],
      dayNamesShort: ["S", "M", "T", "W", "T", "F", "S"]
    };

    LocaleConfig.defaultLocale = "en";
  }

  loadMarkedDates(dates) {
    const currentDateKey = dates.format("YYYY-MM-DD");
    const markedDates = {
      [currentDateKey]: {
        selected: true,
        marked: true,
        selectedColor: "black",
        dotColor: "red"
      },
      "2018-08-05": {
        //  selected: true,
        marked: true,
        //  selectedColor: "black",
        dotColor: "red"
      },
      "2018-08-03": {
        selected: true,
        //  marked: true,
        selectedColor: "black"
        //  dotColor: "red"
      }
    };

    return markedDates;
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
    const { currentMonth } = this.state;
    const markedDates = this.loadMarkedDates(currentMonth);

    return (
      <View style={{ marginTop: 15 }}>
        <Calendar
          firstDay={1}
          style={{ width: "100%", paddingLeft: 0, paddingRight: 0 }}
          theme={this.themeCalendar}
          monthFormat={"MMMM, yyyy"}
          current={currentMonth.toDate()}
          //  markingType={"custom"}
          markedDates={markedDates}
          //handle press day
          onDayPress={day => {
            console.log("selected day", day);
          }}
          // Handler which gets executed on day long press. Default = undefined
          onDayLongPress={day => {
            console.log("selected day", day);
          }}
          // Replace default arrows with custom ones (direction can be 'left' or 'right')
          renderArrow={direction => (
            <CustomArrow direction={direction} currentMonth={currentMonth} />
          )}
          onPressArrowLeft={substractMonth => {
            substractMonth();
            this.setState(prevState => {
              currentMonth: prevState.currentMonth.subtract(1, "months");
            });
          }}
          onPressArrowRight={addMonth => {
            addMonth();
            this.setState(prevState => {
              currentMonth: prevState.currentMonth.add(1, "months");
            });
          }}
        />
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
  // calendar: {
  //   borderWidth: 1
  // },
  // theme: {
  // //  arrowColor: "orange"
  // }
});
