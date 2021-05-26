import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { primaryColor } from "../../strings/colors";
import { sizeFont, sizeHeight, sizeWidth } from "../../utils/Size";

const AvatarInfoDrawer = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../../assets/Avatar.png")}
      />
      <View style={styles.nameView}>
        <Text style={styles.name}>Anita Rose</Text>
        <View style={{ flexDirection: "row", marginTop: sizeHeight(1) }}>
          <Image
            style={styles.icon}
            source={require("../../../assets/Coins.png")}
          />
          <Text style={styles.point}>3.924 points</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default AvatarInfoDrawer;

const styles = StyleSheet.create({
  container: {
    width: sizeWidth(48.53),
    height: sizeHeight(10.15625),
    // backgroundColor: "yellow",
    marginLeft: sizeWidth(6.4),
    marginTop: sizeHeight(9.375),
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: sizeWidth(15.46),
    height: sizeHeight(10.15625),
    resizeMode: "contain",
  },
  name: {
    fontSize: sizeFont(2.6),
    fontWeight: "700",
    color: "white",
  },
  point: {
    fontSize: sizeFont(1.82),
    fontWeight: "500",
    color: primaryColor,
  },
  icon: {
    width: sizeWidth(4.26),
    height: sizeWidth(4.26),
    resizeMode: "contain",
    marginRight: sizeWidth(1.5),
  },
  nameView: {
    alignItems: "center",
    marginLeft: sizeWidth(4.26),
  },
});
