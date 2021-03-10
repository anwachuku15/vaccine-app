import React, { useState } from "react";
import {
  View,
  TouchableWithoutFeedback,
  Image,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";

import ScheduleThumbnail from "./ScheduleThumbnail";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("screen");

const Content = () => (
  <View>
    <Text>This is where the schedule will go</Text>
  </View>
);

const ScheduleModal = ({ schedule, close }) => {
  return (
    <>
      <View style={{ backgroundColor: "white" }} />
      <View
        style={{
          opacity: textOpacity,
          paddingTop: position.height,
          ...p,
        }}
      >
        <Content />
      </View>
      <View style={{ height: position.height }}>
        <ScheduleThumbnail
          schedule={schedule}
          borderRadius={borderRadius.value}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  modalCard: {
    width: SCREEN_WIDTH / 1.1,
    height: SCREEN_HEIGHT * 0.7,
  },
});

export default ScheduleModal;
