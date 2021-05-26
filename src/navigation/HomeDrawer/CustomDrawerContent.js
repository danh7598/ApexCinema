import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { primaryColor } from "../../strings/colors";
import { sizeFont, sizeHeight, sizeWidth } from "../../utils/Size";
import AvatarInfoDrawer from "./AvatarInfoDrawer";

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView style={{ backgroundColor: "#201F28" }} {...props}>
      <AvatarInfoDrawer />
      {/* <DrawerItemList {...props} /> */}
      <DrawerItem
        label={() => <Text style={styles.text}>Home</Text>}
        style={[styles.view, { marginTop: sizeHeight(6) }]}
        onPress={() => {
          props.navigation.navigate("HomeTopTab");
        }}
        icon={(focused, color, size) => {
          return (
            <Image
              style={styles.icon}
              source={require("../../../assets/Home.png")}
            />
          );
        }}
        activeTintColor={primaryColor}
        inactiveTintColor={"white"}
      />
      <DrawerItem
        label={() => <Text style={styles.text}>Voucher</Text>}
        style={styles.view}
        onPress={() => {
          props.navigation.navigate("HomeTopTab");
        }}
        icon={(focused, color, size) => {
          return (
            <Image
              style={styles.icon}
              source={require("../../../assets/Voucher.png")}
            />
          );
        }}
        activeTintColor={primaryColor}
        inactiveTintColor={"white"}
      />
      <DrawerItem
        label={() => <Text style={styles.text}>Location</Text>}
        style={styles.view}
        onPress={() => {
          props.navigation.navigate("HomeTopTab");
        }}
        icon={(focused, color, size) => {
          return (
            <Image
              style={styles.icon}
              source={require("../../../assets/Map.png")}
            />
          );
        }}
        activeTintColor={primaryColor}
        inactiveTintColor={"white"}
      />
      <DrawerItem
        label={() => <Text style={styles.text}>History</Text>}
        style={styles.view}
        onPress={() => {
          props.navigation.navigate("HistoryScreen");
        }}
        icon={(focused, color, size) => {
          return (
            <Image
              style={styles.icon}
              source={require("../../../assets/History.png")}
            />
          );
        }}
        activeTintColor={primaryColor}
        inactiveTintColor={"white"}
      />
      <DrawerItem
        label={() => <Text style={styles.text}>Setting</Text>}
        style={styles.view}
        onPress={() => {
          props.navigation.navigate("HomeTopTab");
        }}
        icon={(focused, color, size) => {
          return (
            <Image
              style={styles.icon}
              source={require("../../../assets/Gear.png")}
            />
          );
        }}
        activeTintColor={primaryColor}
        inactiveTintColor={"white"}
      />
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
  icon: {
    width: sizeWidth(6),
    height: sizeWidth(6),
    tintColor: "white",
  },
  view: {
    marginTop: sizeHeight(2),
    height: sizeHeight(4.5),
    // width: sizeWidth(41),
    paddingHorizontal: sizeWidth(3.2),
    justifyContent: "center",
    // flexDirection: "row",
    // backgroundColor: "yellow",
  },
  text: {
    fontSize: sizeFont(2.08),
    fontWeight: "600",
    color: "white",
    marginLeft: -sizeWidth(4.26),
    // lineHeight: responsiveWidth(4.53),
  },
});
