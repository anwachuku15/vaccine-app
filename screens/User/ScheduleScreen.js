import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ScheduleScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Schedule</Text>
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

export default ScheduleScreen;
