import React, { useState } from "react";
import {
  View,
  TouchableWithoutFeedback,
  Image,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";

import Colors from "../../constants/Colors";

import child from "../../assets/images/child.png";
import adolescent from "../../assets/images/adolescent.png";
import doctor from "../../assets/images/doctor.png";
import questions from "../../assets/images/questions.png";

import ScheduleCard from "../../components/ScheduleCard";
import ScheduleModal from "../../components/ScheduleModal";

const SCREEN_WIDTH = Dimensions.get("screen").width;
const SCREEN_HEIGHT = Dimensions.get("screen").height;

const schedules = [
  {
    id: "ChildSchedule",
    title: "Child",
    ages: "Birth - 6 years",
    image: child,
    content: "",
  },
  {
    id: "AdolescentSchedule",
    title: "Adolescent",
    ages: "7 - 18 years",
    image: adolescent,
    content: "",
  },
  {
    id: "CatchUpSchedule",
    title: "Catch Up",
    ages: "4mos - 18yrs",
    image: doctor,
    content: "",
  },
  {
    id: "CDCResources",
    title: "Resources",
    ages: "CDC Resources",
    image: questions,
    content: "",
  },
];

const VaxSchedulesScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <View style={styles.cardsContainer}>
        <Text style={{ color: "red" }}>
          Finish Screens for Adolescent, Catch Up, & Resources
        </Text>
        {schedules.map((schedule) => (
          <ScheduleCard
            key={schedule.id}
            schedule={schedule}
            navigation={navigation}
          />
        ))}
      </View>
      {/* {modal !== null && <ScheduleModal {...modal} {...{ close }} />} */}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  cardsContainer: {
    height: "70%",
    display: "flex",
    justifyContent: "space-evenly",
    borderWidth: 1,
    borderColor: "transparent",
    borderRadius: 10,
  },
  modalCard: {
    width: SCREEN_WIDTH / 1.1,
    height: SCREEN_HEIGHT * 0.7,
  },
});

export default VaxSchedulesScreen;
