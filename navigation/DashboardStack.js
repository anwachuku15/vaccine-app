import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { db } from "../Firebase/Fire";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import DashboardScreen from "../screens/User/DashboardScreen";
import ScheduleScreen from "../screens/User/ScheduleScreen";
import VaccinesScreen from "../screens/User/VaccinesScreen";
import LabsScreen from "../screens/User/LabsScreen";
import SymptomsScreen from "../screens/User/SymptomsScreen";
import TelehealthScreen from "../screens/User/TelehealthScreen";
import FAQScreen from "../screens/User/FAQScreen";

const DashboardStack = createStackNavigator();

export default DashboardStackScreen = ({ route }) => {
  return (
    <DashboardStack.Navigator initialRouteName={route.params.firstRoute}>
      <DashboardStack.Screen name="Dashboard" component={DashboardScreen} />
      <DashboardStack.Screen name="Schedule" component={ScheduleScreen} />
      <DashboardStack.Screen name="Vaccines" component={VaccinesScreen} />
      <DashboardStack.Screen name="Labs" component={LabsScreen} />
      <DashboardStack.Screen name="Symptoms" component={SymptomsScreen} />
      <DashboardStack.Screen name="Telehealth" component={TelehealthScreen} />
      <DashboardStack.Screen name="FAQ" component={FAQScreen} />
    </DashboardStack.Navigator>
  );
};
