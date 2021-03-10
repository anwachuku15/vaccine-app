import React from "react";
import { StyleSheet, Text, View, useColorScheme } from "react-native";
import { db } from "../Firebase/Fire";
import { Pressable, TouchableOpacity, Dimensions } from "react-native";

import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";

import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";

import Colors from "../constants/Colors";
import DashboardScreen from "../screens/User/DashboardScreen";
import ScheduleScreen from "../screens/User/ScheduleScreen";
import VaccinesScreen from "../screens/User/VaccinesScreen";
import LabsScreen from "../screens/User/LabsScreen";
import SymptomsScreen from "../screens/User/SymptomsScreen";
import TelehealthScreen from "../screens/User/TelehealthScreen";
import VaxSchedulesScreen from "../screens/User/VaxSchedulesScreen";
import SettingsScreen from "../screens/User/SettingsScreen";
import CDCScheduleScreen from "../screens/User/CDCScheduleScreen";
import AdolescentScheduleScreen from "../screens/User/AdolescentScheduleScreen";
import CatchUpScheduleScreen from "../screens/User/CatchUpScheduleScreen";
import ResourcesScreen from "../screens/User/ResourcesScreen";

const { height: sHeight, width: sWidth } = Dimensions.get("screen");

// const DashboardStack = createStackNavigator();
const DashboardStack = createSharedElementStackNavigator();

export default DashboardStackScreen = ({ navigation, route }) => {
  const scheme = useColorScheme();
  return (
    <DashboardStack.Navigator
      initialRouteName={route.params.firstRoute}
      screenOptions={({ route }) => ({
        headerTitleStyle: {
          color: Colors.blue,
        },
        headerBackTitleVisible: false,
        headerShown: true,
        cardStyle: {
          backgroundColor: scheme === "dark" ? Colors.plum : "white",
        },
      })}
    >
      <DashboardStack.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          headerLeft: () => (
            <Pressable onPress={() => navigation.openDrawer()}>
              <Feather
                name="menu"
                size={30}
                color={Colors.blue}
                style={{ marginLeft: 10 }}
              />
            </Pressable>
          ),
          headerRight: () => (
            <Pressable onPress={() => navigation.navigate("ScheduleModal")}>
              <FontAwesome
                name="calendar"
                size={25}
                color={Colors.blue}
                style={{ marginRight: 10 }}
              />
            </Pressable>
          ),
        }}
      />
      <DashboardStack.Screen name="Schedule" component={ScheduleScreen} />
      <DashboardStack.Screen name="Vaccines" component={VaccinesScreen} />
      <DashboardStack.Screen name="Labs" component={LabsScreen} />
      <DashboardStack.Screen name="Symptoms" component={SymptomsScreen} />
      <DashboardStack.Screen name="Telehealth" component={TelehealthScreen} />
      <DashboardStack.Screen
        name="VaxSchedules"
        component={VaxSchedulesScreen}
        options={{
          headerTitle: "CDC Vaccine Schedules",
        }}
      />
      <DashboardStack.Screen name="Settings" component={SettingsScreen} />

      <DashboardStack.Screen
        name="CDCSchedule"
        component={CDCScheduleScreen}
        options={({ route, navigation }) => ({
          title: route.params.schedule.title,
          headerTitle: false,
          headerBackImage: () => null,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign
                name="close"
                size={30}
                color="gray"
                style={{ marginLeft: 20 }}
              />
            </TouchableOpacity>
          ),
          cardStyleInterpolator: ({ current: { progress } }) => {
            return {
              cardStyle: {
                opacity: progress,
              },
            };
          },
        })}
      />
    </DashboardStack.Navigator>
  );
};
