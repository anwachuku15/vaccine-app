import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const ScreenContainer = ({ children }) => (
  <SafeAreaView style={styles.container}>{children}</SafeAreaView>
);

export default ScreenContainer;
