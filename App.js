import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HeaderBar from './src/common/HeaderBar';
import { sizeWidth } from './src/utils/Size';
import Constants from 'expo-constants';
import back from './assets/Back.png';
import zoom from './assets/Zoom.png';
import bell from './assets/Bell.png';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {/* <HeaderBar
        leftButton={back}
        right1Button={zoom}
        right2Button={bell}
        title={'Verification'} /> */}
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
