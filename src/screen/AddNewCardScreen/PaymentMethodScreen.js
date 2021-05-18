import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import HeaderBar from "../../common/HeaderBar";
import { sizeFont, sizeHeight, sizeWidth } from "../../utils/Size";

const PaymentMethodScreen = ({ navigation }) => {
  const onPress = () => {
    navigation.navigate("CreditCardScreen");
  };
  return (
    <View style={styles.container}>
      <HeaderBar
        leftButton={require("../../../assets/Back.png")}
        title={"Select A Payment Method"}
      />
      <TouchableOpacity>
        <View style={styles.methodContainer}>
          <Image
            style={styles.icon}
            source={require("../../../assets/Bank.png")}
          />
          <Text style={styles.text}>Bank Card</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.methodContainer}>
          <Image
            style={styles.icon}
            source={require("../../../assets/Credit-card.png")}
          />
          <Text style={styles.text}>Credit Card</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.methodContainer}>
          <Image
            style={styles.icon}
            source={require("../../../assets/Money.png")}
          />
          <Text style={styles.text}>Money</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PaymentMethodScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  methodContainer: {
    marginHorizontal: sizeWidth(6.4),
    marginTop: sizeHeight(8.07),
    backgroundColor: "#2A2937",
    borderRadius: sizeWidth(3.2),
    alignItems: "center",
    height: sizeHeight(14.32),
  },
  icon: {
    height: sizeWidth(28.8),
    width: sizeWidth(28.8),
    resizeMode: "contain",
    marginTop: -sizeHeight(7.03),
  },
  text: {
    fontSize: sizeFont(2.6),
    fontWeight: "700",
    textAlign: "center",
    color: "white",
  },
});
