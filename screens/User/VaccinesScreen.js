import React from "react";
import { View, Text, StyleSheet } from "react-native";

const VaccinesScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Vaccines</Text>
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

export default VaccinesScreen;
