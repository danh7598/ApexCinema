import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { sizeFont, sizeHeight, sizeWidth } from "../utils/Size";

const HeaderBar = ({
  leftButton,
  right1Button,
  right2Button,
  title,
  onPressLeft,
  onPressRight1,
  onPressRight2,
  style,
}) => {
  //console.log(sizeWidth(6.4))
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity style={styles.viewButton} onPress={onPressLeft}>
        <Image style={styles.imgButton} source={leftButton} />
      </TouchableOpacity>
      <Text style={styles.textTitle}>{title}</Text>
      <View style={styles.viewGroupRightButton}>
        {right1Button && (
          <TouchableOpacity style={styles.viewButton} onPress={onPressRight1}>
            <Image style={styles.imgButton} source={right1Button} />
          </TouchableOpacity>
        )}
        {right2Button && (
          <TouchableOpacity
            style={[styles.viewButton, { marginLeft: sizeWidth(3.2) }]}
            onPress={onPressRight2}
          >
            <Image style={styles.imgButton} source={right2Button} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default HeaderBar;

const styles = StyleSheet.create({
  container: {
    width: sizeWidth(100),
    height: sizeHeight(10),
    //backgroundColor: 'skyblue',
    flexDirection: "row",
    paddingLeft: sizeWidth(6.4),
    alignItems: "center",
    //justifyContent: 'space-between'
  },
  viewButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2A2937",
    borderRadius: sizeWidth(3.2),
    width: sizeWidth(12.8),
    height: sizeWidth(12.8),
  },
  imgButton: {
    width: sizeWidth(6.4),
    height: sizeWidth(6.4),
    tintColor: "white",
  },
  textTitle: {
    marginLeft: sizeWidth(4.2),
    fontSize: sizeFont(2.34375),
    color: "white",
    fontWeight: "600",
  },
  viewGroupRightButton: {
    flexDirection: "row",
    position: "absolute",
    right: sizeWidth(6.4),
  },
});
