import React, { Component } from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { sizeFont, sizeHeight, sizeWidth } from "../utils/Size";
import PropTypes from "prop-types";
class SettingBar extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.container}>
        <View style={styles.leftContent}>
          <Image style={styles.leftIcon} source={this.props.source} />
          <Text style={styles.text}> {this.props.text}</Text>
        </View>
        <Image
          style={styles.rightIcon}
          source={require("../../assets/Next.png")}
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // width: sizeWidth(87.2),
    height: sizeHeight(6.5),
    backgroundColor: "#2A2937",
    borderRadius: 16,
    marginHorizontal: sizeWidth(6.4),
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: sizeWidth(4.2),
    justifyContent: "space-between",
    marginBottom: sizeHeight(2.6),
  },
  leftIcon: {
    width: sizeWidth(5.3),
    height: sizeWidth(5.3),
    // backgroundColor: "white",
    tintColor: "white",
    marginRight: sizeWidth(3.2),
  },
  rightIcon: {
    width: sizeWidth(5.3),
    height: sizeWidth(5.3),
    // backgroundColor: "white",
    // tintColor: "white",
    // marginRight: sizeWidth(3.2),
  },
  leftContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: sizeFont(4.2),
    fontWeight: "500",
    color: "white",
  },
});
SettingBar.propTypes = {
  source: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
};
export default SettingBar;
