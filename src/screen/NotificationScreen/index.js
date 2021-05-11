import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import HeaderBar from "../../common/HeaderBar";
import Notification from "./Notification";
import Data from "./Data";
import { sizeHeight } from "../../utils/Size";
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
      <FlatList
        data={Data}
        style={styles.listItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        keyExtractor={(item, index) => item.id}
        renderItem={({ item, index }) => {
          return (
            <Notification {...item} />
          );
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
  listItem: {
    marginTop: sizeHeight(1.04)
  },
  separator: {
    height: sizeHeight(1.97)
  }
});
