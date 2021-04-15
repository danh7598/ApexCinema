import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HeaderBar from "./src/common/HeaderBar";
import { sizeWidth } from "./src/utils/Size";
import Constants from "expo-constants";
import SettingScreen from "./src/screen/SettingScreen";
import HistoryScreen from "./src/screen/HistoryScreen";
import ProfileScreen from "./src/screen/ProfileScreen";
import PointNudoozScreen from "./src/screen/PointNudoozScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {/* <HeaderBar
        leftButton={back}
        right1Button={zoom}
        right2Button={bell}
        title={"Verification"}
      /> */}
      {/* <HistoryScreen /> */}
      {/* <SettingScreen /> */}
      {/* <ProfileScreen /> */}
      <PointNudoozScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#201F28",
  },
});
