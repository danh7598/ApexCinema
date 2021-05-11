import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HeaderBar from "./src/common/HeaderBar";
import { sizeWidth } from "./src/utils/Size";
import Constants from "expo-constants";
import SettingScreen from "./src/screen/SettingScreen";
import SignInAndUpScreen from "./src/screen/SignInAndUpScreen";
import Verification1 from "./src/screen/VerificationScreen/Verification1";
import Verification2 from "./src/screen/VerificationScreen/Verification2";
import Verification3 from "./src/screen/VerificationScreen/Verification3";
import HistoryScreen from "./src/screen/HistoryScreen";
import ProfileScreen from "./src/screen/ProfileScreen";
import PointNudoozScreen from "./src/screen/PointNudoozScreen";
import AppNavigator from "./src/navigation/AppNavigator";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {/* <SignInAndUpScreen /> */}
      {/* <Verification3 /> */}
      {/* <HeaderBar
        leftButton={back}
        right1Button={zoom}
        right2Button={bell}
        title={"Verification"}
      /> */}
      {/* <HistoryScreen /> */}
      {/* <SettingScreen /> */}
      {/* <ProfileScreen /> */}
      {/* <PointNudoozScreen /> */}
      {/* <HistoryScreen /> */}
      <AppNavigator />
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
