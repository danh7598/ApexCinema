import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Button from "../../common/Button";
import HeaderBar from "../../common/HeaderBar";
import { neutral3Color } from "../../strings/colors";
import { sizeFont, sizeHeight, sizeWidth } from "../../utils/Size";

const CheckoutScreen = ({ navigation, route }) => {
  const { seat, date, time } = route.params;
  const a = seat.slice(0, seat.length - 1);
  const b = seat[seat.length - 1].substr(0, 2);
  // console.log(a);
  // console.log(b);
  console.log(seat);
  // console.log(b);

  return (
    <View style={styles.container}>
      <HeaderBar
        leftButton={require("../../../assets/Back.png")}
        title={"Check Out"}
        right2Button={require("../../../assets/Network-connection.png")}
        onPressLeft={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.ticketContainer}>
        <View style={styles.ticContainer1}>
          <Text style={styles.name}>Movie: COCO (2021)</Text>
          <Text style={styles.description}>
            Animation | Adventure | Family | Fantasy | Music | Mystery
          </Text>
          <View
            style={{
              // backgroundColor: "orange",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                // flexDirection: "row",
                marginTop: sizeHeight(2.6),
                justifyContent: "space-between",
                // backgroundColor: "yellow",
              }}
            >
              <View>
                <Text style={styles.title}>Date</Text>
                <Text style={styles.info}>{date}</Text>
              </View>
              <View>
                <Text style={[styles.title, { marginTop: sizeHeight(2.6) }]}>
                  Hall
                </Text>
                <Text style={styles.info}>2</Text>
              </View>
            </View>
            <View
              style={{
                // flexDirection: "row",
                marginTop: sizeHeight(2.6),
                justifyContent: "space-between",
                // backgroundColor: "skyblue",
              }}
            >
              <View>
                <Text style={styles.title}>Time</Text>
                <Text style={styles.info}>{time}</Text>
              </View>
              {/* <View>
              <Text style={styles.title}>Row</Text>
              <Text style={styles.info}>5</Text>
            </View> */}
              <View>
                <Text style={styles.title}>Seat</Text>
                <Text style={styles.info}>
                  {a}
                  {b}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: -sizeHeight(2.2),
            justifyContent: "space-between",
            paddingHorizontal: sizeWidth(15.46),
            zIndex: 3,
            // backgroundColor: "orange",
            // position: "absolute",
          }}
        >
          <View style={styles.hook}></View>
          <View style={styles.hook}></View>
        </View>
        <View style={styles.ticContainer2}>
          <Image
            style={styles.picture2}
            source={require("../../../assets/BarCode.png")}
          />
          <Text style={styles.barCode}>1 4 6 3 7 4 7 3 2 5 6 7 8 4 2</Text>
        </View>
        <Image
          style={styles.picture}
          source={require("../../../assets/CocoImage.png")}
        />
      </View>
      <Button
        styleViewButton={styles.button}
        textButton={"Confirm"}
        onPress={() => {
          navigation.navigate("CompleteScreen");
        }}
      />
    </View>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ticketContainer: {
    marginHorizontal: sizeWidth(6.4),
    height: sizeHeight(71.61),
    // backgroundColor: "yellow",
    marginTop: sizeHeight(2),
  },
  picture: {
    width: sizeWidth(76.53),
    height: sizeHeight(22),
    borderRadius: sizeWidth(3.2),
    marginHorizontal: sizeWidth(5.33),
    position: "absolute",
    // resizeMode: "center",
  },
  ticContainer1: {
    height: sizeHeight(46.74),
    backgroundColor: "#2A2937",
    borderRadius: sizeWidth(3.2),
    marginTop: sizeHeight(7.8125),
    paddingHorizontal: sizeWidth(5.33),
    paddingTop: sizeHeight(16.79),
  },
  name: {
    fontSize: sizeFont(2.6),
    fontWeight: "700",
    color: "white",
  },
  description: {
    fontSize: sizeFont(1.82),
    fontWeight: "400",
    color: neutral3Color,
    marginTop: sizeHeight(1),
    lineHeight: sizeHeight(2.3),
  },
  title: {
    fontSize: sizeFont(1.82),
    fontWeight: "400",
    color: neutral3Color,
  },
  info: {
    fontSize: sizeFont(2.08),
    fontWeight: "500",
    color: "white",
    marginTop: sizeHeight(1),
  },
  hook: {
    width: sizeWidth(4.8),
    height: sizeHeight(4.81),
    backgroundColor: "#2A2937",
    borderRadius: sizeWidth(2.3),
    borderWidth: sizeWidth(1.4),
    borderColor: "#201F28",
  },
  ticContainer2: {
    height: sizeHeight(16.27),
    backgroundColor: "#2A2937",
    borderRadius: sizeWidth(3.2),
    marginTop: -sizeWidth(3),
    paddingHorizontal: sizeWidth(9),
  },
  picture2: {
    width: sizeWidth(68.8),
    height: sizeHeight(6.5),
    marginTop: sizeHeight(3.64),
  },
  barCode: {
    fontSize: sizeFont(2.08),
    fontWeight: "500",
    color: "white",
    marginTop: sizeHeight(1),
    alignSelf: "center",
    letterSpacing: sizeWidth(0.5),
  },
  button: {
    position: "absolute",
    bottom: sizeHeight(7.0),
    marginHorizontal: sizeWidth(6.4),
  },
});
