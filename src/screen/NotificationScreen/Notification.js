import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { neutral3Color, neutral4Color } from "../../strings/colors";
import { sizeFont, sizeHeight, sizeWidth } from "../../utils/Size";

const Notification = ({ title, time, seen, image }) => {
  return (
    <View style={styles.container}>
      {seen === false && (
        <Image
          style={styles.oval}
          source={require("../../../assets/Oval.png")}
        />
      )}
      <TouchableOpacity style={styles.touchableContainer}>
        <Image style={styles.icon} source={image} />
        <View style={styles.textView}>
          <Text
            style={[
              styles.title,
              { color: seen === true ? neutral3Color : neutral4Color },
            ]}
          >
            {title}
          </Text>
          <Text style={styles.time}>{time}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    width: sizeWidth(87.2),
    height: sizeHeight(15.1),
    backgroundColor: "#2A2937",
    marginHorizontal: sizeWidth(6.4),
    // marginTop: sizeHeight(2.08),
    borderRadius: sizeWidth(3.2),
    flexDirection: "row",
    alignItems: "center",
  },
  touchableContainer: {
    // backgroundColor: 'skyblue',
    paddingHorizontal: sizeWidth(4.26),
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: sizeWidth(12.8),
    height: sizeWidth(12.8),
    resizeMode: "contain",
    // alignSelf: "center",
  },
  textView: {
    marginLeft: sizeWidth(4.26),
    height: sizeHeight(15.1),
    width: sizeWidth(56),
    paddingVertical: sizeHeight(2.08),
    // backgroundColor: "yellow",
  },
  title: {
    fontSize: sizeFont(1.82),
    // fontSize: 14,
    fontWeight: "400",
    color: neutral3Color,
  },
  time: {
    fontSize: sizeFont(1.5625),
    fontWeight: "400",
    color: neutral3Color,
    marginTop: sizeHeight(1.5625),
  },
  oval: {
    width: sizeWidth(6.4),
    height: sizeWidth(6.4),
    resizeMode: "contain",
    position: "absolute",
    right: -sizeWidth(2.13),
    top: -sizeHeight(1.04),
  },
});
