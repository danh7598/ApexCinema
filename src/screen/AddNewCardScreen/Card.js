import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { sizeFont, sizeHeight, sizeWidth } from "../../utils/Size";
import { Switch } from "react-native-paper";
const Card = ({ name, number, valid, status }) => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.card}
        source={require("../../../assets/Pattern.png")}
      >
        <Switch
          value={isSwitchOn}
          onValueChange={onToggleSwitch}
          style={styles.switch}
        />
        <View style={styles.cardNumberView}>
          <Text style={styles.cardTitle}>CARD NUMBER</Text>
          <Text style={styles.cardNumber}>{number}</Text>
        </View>
        <View style={styles.cardNameView}>
          <Text style={styles.cardTitle}>CARD HOLDER NAME</Text>
          <Text style={styles.cardName}>{name}</Text>
        </View>
        <View style={styles.cardExp}>
          <Text style={styles.cardTitle}>VAID THRU</Text>
          <Text style={styles.cardName}>{valid}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    marginHorizontal: sizeWidth(6.4),
    height: sizeHeight(27.08),
    marginTop: sizeHeight(2),
  },
  cardNumberView: {
    marginLeft: sizeWidth(5.33),
    marginTop: sizeHeight(8.5),
  },
  cardTitle: {
    fontSize: sizeFont(1.3),
    fontWeight: "600",
    color: "#BEBDC4",
  },
  cardNumber: {
    marginTop: sizeHeight(0.5),
    fontSize: sizeFont(3.125),
    fontWeight: "700",
    // lineHeight: sizeHeight(2.0625),
    letterSpacing: sizeWidth(0.7),
    color: "white",
  },
  cardNameView: {
    position: "absolute",
    left: sizeWidth(5.33),
    bottom: sizeHeight(2),
  },
  cardName: {
    // marginTop: sizeHeight(0.5),
    fontSize: sizeFont(2.2),
    fontWeight: "700",
    // lineHeight: sizeHeight(2.0625),
    // letterSpacing: sizeWidth(0.7),
    color: "white",
  },
  cardExp: {
    position: "absolute",
    right: sizeWidth(12),
    bottom: sizeHeight(2),
  },
  switch: {
    position: "absolute",
    top: sizeHeight(2.5),
    left: sizeWidth(4),
  },
});
