import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useColorScheme } from "react-native-appearance";

import { Ionicons, FontAwesome } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import child from "../assets/images/child.png";

let text, themeColor;
const DrawerLayout = ({ navigation, state }) => {
  const scheme = useColorScheme();
  if (scheme === "dark") {
    text = "white";
    themeColor = "black";
  } else {
    text = "black";
    themeColor = "white";
  }

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <TouchableOpacity onPress={() => {}}>
          <Image
            source={child}
            style={{ alignSelf: "center", marginRight: 30, ...styles.photo }}
          />
          <Text
            style={{
              ...styles.userName,
              color: text,
              alignSelf: "center",
              marginRight: 30,
            }}
          >
            User
          </Text>
        </TouchableOpacity>
        <View>
          <TouchableOpacity onPress={() => {}}>
            <Text style={{ ...styles.viewProfile, ...{ color: Colors.blue } }}>
              View Profile
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Text style={{ ...styles.editProfile, ...{ color: Colors.green } }}>
              Update Profile
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView>
        <TouchableOpacity
          onPress={() => {}}
          style={{ ...styles.list, ...styles.firstList }}
        >
          <View>
            <FontAwesome
              style={styles.icon}
              name="user-o"
              size={20}
              color={Colors.blue}
            />
            <Text style={{ ...styles.text, ...{ color: text } }}>
              {" "}
              Profile{" "}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.list}>
          <View>
            <Ionicons
              style={styles.icon}
              name="ios-calendar"
              size={20}
              color={Colors.blue}
            />
            <Text style={{ ...styles.text, ...{ color: text } }}> Events </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {}}
          style={[
            styles.list,
            {
              borderBottomWidth: 0.3,
              borderBottomColor: "black",
            },
          ]}
        >
          <View>
            <Ionicons
              style={styles.icon}
              name="md-analytics"
              size={20}
              color={Colors.blue}
            />
            <Text style={{ ...styles.text, ...{ color: Colors.blue } }}>
              {" "}
              Trending{" "}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.list}
          onPress={() => {
            navigation.navigate("Settings");
          }}
        >
          <View>
            <Ionicons
              style={styles.icon}
              name="ios-cog"
              size={23}
              color={Colors.blue}
            />
            <Text style={{ ...styles.text, ...{ color: text } }}>
              {" "}
              Settings{" "}
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  list: {
    padding: 10,
    height: 60,
    borderColor: "red",
    borderWidth: 0,
  },
  text: {
    position: "absolute",
    left: "24%",
    top: 10,
    fontSize: 16,
  },
  top: {
    paddingBottom: 40,
    paddingLeft: 30,
    marginBottom: 10,
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 30,
    marginTop: 20,
  },
  userName: {
    marginTop: 15,
    marginBottom: 10,
    color: "white",
    fontWeight: "bold",
  },
  userHandle: {
    marginTop: 15,
    color: "rgb(136, 153, 166)",
    fontWeight: "300",
  },
  viewProfile: {
    color: "white",
    position: "absolute",
    left: 0,
    top: 10,
  },
  editProfile: {
    color: "white",
    position: "absolute",
    right: 30,
    top: 10,
  },
  followingText: {
    color: "rgb(136, 153, 166)",
    fontWeight: "300",
  },
  followersText: {
    color: "rgb(136, 153, 166)",
    fontWeight: "300",
  },
  firstList: {
    marginTop: 0,
    borderTopWidth: 0.3,
    borderTopColor: "black",
    height: 60,
    borderTopWidth: 0.3,
  },
  icon: {
    position: "absolute",
    left: 20,
    top: 10,
  },
});

export default DrawerLayout;
