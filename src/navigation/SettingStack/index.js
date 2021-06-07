import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import SettingScreen from "../../screen/SettingScreen";
import ProfileScreen from "../../screen/ProfileScreen";
import PointNudoozScreen from "../../screen/PointNudoozScreen";
import NotificationScreen from "../../screen/NotificationScreen";

const Stack = createStackNavigator();

const SettingStack = () => {
  return (
    <Stack.Navigator headerMode={"none"}>
      <Stack.Screen name="SettingScreen" component={SettingScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="PointNudoozScreen" component={PointNudoozScreen} />
      <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
    </Stack.Navigator>
  );
};

export default SettingStack;

const styles = StyleSheet.create({});
