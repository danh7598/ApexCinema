import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SettingScreen from "../screen/SettingScreen";
import SignInAndUpScreen from "../screen/SignInAndUpScreen";
import Verification1 from "../screen/VerificationScreen/Verification1";
import Verification2 from "../screen/VerificationScreen/Verification2";
import Verification3 from "../screen/VerificationScreen/Verification3";
import HistoryScreen from "../screen/HistoryScreen";
import ProfileScreen from "../screen/ProfileScreen";
import PointNudoozScreen from "../screen/PointNudoozScreen";
import HomeScreen from "../screen/HomeScreen";
import NotificationScreen from "../screen/NotificationScreen";
const Stack = createStackNavigator();
const myTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#201F28",
  },
};
const AppNavigator = () => {
  return (
    <NavigationContainer theme={myTheme}>
      <Stack.Navigator headerMode={"none"} initialRouteName={"SettingScreen"}>
        <Stack.Screen name="SettingScreen" component={SettingScreen} />
        <Stack.Screen name="SignInAndUpScreen" component={SignInAndUpScreen} />
        <Stack.Screen name="HistoryScreen" component={HistoryScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="PointNudoozScreen" component={PointNudoozScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen
          name="NotificationScreen"
          component={NotificationScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
