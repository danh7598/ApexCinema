import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import HeaderBar from "../../common/HeaderBar";
import Profile from "../ProfileScreen/Profile";
import { neutral3Color, primaryColor } from "../../strings/colors";
import { sizeFont, sizeHeight, sizeWidth } from "../../utils/Size";

export default class PointNudoozScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headContainer}>
          <HeaderBar
            leftButton={require("../../../assets/Back.png")}
            title="Point Nudooz"
            onPressLeft={() => {
              this.props.navigation.goBack();
            }}
          />
        </View>
        <View style={styles.midContainer}>
          <View style={styles.profileContainer}>
            <Profile navigation={this.props.navigation} />
          </View>
          <View style={styles.rewardContainer}>
            <Image
              style={styles.image}
              source={require("../../../assets/vip-2.png")}
            />
            <View style={styles.rewardBar}></View>
            <Text style={styles.title}>Rewards</Text>
            <Text style={styles.subtitle}>Gold Member *</Text>
            <Text style={styles.subtitle2}>40% Left Up to Diamond Member</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#201F28",
  },
  headContainer: {
    flex: 0.75,
    // backgroundColor: "yellow",
  },
  midContainer: {
    flex: 5,
    // backgroundColor: "blue",
    // alignItems: "center",
    // justifyContent: "center",
  },
  profileContainer: {
    height: sizeHeight(17.6),
    // backgroundColor: "blue",
  },
  rewardContainer: {
    alignItems: "center",
  },
  image: {
    width: sizeWidth(49.86),
    height: sizeHeight(23.43),
    resizeMode: "contain",
    marginTop: sizeHeight(4),
  },
  rewardBar: {
    height: sizeHeight(1),
    width: sizeWidth(87.2),
    marginHorizontal: sizeWidth(6.4),
    backgroundColor: primaryColor,
    marginTop: sizeHeight(7.6),
    borderRadius: 4,
  },
  title: {
    fontSize: sizeFont(2.6),
    fontWeight: "700",
    marginTop: sizeHeight(3.64),
    color: "white",
  },
  subtitle: {
    fontSize: sizeFont(1.82),
    fontWeight: "500",
    marginTop: sizeHeight(1.5625),
    color: primaryColor,
  },
  subtitle2: {
    fontSize: sizeFont(2.08),
    fontWeight: "400",
    marginTop: sizeHeight(1.95),
    color: neutral3Color,
  },
});
