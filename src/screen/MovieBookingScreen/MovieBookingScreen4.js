import React, { useState } from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import Button from "../../common/Button";
import HeaderBar from "../../common/HeaderBar";
import { sizeHeight, sizeWidth } from "../../utils/Size";
import ComboComponent from "./ComboComponent";
import ComboData from "./ComboData";
const MovieBookingScreen4 = ({ navigation, route }) => {
  const { date, time, seat, price } = route.params;
  const [combo, setCombo] = React.useState(-1);
  const [comboPrice, setComboPrice] = useState(0);
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
      <ScrollView
        style={{ marginHorizontal: sizeWidth(6.4) }}
        showsVerticalScrollIndicator={false}
      >
        {ComboData.map((item, index) => {
          return (
            <ComboComponent
              name={item.name}
              description={item.description}
              popcorn={item.popcorn}
              price={item.price}
              soda={item.soda}
              key={item.id}
              index={combo === index}
              onPress={() => {
                if (combo != index) {
                  setCombo(index);
                  setComboPrice(item.price);
                } else if (combo === index) {
                  setCombo(-1);
                  setComboPrice(0);
                }
              }}
            />
          );
        })}
        <View style={styles.buttonView}></View>
      </ScrollView>
      <Button
        styleViewButton={styles.button}
        textButton={
          comboPrice === 0
            ? price + " Tickets - $" + price * 13
            : price + " Tickets & Food - $" + (price * 13 + comboPrice)
        }
        onPress={() => {
          navigation.navigate("PaymentScreen", {
            date: date,
            time: time,
            price: price,
            comboPrice: comboPrice,
            seat: seat,
          });
        }}
      />
    </View>
  );
};

export default MovieBookingScreen4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    position: "absolute",
    bottom: sizeHeight(7.0),
    marginHorizontal: sizeWidth(6.4),
  },
  buttonView: {
    height: sizeHeight(16.25),
    // backgroundColor: "rgba(32,31,40,0.1)",
    // bottom: 0,
    // position: "absolute",
  },
});
