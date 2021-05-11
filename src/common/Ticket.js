import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { sizeFont, sizeHeight, sizeWidth } from "../utils/Size";
import Rating from "./Rating";
import PropTypes from "prop-types";
class Ticket extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.container}>
        <Image
          style={styles.baseBackground}
          source={require("../../assets/Base.png")}
        />
        <View style={styles.pictureView}>
          <Image style={styles.picture} source={this.props.source} />
        </View>
        <View style={styles.textView}>
          <Text style={styles.title}>{this.props.title}</Text>
          <View style={{ marginTop: sizeHeight(1) }}>
            <Rating
              rate={this.props.rate}
              rateCount={this.props.rateCount}
              number={this.props.number}
            />
          </View>
          <Text style={styles.dayText}>{this.props.day}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: sizeHeight(23),
    // alignItems: "center",
    marginTop: sizeHeight(1),
    width: sizeWidth(88.2),
    marginBottom: sizeHeight(1),
    marginHorizontal: sizeWidth(6.4),
    // justifyContent: "center",
    flexDirection: "row",
    // backgroundColor: "red",
  },
  baseBackground: {
    height: sizeHeight(23),
    width: sizeWidth(88.2),
    resizeMode: "cover",
    // backgroundColor: "yellow",
    position: "absolute",
    alignSelf: "center",
    // marginTop: sizeHeight(1),
  },
  pictureView: {
    // marginVertical: sizeHeight(2),
    // marginLeft: sizeHeight(2),
    // backgroundColor: "green",
    height: sizeHeight(23),
    width: sizeWidth(30.67),
    // justifyContent: "center",
    // opacity: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  picture: {
    width: sizeWidth(23.73),
    height: sizeHeight(19),
  },
  textView: {
    height: sizeHeight(23),
    width: sizeWidth(56.53),
    // backgroundColor: "blue",
    // opacity: 0.5,
    paddingLeft: sizeHeight(1),
  },
  title: {
    fontSize: sizeFont(5.33),
    fontWeight: "700",
    lineHeight: sizeHeight(4.5),
    marginRight: sizeHeight(8),
    marginTop: sizeHeight(1),
    // marginLeft: sizeHeight(1),
    marginBottom: sizeHeight(1),
    color: "white",
  },
  dayText: {
    marginTop: sizeHeight(2.5),
    fontSize: sizeFont(3.73),
    fontWeight: "400",
    // marginBottom: sizeHeight(2),
    textAlign: "right",
    marginHorizontal: sizeHeight(2),
    marginVertical: sizeHeight(2),
    color: "#817F95",
  },
});
Ticket.propTypes = {
  source: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  rateCount: PropTypes.number.isRequired,
  rate: PropTypes.number.isRequired,
  number: PropTypes.number.isRequired,
  day: PropTypes.string.isRequired,
};

export default Ticket;
