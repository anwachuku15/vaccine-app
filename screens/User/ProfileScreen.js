import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useColorScheme } from "react-native-appearance";

const ProfileScreen = () => {
  const colorScheme = useColorScheme();
  const text = colorScheme === "dark" ? "white" : "black";

  return (
    <View style={styles.screen}>
      <Text style={{ color: text }}>Profile</Text>
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

export default ProfileScreen;
