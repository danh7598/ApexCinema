import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignInAndUpScreen from "../screen/SignInAndUpScreen";
import NotificationScreen from "../screen/NotificationScreen";
import OnboardingStack from "./OnboardingStack";
import CreditCardStack from "./CreditCardStack";
import SearchScreen from "../screen/SearchScreen";
import HomeDrawer from "./HomeDrawer";
import CheckoutScreen from "../screen/CheckoutScreen";
import MovieBookingStack from "./MovieBookingStack";
import PaymentScreen from "../screen/PaymentScreen";
import CompleteScreen from "../screen/CompleteScreen";
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
      <Stack.Navigator
        headerMode={"none"}
        // initialRouteName={"CompleteScreen"}
      >
        <Stack.Screen name="Onboarding" component={OnboardingStack} />
        <Stack.Screen name="SignInAndUpScreen" component={SignInAndUpScreen} />
        <Stack.Screen
          name="HomeScreen"
          component={HomeDrawer}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="NotificationScreen"
          component={NotificationScreen}
        />
        <Stack.Screen name="CreditCardStack" component={CreditCardStack} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen name="MovieBookingStack" component={MovieBookingStack} />
        <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} />
        <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
        <Stack.Screen name="CompleteScreen" component={CompleteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
