import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HeaderBar from "../../common/HeaderBar";
import Notification from "./Notification";
import Data from "./Data";
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
      {Data.map((item, index) => {
        return (
          <Notification
            title={item.title}
            time={item.time}
            image={item.image}
            key={item.id}
            seen={item.seen}
          />
        );
      })}
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
