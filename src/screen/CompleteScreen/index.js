import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import Button from "../../common/Button";
import HeaderBar from "../../common/HeaderBar";
import { neutral3Color } from "../../strings/colors";
import { sizeFont, sizeHeight, sizeWidth } from "../../utils/Size";

const CompleteScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <HeaderBar
        leftButton={require("../../../assets/Back.png")}
        onPressLeft={() => {
          navigation.goBack();
        }}
      />

      <Image
        style={styles.backgroundImage}
        source={require("../../../assets/Flower.png")}
      />
      <Image
        style={styles.giftImage}
        source={require("../../../assets/Gift.png")}
      />
      <Image
        style={styles.image1}
        source={require("../../../assets/Popcorn-2.png")}
      />
      <Image
        style={styles.image2}
        source={require("../../../assets/Soda.png")}
      />
      <Image
        style={styles.image3}
        source={require("../../../assets/ticket_2.png")}
      />
      <View
        style={{ marginHorizontal: sizeWidth(6.4), marginTop: sizeHeight(50) }}
      >
        <Text style={styles.title}>Ticket Booked Successfully</Text>
        <Text style={styles.subtitle}>
          Congratulations! Your ticket has been booked successfully. This page
          will direct to the ticket page.
        </Text>
      </View>
      <Button
        styleViewButton={styles.button}
        textButton={"Home"}
        onPress={() => {
          navigation.navigate("HomeScreen");
        }}
      />
    </View>
  );
};

export default CompleteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: sizeWidth(290.67),
    height: sizeHeight(159.11),
    // resizeMode: "contain",
    position: "absolute",
    top: -sizeHeight(10.02),
    left: -sizeWidth(95.46),
  },
  giftImage: {
    width: sizeWidth(48.26),
    height: sizeWidth(48.26),
    resizeMode: "contain",
    position: "absolute",
    top: sizeHeight(29.29),
    left: sizeWidth(25.86),
  },
  image1: {
    width: sizeWidth(19.2),
    height: sizeWidth(19.2),
    resizeMode: "contain",
    position: "absolute",
    top: sizeHeight(25.39),
    left: sizeWidth(6.392),
    transform: [{ rotate: "-28deg" }],
  },
  image2: {
    width: sizeWidth(15.2),
    height: sizeWidth(15.2),
    resizeMode: "contain",
    position: "absolute",
    top: sizeHeight(12.63),
    left: sizeWidth(53.33),
    transform: [{ rotate: "33deg" }],
  },
  image3: {
    width: sizeWidth(16.8),
    height: sizeWidth(16.8),
    resizeMode: "contain",
    position: "absolute",
    top: sizeHeight(20.44),
    left: sizeWidth(79.46),
    transform: [{ rotate: "33deg" }],
  },
  title: {
    fontSize: sizeFont(2.68),
    fontWeight: "700",
    color: "white",
    textAlign: "center",
  },
  subtitle: {
    fontSize: sizeFont(2.08),
    fontWeight: "400",
    color: neutral3Color,
    marginTop: sizeHeight(2),
    textAlign: "center",
    marginHorizontal: sizeWidth(6.4),
  },
  button: {
    position: "absolute",
    bottom: sizeHeight(4.0),
    marginHorizontal: sizeWidth(6.4),
  },
});
