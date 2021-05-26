import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SettingScreen from "../screen/SettingScreen";
import SignInAndUpScreen from "../screen/SignInAndUpScreen";
import HistoryScreen from "../screen/HistoryScreen";
import ProfileScreen from "../screen/ProfileScreen";
import PointNudoozScreen from "../screen/PointNudoozScreen";
import NotificationScreen from "../screen/NotificationScreen";
import OnboardingStack from "./OnboardingStack";
import HomeTopTab from "./HomeTopTab";
import CreditCardStack from "./CreditCardStack";
import SearchScreen from "../screen/SearchScreen";
import MovieBookingScreen from "../screen/MovieBookingScreen";
import MovieBookingScreen2 from "../screen/MovieBookingScreen/MovieBookingScreen2";
import HomeDrawer from "./HomeDrawer";
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
      <Stack.Navigator headerMode={"none"} initialRouteName={"Home"}>
        <Stack.Screen name="Onboarding" component={OnboardingStack} />
        <Stack.Screen name="SignInScreen" component={SignInAndUpScreen} />
        <Stack.Screen name="SettingScreen" component={SettingScreen} />
        <Stack.Screen name="SignInAndUpScreen" component={SignInAndUpScreen} />
        <Stack.Screen name="HistoryScreen" component={HistoryScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="PointNudoozScreen" component={PointNudoozScreen} />
        <Stack.Screen
          name="Home"
          component={HomeDrawer}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="NotificationScreen"
          component={NotificationScreen}
        />
        <Stack.Screen name="CreditCardStack" component={CreditCardStack} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen
          name="MovieBookingScreen"
          component={MovieBookingScreen}
        />
        <Stack.Screen
          name="MovieBookingScreen2"
          component={MovieBookingScreen2}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
