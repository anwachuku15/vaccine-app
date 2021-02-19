import React from "react";
import { View, Text, Button } from "react-native";
import ScreenContainer from "../../components/ScreenContainer";

const IntroScreen = ({ navigation }) => {
  return (
    <ScreenContainer>
      <Text>INTRO SCREEN</Text>
      <Button title="Sign In" onPress={() => navigation.push("SignIn")} />
      <Button
        title="Create Account"
        onPress={() => navigation.push("CreateAccount")}
      />
    </ScreenContainer>
  );
};

export default IntroScreen;
