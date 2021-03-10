import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ScheduleThumbnail = ({ schedule }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image source={schedule.image} style={styles.avatar} />
      <View style={{ flexDirection: "column" }}>
        <Text style={styles.scheduleTitle}>{schedule.title}</Text>
        {schedule.ages.length > 0 && (
          <Text style={styles.scheduleSubtitle}>{schedule.ages}</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default ScheduleThumbnail;
