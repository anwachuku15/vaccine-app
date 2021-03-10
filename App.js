import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useLayoutEffect } from "react";
import { Linking, Platform, ActivityIndicator, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { db } from "./Firebase/Fire";
import { enableScreens } from "react-native-screens";

import {
  NavigationContainer,
  // getFocusedRouteNameFromRoute,
  // useNavigationState,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createDrawerNavigator,
  // DrawerContentScrollView,
  // DrawerItemList,
  // DrawerItem,
} from "@react-navigation/drawer";
// import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { AppearanceProvider, useColorScheme } from "react-native-appearance";
import { useFonts } from "expo-font";
import { Montserrat_400Regular } from "@expo-google-fonts/dev";

// import BottomTabs from "./navigation/BottomTabs";
import RootStack from "./navigation/BottomTabStack";
// import SettingsStack from "./navigation/SettingsStack";
import DrawerLayout from "./navigation/DrawerLayout";
import SplashScreen from "./screens/SplashScreen";

import Colors from "./constants/Colors";

const AuthStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const PERSISTANCE_KEY = "NAVIGATION_STATE";

// enableScreens();

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [initialState, setInitialState] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const restoreState = async () => {
      try {
        const initialUrl = await Linking.getInitialURL();

        if (Platform.OS !== "web" && initialUrl == null) {
          const savedStateString = await AsyncStorage.getItem(PERSISTANCE_KEY);
          const state = savedStateString
            ? JSON.parse(savedStateString)
            : undefined;
          if (state !== undefined) {
            setInitialState(state);
          }
        }
      } finally {
        setIsReady(true);
      }
    };

    if (!isReady) {
      restoreState();
    }
  }, [isReady]);

  const colorScheme = useColorScheme();
  const myTheme = {
    dark: false,
    colors: {
      primary: Colors.blue,
      background: "black",
      card: colorScheme === "dark" ? Colors.plum : "white",
      text: colorScheme === "dark" ? "white" : "black",
      border: "transparent",
      notification: Colors.pinkcandy,
    },
  };

  const [fontsLoaded] = useFonts({
    montserrat: Montserrat_400Regular,
  });

  const DrawerNav = () => {
    return (
      <Drawer.Navigator
        edgeWidth={100}
        drawerType="slide"
        drawerContent={(props) => <DrawerLayout {...props} />}
      >
        <Drawer.Screen name="Root" component={RootStack} />
      </Drawer.Navigator>
    );
  };

  if (!fontsLoaded) {
    return null;
  }

  if (!isReady) {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator size="large" color={Colors.blue} />
      </View>
    );
  }

  if (!isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator size="large" color={Colors.blue} />
      </View>
    );
  }

  return (
    <AppearanceProvider>
      <NavigationContainer
        theme={myTheme}
        initialState={initialState}
        onStateChange={(state) =>
          AsyncStorage.setItem(PERSISTANCE_KEY, JSON.stringify(state))
        }
      >
        <DrawerNav />
      </NavigationContainer>
    </AppearanceProvider>
  );
}
