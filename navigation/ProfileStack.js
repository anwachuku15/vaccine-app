import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { db } from "../Firebase/Fire";

import { createStackNavigator } from "@react-navigation/stack";

import ProfileScreen from "../screens/User/ProfileScreen";
import SettingsScreen from "../screens/User/SettingsScreen";

const ProfileStack = createStackNavigator();

export default ProfileStackScreen = ({ route }) => {
  return (
    <ProfileStack.Navigator initialRouteName={route.params.firstRoute}>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
      <ProfileStack.Screen name="Settings" component={SettingsScreen} />
    </ProfileStack.Navigator>
  );
};
