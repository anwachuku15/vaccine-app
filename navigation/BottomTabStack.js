import React, { useLayoutEffect } from "react";
import {
  Pressable,
  TouchableOpacity,
  Dimensions,
  useColorScheme,
} from "react-native";
import {
  useNavigationState,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import BottomTabs from "./BottomTabs";
import ScheduleScreen from "../screens/User/ScheduleScreen";

import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";

import Colors from "../constants/Colors";

const BottomTabStack = ({ navigation, route }) => {
  const TabStack = createStackNavigator();
  const routes = useNavigationState((state) => state.routes);

  let dashboardTabRoutes = routes[0].state?.routes[0].state?.routes[0];
  let profileTabRoutes = routes[0].state?.routes[0].state?.routes[1];
  const focused = getFocusedRouteNameFromRoute(routes[0].state?.routes[0]);
  // const calendar = getFocusedRouteNameFromRoute()

  const scheme = useColorScheme();

  useLayoutEffect(() => {
    if (dashboardTabRoutes?.state?.index > 0 && focused === "DashboardTab") {
      navigation.setOptions({ swipeEnabled: false });
    } else if (profileTabRoutes?.state?.index > 0 && focused === "ProfileTab") {
      navigation.setOptions({ swipeEnabled: false });
    } else if (routes[0].state?.routes.length > 1) {
      navigation.setOptions({ swipeEnabled: false });
    } else {
      navigation.setOptions({ swipeEnabled: true });
    }
  }, [route]);

  return (
    <TabStack.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}
    >
      <TabStack.Screen name="BottomTabs" component={BottomTabs} />
      <TabStack.Screen
        name="ScheduleModal"
        component={ScheduleScreen}
        options={({ route, navigation }) => ({
          ...TransitionPresets.ModalPresentationIOS,
          // TODO: Increase gesture response distance
          cardStyle: {
            backgroundColor: scheme === "dark" ? "gray" : "lightgray",
          },
        })}
      />
    </TabStack.Navigator>
  );
};

export default BottomTabStack;
