import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HeaderBar from "../../common/HeaderBar";

const NotificationScreen = () => {
  return (
    <View style={styles.container}>
      <HeaderBar
        leftButton={require("../../../assets/Back.png")}
        title="Notifications"
        onPressLeft={() => {
          this.props.navigation.goBack();
        }}
      />
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
