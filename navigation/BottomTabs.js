import React, { useLayoutEffect } from "react";
import { Text } from "react-native";
import {
  useNavigationState,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DashboardStack from "./DashboardStack";
import ProfileStack from "./ProfileStack";
import Colors from "../constants/Colors";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Octicons from "react-native-vector-icons/Octicons";

const BottomTabs = () => {
  const Tabs = createBottomTabNavigator();

  return (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: Colors.pinkcandy,
        inactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen
        name="DashboardTab"
        component={DashboardStack}
        initialParams={{ firstRoute: "Dashboard" }}
        options={{
          tabBarIcon: (tabInfo) => (
            <MaterialIcons name="dashboard" color={tabInfo.color} size={30} />
          ),
          tabBarLabel: ({ focused }) => {
            let labelColor = focused ? Colors.blue : "gray";
            return (
              <Text style={{ fontSize: 10, color: labelColor }}>Dashboard</Text>
            );
          },
        }}
      />
      <Tabs.Screen
        name="ProfileTab"
        component={ProfileStack}
        initialParams={{ firstRoute: "Profile" }}
        options={{
          tabBarIcon: ({ color }) => (
            <Octicons name="person" color={color} size={30} />
          ),
          tabBarLabel: ({ focused }) => {
            let labelColor = focused ? Colors.blue : "gray";
            return (
              <Text style={{ fontSize: 10, color: labelColor }}>Profile</Text>
            );
          },
        }}
      />
    </Tabs.Navigator>
  );
};

export default BottomTabs;
