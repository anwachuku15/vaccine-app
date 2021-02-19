import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { db } from "./Firebase/Fire";
import { AppearanceProvider } from "react-native-appearance";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import ScreenContainer from "./components/ScreenContainer";

import IntroScreen from "./screens/Onboarding/IntroScreen";
import SignInScreen from "./screens/Onboarding/SignInScreen";
import CreateAccountScreen from "./screens/Onboarding/CreateAccountScreen";
import HomeScreen from "./screens/User/DashboardScreen";
import ProfileScreen from "./screens/User/ProfileScreen";
import ScheduleScreen from "./screens/User/ScheduleScreen";
import SettingsScreen from "./screens/User/SettingsScreen";
import VaccinesScreen from "./screens/User/VaccinesScreen";

import DashboardStack from "./navigation/DashboardStack";
import ProfileStack from "./navigation/ProfileStack";

const AuthStack = createStackNavigator();
const BottomTabs = createBottomTabNavigator();

export default function App() {
  return (
    <AppearanceProvider>
      <NavigationContainer>
        <BottomTabs.Navigator>
          <BottomTabs.Screen
            name="Dashboard"
            component={DashboardStack}
            initialParams={{ firstRoute: "Dashboard" }}
          />
          {/* <BottomTabs.Screen
          name="Schedule"
          component={DashboardStack}
          initialParams={{ firstRoute: "Schedule" }}
        />
        <BottomTabs.Screen
          name="Vaccines"
          component={DashboardStack}
          initialParams={{ firstRoute: "Vaccines" }}
        /> */}
          <BottomTabs.Screen
            name="Profile"
            component={ProfileStack}
            initialParams={{ firstRoute: "Profile" }}
          />
        </BottomTabs.Navigator>
        {/* <AuthStack.Navigator>
        <AuthStack.Screen name="Intro" component={IntroScreen} />
        <AuthStack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{ title: "Sign In" }}
        />
        <AuthStack.Screen
          name="CreateAccount"
          component={CreateAccountScreen}
          options={{ title: "Create Account" }}
        />
      </AuthStack.Navigator> */}
      </NavigationContainer>
    </AppearanceProvider>
  );
}
