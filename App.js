
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HeaderBar from './src/common/HeaderBar';
import { sizeWidth } from './src/utils/Size';
import Constants from 'expo-constants';

import SignInAndUpScreen from './src/screen/SignInAndUpScreen';
import Verification1 from './src/screen/VerificationScreen/Verification1';
import Verification2 from './src/screen/VerificationScreen/Verification2';
import Verification3 from './src/screen/VerificationScreen/Verification3';
import back from "./assets/Back.png";
import zoom from "./assets/Zoom.png";
import bell from "./assets/Bell.png";
import LoginScreen from "./src/screen/LoginScreen";
import HistoryScreen from "./src/screen/HistoryScreen";


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <SignInAndUpScreen />
      {/* <HeaderBar
        leftButton={back}
        right1Button={zoom}
        right2Button={bell}
        title={"Verification"}
      /> */}
//       <HistoryScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
   backgroundColor: '#201F28'
  },
});
