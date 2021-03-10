import React, { createRef } from "react";
import { Share } from "react-native";
import {
  View,
  TouchableWithoutFeedback,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  Platform,
  ScrollView,
} from "react-native";
import { SharedElement } from "react-navigation-shared-element";

import Colors from "../constants/Colors";
import ScheduleThumbnail from "./ScheduleThumbnail";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("screen");

const ScheduleCard = ({ schedule, navigation }) => {
  const container = createRef();

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.navigate("CDCSchedule", { schedule });
      }}
    >
      <SharedElement id="scheduleCard">
        <View ref={container} style={styles.scheduleCard}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <SharedElement id={schedule.id}>
              <Image source={schedule.image} style={styles.avatar} />
            </SharedElement>
            <SharedElement id={schedule.title}>
              <View style={{ flexDirection: "column" }}>
                <Text style={styles.scheduleTitle}>{schedule.title}</Text>
                {schedule.ages.length > 0 && (
                  <Text style={styles.scheduleSubtitle}>{schedule.ages}</Text>
                )}
              </View>
            </SharedElement>
          </View>
        </View>
      </SharedElement>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  scheduleCard: {
    width: SCREEN_WIDTH / 1.1,
    padding: 5,
    borderRadius: 20,
    backgroundColor: Colors.blue,
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 16,
  },
  scheduleTitle: {
    fontFamily: "montserrat",
    color: "white",
    fontSize: 24,
  },
  scheduleSubtitle: {
    fontFamily: "montserrat",
    color: "white",
    fontSize: 18,
  },
});

export default ScheduleCard;
