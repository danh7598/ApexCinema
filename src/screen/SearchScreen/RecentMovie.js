import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { sizeFont, sizeHeight, sizeWidth } from "../../utils/Size";
import Rating from "../HistoryScreen/Rating";

const RecentMovie = ({ name, rate, rateCount, image }) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
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
        <View style={{ position: "absolute", bottom: 0 }}>
          <Text numberOfLines={1} style={styles.name}>
            {name}
          </Text>
          <Rating rate={rate} rateCount={rateCount} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RecentMovie;

const styles = StyleSheet.create({
  container: {
    width: sizeWidth(34.93),
    height: sizeHeight(32.68),
    marginTop: sizeHeight(2),
    marginRight: sizeWidth(5.33),
    // backgroundColor: "green",
  },
  image: {
    width: sizeWidth(34.73),
    height: sizeHeight(24.6),
    // borderRadius: sizeWidth(3.2),
    resizeMode: "stretch",
  },
  name: {
    fontSize: sizeFont(2.08),
    fontWeight: "700",
    color: "white",
    marginBottom: sizeHeight(0.5),
  },
});
