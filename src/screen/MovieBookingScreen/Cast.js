import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { sizeFont, sizeHeight, sizeWidth } from "../../utils/Size";

const Cast = ({ image, name }) => {
  return (
    <View style={styles.container}>
      <View style={{ height: sizeHeight(21.22), width: sizeWidth(31.73) }}>
        <View
          style={[
            styles.image,
            {
              position: "absolute",
              right: 0,
              top: sizeHeight(1.5625),
              backgroundColor: "#2A2937",
              borderRadius: sizeWidth(3.2),
            },
          ]}
        ></View>
        <Image
          style={[styles.image, { left: 0, position: "absolute" }]}
          source={image}
        />
      </View>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

export default Cast;

const styles = StyleSheet.create({
  container: {
    width: sizeWidth(31.73),
    height: sizeHeight(28),
    // backgroundColor: "yellow",
    marginTop: sizeHeight(2),
    marginRight: sizeWidth(5.33),
  },
  image: {
    width: sizeWidth(28.53),
    height: sizeHeight(19.66),
    backgroundColor: "green",
    borderRadius: sizeWidth(3.2),
  },
  name: {
    fontSize: sizeFont(2.08),
    fontWeight: "700",
    color: "white",
    marginTop: sizeHeight(1.5),
  },
});
