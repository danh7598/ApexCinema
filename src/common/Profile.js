import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { primaryColor } from "../strings/colors";
import { sizeFont, sizeHeight, sizeWidth } from "../utils/Size";

export default class Profile extends Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.profileBar}
        onPress={() => {
          this.props.navigation.navigate("ProfileScreen");
        }}
      >
        <View style={styles.profileContainer}>
          <Image
            style={styles.icon}
            source={require("../../assets/Next.png")}
          />
        </View>
        <Image
          style={styles.image}
          source={require("../../assets/Avatar.png")}
        />
        <View style={styles.textView}>
          <Text style={styles.title}>Anita Rose</Text>
          <Text style={styles.subtitle}>anitarose@gmail.com</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  profileBar: {
    width: sizeWidth(87.2),
    height: sizeHeight(11.7),
    // backgroundColor: "yellow",
    marginHorizontal: sizeWidth(6.4),
    marginBottom: sizeHeight(2.6),
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  profileContainer: {
    width: sizeWidth(84),
    height: sizeHeight(10.15),
    backgroundColor: "#2A2937",
    borderRadius: 16,
    // alignItems: "center",
    justifyContent: "center",
    // position: "absolute",
    paddingHorizontal: sizeWidth(4.2),
  },
  image: {
    height: sizeHeight(10.15),
    width: sizeWidth(15.46),
    position: "absolute",
    alignSelf: "flex-start",
    borderRadius: 8,
    top: 0,
  },
  textView: {
    height: sizeHeight(10.15),
    width: sizeWidth(60),
    position: "absolute",
    alignSelf: "center",
    // backgroundColor: "yellow",
    left: sizeWidth(18.13),
    marginLeft: sizeWidth(1),
  },
  title: {
    fontSize: sizeFont(5.3),
    fontWeight: "700",
    color: "white",
    marginTop: sizeWidth(1.5),
  },
  subtitle: {
    fontSize: sizeFont(3.7),
    fontWeight: "500",
    color: primaryColor,
    marginTop: sizeHeight(1),
  },
  icon: {
    width: sizeWidth(5.3),
    height: sizeWidth(5.3),
    alignSelf: "flex-end",
  },
});
