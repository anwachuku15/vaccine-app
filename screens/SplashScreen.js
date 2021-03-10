import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SplashScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>SPLASH</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SplashScreen;
