import React from "react";
import { View, Text, Button } from "react-native";
import ScreenContainer from "../../components/ScreenContainer";

const CreateAccountScreen = ({ navigation }) => {
  return (
    <ScreenContainer>
      <Text>Create Account</Text>
      <Button title="Create Account" onPress={() => alert("TODO")} />
    </ScreenContainer>
  );
};

export default CreateAccountScreen;
