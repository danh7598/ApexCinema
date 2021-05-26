import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { primaryColor } from "../../strings/colors";
import { sizeFont, sizeHeight, sizeWidth } from "../../utils/Size";
import PropTypes from "prop-types";
const array = [1, 2, 3, 4, 5];
class Rating extends Component {
  render() {
    let number = Math.floor(this.props.rate);
    return (
      <View style={styles.container}>
        {array.map((item, index) => {
          if (index < number) {
            return (
              <Image
                style={styles.image}
                source={require("../../../assets/Star1.png")}
                key={item}
              />
            );
          } else {
            return (
              <Image
                style={styles.image}
                source={require("../../../assets/Star2.png")}
                key={item}
              />
            );
          }
        })}
        <Text style={styles.rateNumber}>{this.props.rate}</Text>
        <Text style={styles.rateCount}>({this.props.rateCount})</Text>
      </View>
    );
  }
}
Rating.propTypes = {
  rateCount: PropTypes.number.isRequired,
  rate: PropTypes.number.isRequired,
};
const styles = StyleSheet.create({
  container: {
    // height: sizeHeight(2.3),
    width: sizeWidth(34.13),
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    height: sizeWidth(3.2),
    width: sizeWidth(3.2),
    marginRight: sizeWidth(0.5),
    // backgroundColor: "yellow",
  },
  rateNumber: {
    fontSize: sizeFont(1.5625),
    fontWeight: "400",
    color: "white",
    marginLeft: sizeWidth(0.5),
    // backgroundColor: "green",
    lineHeight: sizeWidth(3.2),
    // textAlign: "justify",
    marginTop: sizeWidth(0.5),
  },
  rateCount: {
    fontSize: sizeFont(1.5625),
    fontWeight: "600",
    color: primaryColor,
    marginLeft: sizeWidth(1),
  },
});

export default Rating;
