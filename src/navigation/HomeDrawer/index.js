import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HistoryScreen from "../../screen/HistoryScreen";
import SettingScreen from "../../screen/SettingScreen";
import HomeTopTab from "../HomeTopTab";
import CustomDrawerContent from "./CustomDrawerContent";
import { primaryColor } from "../../strings/colors";
const Drawer = createDrawerNavigator();

const HomeDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      drawerContentOptions={{
        activeTintColor: primaryColor,
        inactiveTintColor: "white",
      }}
    >
      <Drawer.Screen name="HomeTopTab" component={HomeTopTab} />
      <Drawer.Screen name="HistoryScreen" component={HistoryScreen} />
      <Drawer.Screen name="SettingScreen" component={SettingScreen} />
    </Drawer.Navigator>
  );
};

export default HomeDrawer;

const styles = StyleSheet.create({});
