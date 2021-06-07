import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import AddNewCardScreen from "../../screen/AddNewCardScreen";
import CreditCardScreen from "../../screen/AddNewCardScreen/CreditCardScreen";
import PaymentMethodScreen from "../../screen/AddNewCardScreen/PaymentMethodScreen";

const Stack = createStackNavigator();
const CreditCardStack = () => {
  return (
    <Stack.Navigator
      headerMode={"none"}
      // initialRouteName={"PaymentMethodScreen"}
    >
      <Stack.Screen
        name="PaymentMethodScreen"
        component={PaymentMethodScreen}
      />
      <Stack.Screen name="AddNewCardScreen" component={AddNewCardScreen} />
      <Stack.Screen name="CreditCardScreen" component={CreditCardScreen} />
    </Stack.Navigator>
  );
};

export default CreditCardStack;

const styles = StyleSheet.create({});
