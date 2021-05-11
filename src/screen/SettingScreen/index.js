import React, { Component } from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import HeaderBar from "../../common/HeaderBar";
import SettingBar from "../../common/SettingBar";
import { primaryColor } from "../../strings/colors";
import { sizeFont, sizeHeight, sizeWidth } from "../../utils/Size";
import ProfileData from "./ProfileData";
import Data from "./Data";
import Profile from "../../common/Profile";
export default class SettingScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headContainer}>
          <HeaderBar
            leftButton={require("../../../assets/Menu.png")}
            right2Button={require("../../../assets/Bell.png")}
            title={"Setting"}
          />
        </View>
        <View style={styles.midContainer}>
          <Profile navigation={this.props.navigation} />
          {Data.map((item, index) => {
            return (
              <SettingBar text={item.text} source={item.source} key={item.id} />
            );
          })}
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
  },
  midContainer: {
    flex: 5,
  },
});
