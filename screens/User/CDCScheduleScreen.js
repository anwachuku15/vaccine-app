import React, {
  useLayoutEffect,
  useEffect,
  useRef,
  createRef,
  forwardRef,
  useState,
  useCallback,
} from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  ScrollView,
  FlatList,
  Switch,
  Animated,
  TouchableOpacity,
} from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Colors from "../../constants/Colors";

const CalendarTabs = createMaterialTopTabNavigator();

const { height: sHeight, width: sWidth } = Dimensions.get("screen");

const ageRanges = [
  {
    icon: "",
    age: "Birth",
  },
  {
    icon: "",
    age: "1 mo",
  },
  {
    icon: "",
    age: "2 mos",
  },
  {
    icon: "",
    age: "4 mos",
  },
  {
    icon: "",
    age: "6 mos",
  },
  {
    icon: "",
    age: "12 mos",
  },
  {
    icon: "",
    age: "15 mos",
  },
];

const ageRanges2 = [
  {
    icon: "",
    age: "18 mos",
  },
  {
    icon: "",
    age: "19-23 mos",
  },
  {
    icon: "",
    age: "2-3 years",
  },
  {
    icon: "",
    age: "4-6 years",
  },
];

const data = [ageRanges, ageRanges2];

const tabs = [
  { title: "Birth - 15mos", ref: createRef() },
  { title: "18mos - 6yrs", ref: createRef() },
];

const Tab = forwardRef(({ tab, onTabPress }, ref) => {
  return (
    <TouchableOpacity onPress={onTabPress} style={{ width: "50%" }}>
      <View
        ref={ref}
        style={{
          flexDirection: "row",
          paddingVertical: 10,
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "700",
              color: "white",
            }}
          >
            {tab.title}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
});

const Tabs = ({ route, tabs, scrollX, onTabPress }) => {
  const [tabOptions, setTabOptions] = useState([]);
  const tabsContainerRef = useRef();

  useEffect(() => {
    let options = [];
    tabs.forEach((tab) => {
      tab.ref.current.measureLayout(tabsContainerRef.current, (x) => {
        options.push({
          x: x,
        });
        if (options.length === tabs.length) {
          setTabOptions(options);
        }
      });
    });
  }, []);

  return (
    <View
      ref={tabsContainerRef}
      style={{
        marginTop: 10,
        width: sWidth / 1.5,
        backgroundColor: Colors.pinkcandy,
      }}
    >
      <View
        style={{
          flexDirection: "row",
        }}
      >
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            tab={tab}
            ref={tab.ref}
            scrollX={scrollX}
            onTabPress={() => onTabPress(index)}
          />
        ))}
      </View>
      {tabOptions.length > 0 && (
        <Indicator tabOptions={tabOptions} scrollX={scrollX} />
      )}
    </View>
  );
};

const Indicator = ({ tabOptions, scrollX }) => {
  const width = sWidth / 1.1;
  const inputRange = data.map((_, i) => i * width);
  const translateX = scrollX.interpolate({
    inputRange,
    outputRange: tabOptions.map((option) => option.x),
  });
  return (
    <Animated.View
      style={{
        width: sWidth / 3,
        height: 4,
        backgroundColor: Colors.blue,
        position: "absolute",
        bottom: 0,
        left: 0,
        transform: [
          {
            translateX: translateX,
          },
        ],
      }}
    />
  );
};

const CDCScheduleScreen = ({ navigation, route }) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const ref = useRef();
  const onTabPress = useCallback((tabIndex) => {
    ref?.current?.scrollToOffset({
      offset: tabIndex * sWidth,
    });
  });
  const [showTabs, setShowTabs] = useState(false);

  useLayoutEffect(() => {
    setShowTabs(true);
  }, []);

  const Calendar = ({ item }) => {
    return (
      <View style={styles.calendar}>
        <View style={styles.headerRow}>
          {item.map((range, index) => (
            <View style={styles.headerCell} key={index}>
              <Text style={styles.headerCellText} adjustsFontSizeToFit>
                {range.age}
              </Text>
            </View>
          ))}
        </View>
      </View>
    );
  };

  const CalendarContent = () => {
    return (
      <View style={styles.calendarContent}>
        <View></View>
      </View>
    );
  };

  const renderItem = ({ item, index, separators }) => {
    // const Calendar = item;
    return (
      <View>
        <View style={{ marginTop: 5 }}>
          <Calendar item={item} />
          <CalendarContent />
        </View>
      </View>
    );
  };
  return (
    <View style={styles.screen}>
      <SharedElement id={route.params.schedule.id}>
        <Image source={route.params.schedule.image} style={styles.avatar} />
      </SharedElement>
      <SharedElement id={route.params.schedule.title}>
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <Text style={styles.scheduleTitle}>
            {route.params.schedule.title}
          </Text>
          {route.params.schedule.ages.length > 0 && (
            <Text style={styles.scheduleSubtitle}>
              {route.params.schedule.ages}
            </Text>
          )}
        </View>
      </SharedElement>
      <Text style={{ color: "red" }}>Fix goBack swipe on Calendar</Text>
      {showTabs && route.params.schedule.title === "Child" && (
        <Tabs
          route={route}
          tabs={tabs}
          scrollX={scrollX}
          onTabPress={onTabPress}
        />
      )}
      {route.params.schedule.title === "Child" && (
        <Animated.FlatList
          ref={ref}
          horizontal
          keyExtractor={(item, index) => index.toString()}
          data={data}
          renderItem={renderItem}
          style={{ width: sWidth / 1.1 }}
          pagingEnabled
          bounces={false}
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
            //useNativeDriver true for transform/opacity
          )}
        />
      )}
    </View>
  );
};

CDCScheduleScreen.sharedElements = (route) => {
  const { schedule } = route.params;
  return [
    {
      id: schedule.id,
      animation: "move",
      resize: "clip",
    },
    {
      id: schedule.title,
      animation: "fade",
      resize: "clip",
    },
  ];
};

const avatarDimensions = sHeight / 10;
const styles = StyleSheet.create({
  screen: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    width: avatarDimensions,
    height: avatarDimensions,
    borderRadius: avatarDimensions / 2,
  },
  scheduleTitle: {
    fontFamily: "montserrat",
    color: Colors.blue,
    fontSize: 24,
  },
  scheduleSubtitle: {
    color: Colors.blue,
    fontFamily: "montserrat",
    fontSize: 18,
  },
  swipeTab: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  swipeTabOption: {
    // paddingVertical: 5,
    // marginHorizontal: 5,
  },
  indicator: {
    flex: 1,
    width: sWidth / 1.5 / 2,
    // height: 4,
    // marginTop: 8,
    borderWidth: 2,
    borderColor: Colors.blue,
    position: "absolute",
    bottom: 0,
    left: 0,
  },
  calendar: {
    display: "flex",
    width: sWidth / 1.1,
    marginTop: 10,
    borderWidth: 1,
    borderColor: Colors.blue,
  },
  headerRow: {
    height: sHeight / 20,
    backgroundColor: Colors.blue,
    flexDirection: "row",
  },
  headerCell: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    // borderWidth: StyleSheet.hairlineWidth,
    // borderColor: "white",
  },
  headerCellText: {
    color: "white",
  },
  calendarContent: {
    height: sHeight / 2.1,
    backgroundColor: Colors.pinkcandy,
  },
});

export default CDCScheduleScreen;
