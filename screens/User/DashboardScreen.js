import React from "react";
import { useColorScheme } from "react-native-appearance";
import {
  View,
  Text,
  Button,
  Dimensions,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import ScreenContainer from "../../components/ScreenContainer";
import Card from "../../components/Card";
import Colors from "../../constants/Colors";

const DashboardScreen = ({ navigation }) => {
  /*
  Telehealth
  Schedule
  Vaccines
  Symptoms
  Labs
  FAQ
  */
  return (
    <ScreenContainer>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Welcome back, User!</Text>
      </View>

      <View style={styles.cardRow}>
        <TouchableOpacity onPress={() => navigation.push("Telehealth")}>
          <Card title="Telehealth" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push("Schedule")}>
          <Card title="Schedule" />
        </TouchableOpacity>
      </View>
      <View style={styles.cardRow}>
        <TouchableOpacity onPress={() => navigation.push("Vaccines")}>
          <Card title="Vaccines" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push("Symptoms")}>
          <Card title="Symptoms" />
        </TouchableOpacity>
      </View>
      <View style={styles.cardRow}>
        <TouchableOpacity onPress={() => navigation.push("Labs")}>
          <Card title="Labs" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push("FAQ")}>
          <Card title="FAQ" />
        </TouchableOpacity>
      </View>
    </ScreenContainer>
  );
};

const SCREEN_WIDTH = Dimensions.get("screen").width;
const SCREEN_HEIGHT = Dimensions.get("screen").height;
const cardWidth = SCREEN_WIDTH / 2.5;

const styles = StyleSheet.create({
  cardRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 5,
    // borderColor: "black",
    // borderWidth: 2,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    padding: 12,
    height: 75,
    borderBottomColor: Colors.blue,
  },
  headerTitle: {
    color: Colors.blue,
    fontSize: 17,
    fontWeight: "500",
  },
});

export default DashboardScreen;
