import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Button from "../../common/Button";
import HeaderBar from "../../common/HeaderBar";
import {
  neutral2Color,
  neutral3Color,
  primaryColor,
} from "../../strings/colors";
import { sizeFont, sizeHeight, sizeWidth } from "../../utils/Size";
import Rating from "../HistoryScreen/Rating";

const PaymentScreen = ({ navigation, route }) => {
  const { date, time, price, comboPrice, seat } = route.params;

  return (
    <View style={styles.container}>
      <HeaderBar
        leftButton={require("../../../assets/Back.png")}
        title={"Movie Booking"}
        right2Button={require("../../../assets/Network-connection.png")}
        onPressLeft={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.imageContainer}>
        <View style={styles.imageView}>
          <View
            style={[
              styles.image,
              {
                position: "absolute",
                right: 0,
                top: sizeHeight(1.5625),
                backgroundColor: "#2A2937",
                borderRadius: sizeWidth(3.2),
              },
            ]}
          ></View>
          <Image
            style={[styles.image, { left: 0, position: "absolute" }]}
            source={require("../../../assets/coco.png")}
          />
        </View>
        <View
          style={{
            alignItems: "flex-start",
            justifyContent: "center",
            marginLeft: sizeWidth(4.26),
          }}
        >
          <Text style={styles.name}>COCO</Text>
          <Text style={styles.time}>{date}</Text>
          <Text
            style={[
              styles.time,
              { marginTop: sizeHeight(0.5), marginBottom: sizeHeight(1) },
            ]}
          >
            {time}
          </Text>
          <Rating rate={4.8} rateCount={1293} />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: sizeWidth(6.4),
          marginTop: sizeHeight(3),
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.name}>Payment Method</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("CreditCardStack");
          }}
        >
          <Text style={styles.change}>Change</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: sizeWidth(6.4),
          marginTop: sizeHeight(3),
          //   backgroundColor: "yellow",
        }}
      >
        <Image
          style={styles.logoCard}
          source={require("../../../assets/MasterCard.png")}
        />
        <Text style={styles.numberCard}>Master **** **** **** 2910</Text>
      </View>
      <Button
        styleViewButton={styles.button}
        textButton={
          comboPrice === 0
            ? price + " Tickets - $" + price * 13
            : price + " Tickets & Food - $" + (price * 13 + comboPrice)
        }
        onPress={() => {
          navigation.navigate("CheckoutScreen", {
            date: date,
            time: time,
            seat: seat,
          });
        }}
      />
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    width: sizeWidth(76.8),
    height: sizeHeight(24.21),
    // backgroundColor: "yellow",
    marginTop: sizeHeight(2),
    flexDirection: "row",
    marginHorizontal: sizeWidth(6.4),
  },
  imageView: {
    width: sizeWidth(36),
    height: sizeHeight(24.21),
    // backgroundColor: "green",
  },
  image: {
    width: sizeWidth(32.8),
    height: sizeHeight(22.65),
    resizeMode: "stretch",
  },
  name: {
    fontSize: sizeFont(2.6),
    fontWeight: "700",
    color: "white",
  },
  time: {
    fontSize: sizeFont(1.82),
    fontWeight: "400",
    color: neutral3Color,
    marginTop: sizeHeight(2),
  },
  change: {
    fontSize: sizeFont(1.82),
    fontWeight: "400",
    color: primaryColor,
  },
  logoCard: {
    width: sizeWidth(20.26),
    height: sizeHeight(6.25),
    resizeMode: "contain",
  },
  numberCard: {
    fontSize: sizeFont(2.08),
    fontWeight: "500",
    color: "white",
    alignSelf: "center",
    marginLeft: sizeWidth(4.26),
  },
  button: {
    position: "absolute",
    bottom: sizeHeight(4.0),
    marginHorizontal: sizeWidth(6.4),
  },
});
