import React from "react";
import { View, Text, Image, Dimensions, StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Colors from "../constants/Colors";

const { height: sHeight, width: sWidth } = Dimensions.get("screen");

const ageRanges = [
  {
    icon: "",
    age: "Birth",
  },
  {
    icon: "",
    age: "1 mo",
  },
  {
    icon: "",
    age: "2 mos",
  },
  {
    icon: "",
    age: "4 mos",
  },
  {
    icon: "",
    age: "6 mos",
  },
  {
    icon: "",
    age: "12 mos",
  },
  {
    icon: "",
    age: "15 mos",
  },
];

const ageRanges2 = [
  {
    icon: "",
    age: "18 mos",
  },
  {
    icon: "",
    age: "19-23 mos",
  },
  {
    icon: "",
    age: "2-3 years",
  },
  {
    icon: "",
    age: "4-6 years",
  },
];

const Calendar1 = () => (
  <View style={styles.calendar}>
    <View style={styles.headerRow}>
      {ageRanges.map((range, index) => (
        <View style={styles.headerCell} key={index}>
          <Text style={styles.headerCellText} adjustsFontSizeToFit>
            {range.age}
          </Text>
        </View>
      ))}
    </View>
  </View>
);

const Calendar2 = () => (
  <View style={styles.calendar}>
    <View style={styles.headerRow}>
      {ageRanges2.map((range, index) => (
        <View style={styles.headerCell} key={index}>
          <Text style={styles.headerCellText} adjustsFontSizeToFit>
            {range.age}
          </Text>
        </View>
      ))}
    </View>
  </View>
);

const CalendarTopTabs = () => {
  const CalendarTabs = createMaterialTopTabNavigator();
  return (
    <CalendarTabs.Navigator
      removeClippedSubviews
      sceneContainerStyle={{
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: Colors.blue,
      }}
      initialRouteName="BirthTo15mos"
    >
      <CalendarTabs.Screen name="BirthTo15mos" component={Calendar1} />
      <CalendarTabs.Screen name="18mosTo6yrs" component={Calendar2} />
    </CalendarTabs.Navigator>
  );
};

const styles = StyleSheet.create({
  calendar: {
    display: "flex",
    width: sWidth / 1.1,
    marginTop: 10,
    borderWidth: 1,
    borderColor: Colors.blue,
  },
  headerRow: {
    height: sHeight / 20,
    backgroundColor: Colors.blue,
    flexDirection: "row",
  },
  headerCell: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "white",
  },
  headerCellText: {
    color: "white",
  },
});

export default CalendarTopTabs;
