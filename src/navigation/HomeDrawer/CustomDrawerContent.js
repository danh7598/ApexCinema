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
import DrawerItemComponent from "./DrawerItemComponent";
import DrawerData from './DrawerData'
const CustomDrawerContent = (props) => {
  const [drawer,setDrawer] = React.useState(0)
  return (
    <DrawerContentScrollView style={{ backgroundColor: "#201F28" }} {...props}>
      <AvatarInfoDrawer />
      <View style={{marginTop: sizeHeight(6)}}>
      {DrawerData.map((item, index) => {
        return (
          <DrawerItemComponent
            text={item.text}
            image={item.image}
            key={item.id}
            onPress={() => {
              setDrawer(index)
            props.navigation.navigate(item.navigate)
          }}
          index={drawer === index}
          />
        )
      })}
        </View>
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
