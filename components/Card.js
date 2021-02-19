import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
// import { useColorScheme } from "react-native-appearance";
import Colors from "../constants/Colors";

const Card = ({ title }) => {
  // CARD THEME
  //   const colorScheme = useColorScheme();
  //   let cardTheme;
  //   if (colorScheme === "dark") {
  //     cardTheme = "rgb(36,36,38)";
  //   } else {
  //     cardTheme = "white";
  //   }
  return (
    <View style={styles.card}>
      <View style={styles.cardTitleDiv}>
        <Text>{title}</Text>
      </View>
    </View>
  );
};

const SCREEN_WIDTH = Dimensions.get("screen").width;
const SCREEN_HEIGHT = Dimensions.get("screen").height;
const cardWidth = SCREEN_WIDTH / 2.5;

const styles = StyleSheet.create({
  card: {
    width: cardWidth,
    height: cardWidth,
    backgroundColor: Colors.blue,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
  cardTitleDiv: {
    flexDirection: "column",
    backgroundColor: Colors.pinkcandy,
    marginBottom: "auto",
    padding: 10,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
});

export default Card;
