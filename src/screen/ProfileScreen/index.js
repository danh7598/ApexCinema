import React, { Component } from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import HeaderBar from "../../common/HeaderBar";
import SettingBar from "../../common/SettingBar";
import { neutral3Color, primaryColor } from "../../strings/colors";
import { sizeFont, sizeHeight, sizeWidth } from "../../utils/Size";
import Data from "./Data";
export default class ProfileScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headContainer}>
          <HeaderBar
            leftButton={require("../../../assets/Back.png")}
            title={"Profile"}
            onPressLeft={() => {
              this.props.navigation.goBack();
            }}
          />
        </View>
        <View style={styles.midContainer}>
          <View style={styles.profileContainer}>
            <Image
              style={styles.image}
              source={require("../../../assets/Avatar.png")}
            />
            <Text style={styles.profileName}>Anita Rose</Text>
            <Text style={styles.profileEmail}>anitarose@gmail.com</Text>
            <TouchableOpacity>
              <Text style={styles.editText}>Edit</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: sizeHeight(2) }}>
            {Data.map((item, index) => {
              return (
                <SettingBar
                  key={item.id}
                  text={item.text}
                  source={item.source}
                  onPress={() => {
                    this.props.navigation.navigate(item.navigate);
                  }}
                />
              );
            })}
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
    width: sizeWidth(100),
    height: sizeHeight(31),
    // backgroundColor: "red",
    alignItems: "center",
  },
  image: {
    width: sizeWidth(27),
    height: sizeHeight(14.84),
    // backgroundColor: "green",
    resizeMode: "contain",
  },
  profileName: {
    fontSize: sizeFont(5.3),
    fontWeight: "700",
    marginTop: sizeHeight(2),
    color: "white",
  },
  profileEmail: {
    fontSize: sizeFont(3.7),
    fontWeight: "400",
    marginTop: sizeHeight(1),
    color: neutral3Color,
  },
  editText: {
    fontSize: sizeFont(3.7),
    fontWeight: "500",
    marginTop: sizeHeight(2),
    color: primaryColor,
  },
});
