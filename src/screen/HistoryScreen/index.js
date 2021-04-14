import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import Button from "../../common/Button";
import HeaderBar from "../../common/HeaderBar";
import Ticket from "../../common/Ticket";
import { sizeFont, sizeHeight, sizeWidth } from "../../utils/Size";

export default class index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headContainer}>
          <HeaderBar
            leftButton={require("../../../assets/Menu.png")}
            title={"History"}
            right1Button={require("../../../assets/Bell.png")}
          />
        </View>
        <View style={styles.midContainer}>
          {/* <Image
            style={styles.image}
            source={require("../../../assets/ticket_2.png")}
          />
          <View style={styles.content}>
            <Text style={styles.text1}>No Transactions</Text>
            <Text style={styles.text2}>
              Let's start watching the movie for the first deal
            </Text>
          </View> */}
          <Ticket />
        </View>
        <View style={styles.footContainer}>
          <Button
            textButton={"Home"}
            styleViewButton={{
              marginHorizontal: 24,
              bottom: sizeHeight(7.03),
              position: "absolute",
            }}
          />
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
  footContainer: {
    flex: 1,
    // backgroundColor: "green",
  },
  image: {
    width: sizeWidth(49.3),
    height: sizeWidth(49.3),
    resizeMode: "contain",
  },
  content: {
    marginTop: sizeHeight(6),
    alignItems: "center",
  },
  text1: {
    fontSize: sizeFont(5.33),
    fontWeight: "700",
    color: "white",
  },
  text2: {
    fontSize: sizeFont(4.26),
    fontWeight: "400",
    color: "#817F95",
    textAlign: "center",
    marginTop: sizeHeight(2),
    marginHorizontal: sizeWidth(16.26),
    lineHeight: sizeHeight(3.5),
  },
});
