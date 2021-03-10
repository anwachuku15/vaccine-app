import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { db } from "../Firebase/Fire";

import { createStackNavigator } from "@react-navigation/stack";

import ProfileScreen from "../screens/User/ProfileScreen";
import SettingsScreen from "../screens/User/SettingsScreen";

const SettingsStack = createStackNavigator();

export default SettingsStackScreen = ({ route }) => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
    </SettingsStack.Navigator>
  );
};
