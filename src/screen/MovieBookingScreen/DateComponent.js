import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { neutral3Color, primaryColor } from "../../strings/colors";
import { sizeFont, sizeHeight, sizeWidth } from "../../utils/Size";

const DateComponent = ({ date, day, onPress, choosed, month, year }) => {
  return (
    <TouchableOpacity
      style={choosed ? styles.containerHighlight : styles.container}
      onPress={() => {
        onPress();
      }}
      choosed={choosed}
    >
      <Text style={styles.date}>{date}</Text>
      <Text style={[styles.day, { color: choosed ? "white" : neutral3Color }]}>
        {day}
      </Text>
      {/* <Text>{month}</Text>
      <Text>{year}</Text> */}
    </TouchableOpacity>
  );
};

export default DateComponent;

const styles = StyleSheet.create({
  container: {
    width: sizeWidth(6.93),
    height: sizeHeight(5.33),
    // backgroundColor: "yellow",
    // marginRight: sizeWidth(5.6),
    alignItems: "center",
  },
  date: {
    fontSize: sizeFont(2.08),
    fontWeight: "700",
    color: "white",
  },
  day: {
    fontSize: sizeFont(1.5625),
    fontWeight: "400",
    color: neutral3Color,
    marginTop: sizeHeight(0.5),
  },
  containerHighlight: {
    width: sizeWidth(10.67),
    height: sizeHeight(8.46),
    borderRadius: sizeWidth(2),
    alignItems: "center",
    backgroundColor: primaryColor,
    justifyContent: "center",
    marginTop: sizeHeight(4),
  },
});
