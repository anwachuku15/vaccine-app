import React, { useState, useLayoutEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
} from "react-native";

import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";

import { Agenda, Calendar, CalendarList } from "react-native-calendars";

import Colors from "../../constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";

/*
TODO:
Allow physician/nurse to add vaccine appointment/reminders to patients calendars
DATA:
  - marked dates
  - 
*/

const markedDates = {
  "2021-02-10": {
    selected: true,
    marked: true,
    selectedColor: Colors.blue,
  },
  "2021-02-18": {
    selected: true,
    marked: true,
    selectedColor: Colors.blue,
  },
  "2021-02-22": {
    selected: true,
    marked: true,
    selectedColor: Colors.blue,
  },
};

const agendaItems = {
  "2012-05-22": [{ name: "item 1 - any js object" }],
  "2012-05-23": [{ name: "item 2 - any js object", height: 80 }],
  "2012-05-24": [],
  "2012-05-25": [{ name: "item 3 - any js object" }, { name: "any js object" }],
};

const ScheduleScreen = ({ navigation, route }) => {
  const scheme = useColorScheme();

  const [items, setItems] = useState({});
  const [isAgendaOpen, setIsAgendaOpen] = useState(false);

  useLayoutEffect(() => {
    // navigation.setOptions({ gestureEnabled: false });
  }, [route]);

  const timeToString = (time) => {
    const date = new Date(time);
    return date.toISOString().split("T")[0];
  };

  const loadItems = (day) => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        if (!items[strTime]) {
          items[strTime] = [];
          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: "Item for " + strTime + " #" + j,
              height: Math.max(50, Math.floor(Math.random() * 150)),
            });
          }
        }
      }
      const newItems = {};
      Object.keys(items).forEach((key) => {
        newItems[key] = items[key];
      });
      setItems(newItems);
    }, 1000);
  };

  // const renderDay = (item) => {

  // }

  const Header = () => (
    <View style={styles.header}>
      <View>
        <TouchableOpacity onPress={() => {}}>
          <AntDesign name="close" color="transparent" size={30} />
        </TouchableOpacity>
      </View>
      <Text style={styles.headerTitle}>My Calendar</Text>
      <View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="close" color={"white"} size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );

  const Month = () => (
    <Calendar
      onDayPress={(day) => setIsAgendaOpen(true)}
      onDayLongPress={(day) => console.log("selected day: ", day)}
      hideExtraDays={false}
      markedDates={markedDates}
    />
  );

  const List = () => (
    <CalendarList
      onVisibleMonthsChange={(months) => {
        console.log("now these months are visible", months);
      }}
      pastScrollRange={50}
      futureScrollRange={50}
      scrollEnabled={true}
      horizontal={true}
    />
  );

  return (
    <View style={styles.screen}>
      <Header />
      <View style={{ flex: 1 }}>
        <Agenda
          items={items}
          loadItemsForMonth={loadItems}
          // renderDay={renderDay}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: Colors.blue,
    borderBottomColor: "white",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  headerTitle: {
    color: "white",
    fontFamily: "montserrat",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
  },
  item: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
});

export default ScheduleScreen;
