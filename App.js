import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HeaderBar from './src/common/HeaderBar';
import { sizeWidth } from './src/utils/Size';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <HeaderBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
