import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SymptomsScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Symptoms</Text>
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

export default SymptomsScreen;
