import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import MovieBookingScreen from "../../screen/MovieBookingScreen";
import MovieBookingScreen2 from "../../screen/MovieBookingScreen/MovieBookingScreen2";
import MovieBookingScreen3 from "../../screen/MovieBookingScreen/MovieBookingScreen3";
import MovieBookingScreen4 from "../../screen/MovieBookingScreen/MovieBookingScreen4";
const Stack = createStackNavigator();

const MovieBookingStack = () => {
  return (
    <Stack.Navigator
      headerMode={"none"}
      initialRouteName={"MovieBookingScreen2"}
    >
      <Stack.Screen name="MovieBookingScreen" component={MovieBookingScreen} />
      <Stack.Screen
        name="MovieBookingScreen2"
        component={MovieBookingScreen2}
      />
      <Stack.Screen
        name="MovieBookingScreen3"
        component={MovieBookingScreen3}
      />
      <Stack.Screen
        name="MovieBookingScreen4"
        component={MovieBookingScreen4}
      />
    </Stack.Navigator>
  );
};

export default MovieBookingStack;

const styles = StyleSheet.create({});
