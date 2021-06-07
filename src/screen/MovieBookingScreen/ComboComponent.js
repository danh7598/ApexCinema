import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { neutral3Color, primaryColor } from "../../strings/colors";
import { sizeFont, sizeHeight, sizeWidth } from "../../utils/Size";
const ComboComponent = ({ popcorn, soda, name, description, price, index, onPress }) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        { borderColor: index ? primaryColor : "#2A2937" },
      ]}
      index={index}
      onPress={onPress}
    >
      <View
        style={{
          width: sizeWidth(22),
          flexDirection: "row",
          paddingHorizontal: sizeWidth(4.26),
        }}
      >
        <Image style={styles.icon} source={popcorn} />
        <Image style={styles.icon1} source={soda} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.price}>${price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ComboComponent;

const styles = StyleSheet.create({
  container: {
    height: sizeHeight(14.0625),
    borderRadius: sizeWidth(3.2),
    backgroundColor: "#2A2937",
    flexDirection: "row",
    marginTop: sizeHeight(2.6),
    borderWidth: sizeWidth(0.5),
    // paddingHorizontal: sizeWidth(4.26),
  },
  icon: {
    width: sizeWidth(15.2),
    height: sizeWidth(15.2),
    alignSelf: "center",
    resizeMode: "contain",
    // backgroundColor: "green",
  },
  icon1: {
    width: sizeWidth(11.46),
    height: sizeHeight(5.72),
    alignSelf: "center",
    marginHorizontal: -sizeWidth(9),
    marginTop: sizeHeight(2),
  },
  textContainer: {
    // backgroundColor: "blue",
    width: sizeWidth(60.8),
    height: sizeHeight(14.0625),
    marginLeft: sizeWidth(1),
  },
  name: {
    fontSize: sizeFont(2.08),
    fontWeight: "700",
    color: "white",
    marginTop: sizeHeight(2),
  },
  description: {
    fontSize: sizeFont(1.82),
    fontWeight: "400",
    color: neutral3Color,
    marginTop: sizeHeight(1),
  },
  price: {
    fontSize: sizeFont(2.08),
    fontWeight: "700",
    color: primaryColor,
    position: "absolute",
    right: 0,
    bottom: sizeHeight(2),
  },
});
