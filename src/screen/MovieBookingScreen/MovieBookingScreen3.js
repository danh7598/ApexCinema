import React, { useEffect, useState } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Button from "../../common/Button";
import HeaderBar from "../../common/HeaderBar";
import {
  neutral2Color,
  neutral3Color,
  primaryColor,
} from "../../strings/colors";
import { sizeFont, sizeHeight, sizeWidth } from "../../utils/Size";
import Rating from "../HistoryScreen/Rating";

const Data = [
  [1, 1, 0, 1, 1, 0, 1, 1],
  [0, 1, 2, 1, 1, 1, 1, 0],
  [0, 2, 1, 1, 1, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 2, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
];

const MovieBookingScreen3 = ({ navigation, route }) => {
  const { date, time } = route.params;
  const [seat, setSeat] = React.useState(Data);
  const [price, setPrice] = useState(0);
  const [seatParam, setSeatParam] = useState([]);
  //   console.log(seat);
  // console.log(date);
  // console.log(time);

  var a = [];

  useEffect(() => {
    seat.forEach((item, index) => {
      seat[index].forEach((item, i) => {
        if (item === 3) {
          a.push(String.fromCharCode(97 + index).toUpperCase() + "" + i + ", ");
          setPrice(a.length);
          setSeatParam(a);
        } else {
          setPrice(a.length);
        }
      });
    });
  }, [seat]);
  // console.log(a);
  // console.log(price);
  // console.log(price);
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
      {/* Choose Seat */}
      <View style={styles.chooseSeat}>
        <Text style={styles.name}>Choose Seat</Text>
        <View style={styles.screen}>
          <Text style={styles.screenText}>SCREEN</Text>
        </View>
        <View style={styles.seatView}>
          {/* Screen */}

          {/* Screen */}
          {/* Seat */}
          {seat.map((item, index) => {
            return (
              <View style={{ flexDirection: "row" }} key={index.toString()}>
                {seat[index].map((ite, i) => {
                  return (
                    <TouchableOpacity
                      key={i.toString()}
                      onPress={() => {
                        if (ite === 1) {
                          setSeat((prevVal) => {
                            prevVal[index][i] = 3;

                            // console.log(seat);
                            let x = "";
                            // setSeatParam([
                            //   ...seatParam,
                            //   String.fromCharCode(97 + index).toUpperCase() +
                            //     "" +
                            //     i +
                            //     ", ",
                            // ]);
                            return [...prevVal];
                          });
                        } else if (ite === 3) {
                          setSeat((prevVal) => {
                            prevVal[index][i] = 1;
                            return [...prevVal];
                          });
                          // delete seatParam[i];
                        }
                        // console.log(seatParam);
                        // console.log(seat);
                      }}
                    >
                      {ite === 0 && <View style={styles.chair}></View>}
                      {(ite === 1 || ite === 2 || ite === 3) && (
                        <Image
                          style={[
                            styles.chair,
                            {
                              tintColor:
                                ite === 3
                                  ? primaryColor
                                  : ite === 2
                                  ? "white"
                                  : neutral2Color,
                            },
                          ]}
                          source={require("../../../assets/Armchair.png")}
                        />
                      )}
                    </TouchableOpacity>
                  );
                })}
              </View>
            );
          })}
          {/* Seat */}
        </View>
        {/* Chi tiet ghe */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginTop: sizeHeight(1.5),
          }}
        >
          <View
            style={{
              flexDirection: "row",
              //   backgroundColor: "yellow",
              height: sizeWidth(6.4),
              alignItems: "center",
            }}
          >
            <Image
              style={styles.descriChair}
              source={require("../../../assets/Armchair.png")}
            />
            <Text style={styles.descriChairText}>Selected</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              //   backgroundColor: "yellow",
              height: sizeWidth(6.4),
              alignItems: "center",
            }}
          >
            <Image
              style={[styles.descriChair, { tintColor: primaryColor }]}
              source={require("../../../assets/Armchair.png")}
            />
            <Text style={styles.descriChairText}>Your Choose</Text>
          </View>
        </View>
        {/* Chi tiet ghe */}
      </View>
      {/* Choose Seat */}
      <Button
        styleViewButton={styles.button}
        textButton={price + " Tickets - $" + price * 13}
        onPress={() => {
          if (price != 0) {
            navigation.navigate("MovieBookingScreen4", {
              date: date,
              time: time,
              seat: seatParam,
              price: price,
            });
          } else {
            Alert.alert("You must choose at least one seat");
          }
        }}
      />
    </View>
  );
};

export default MovieBookingScreen3;

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
  chooseSeat: {
    marginHorizontal: sizeWidth(6.4),
    marginTop: sizeHeight(3),
  },
  seatView: {
    marginHorizontal: sizeWidth(3.73),
    // backgroundColor: "yellow",
    // marginTop: sizeHeight(2.68),
    height: sizeHeight(29.98),
    alignItems: "center",
    justifyContent: "center",
  },
  screen: {
    width: sizeWidth(23.2),
    height: sizeHeight(3.38),
    backgroundColor: "#2A2937",
    borderRadius: sizeWidth(1.6),
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: sizeHeight(2.6),
    marginBottom: sizeHeight(1),
    // backgroundColor: "green",
  },
  screenText: {
    fontSize: sizeFont(1.5625),
    fontWeight: "400",
    color: neutral3Color,
    // textAlign: "center",
  },
  button: {
    position: "absolute",
    bottom: sizeHeight(4.0),
    marginHorizontal: sizeWidth(6.4),
  },
  chair: {
    width: sizeWidth(6.4),
    height: sizeWidth(6.4),
    marginRight: sizeWidth(4.26),
    marginTop: sizeWidth(4.26),
    resizeMode: "contain",
    tintColor: neutral2Color,
    // backgroundColor: "yellow",
  },
  coupleView: {
    justifyContent: "space-evenly",
    // flexDirection: "column",
    // alignItems: "center",
    // backgroundColor: "green",
    // marginLeft: sizeWidth(2),
    // marginRight: sizeWidth(2),
    // position: "absolute",
  },
  coupleChair: {
    width: sizeWidth(7.46),
    height: sizeWidth(7.46),
    marginTop: sizeHeight(1),
    marginRight: sizeWidth(11.13),
    // alignSelf: "flex-end",
    // marginLeft: sizeWidth(1),
    resizeMode: "contain",
    tintColor: "#C02347",
  },
  descriChairText: {
    fontSize: sizeFont(1.5625),
    fontWeight: "400",
    color: "white",
    marginLeft: sizeWidth(2),
  },
  descriChair: {
    width: sizeWidth(4.26),
    height: sizeHeight(4.26),
    tintColor: "white",
    resizeMode: "contain",
  },
});
