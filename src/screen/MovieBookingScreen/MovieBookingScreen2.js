import React from "react";
import {
  FlatList,
  Image,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Button from "../../common/Button";
import HeaderBar from "../../common/HeaderBar";
import { neutral3Color } from "../../strings/colors";
import { sizeFont, sizeHeight, sizeWidth } from "../../utils/Size";
import Rating from "../HistoryScreen/Rating";
import ChooseTimeData from "./ChooseTimeData";
import DateComponent from "./DateComponent";
import LocationComponent from "./LocationComponent";
import LocationData from "./LocationData";
const MovieBookingScreen2 = () => {
  const [choose, setChoose] = React.useState(0);
  const [chooseLocation, setChooseLocation] = React.useState(0);
  return (
    <View style={styles.container}>
      <HeaderBar
        leftButton={require("../../../assets/Back.png")}
        title={"Movie Booking"}
        right2Button={require("../../../assets/Network-connection.png")}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginHorizontal: sizeWidth(6.4) }}
      >
        {/* Image */}
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
            <Text style={styles.time}>Thu, 05.22.2020</Text>
            <Text
              style={[
                styles.time,
                { marginTop: sizeHeight(0.5), marginBottom: sizeHeight(1) },
              ]}
            >
              23:00 - 01:07
            </Text>
            <Rating rate={4.8} rateCount={1293} />
          </View>
        </View>
        {/* Image */}
        {/* Choose time */}
        <View style={styles.chooseTimeContainer}>
          <Text style={styles.name}>Choose Time</Text>
          <View style={styles.dateContainer}>
            {ChooseTimeData.map((item, index) => {
              return (
                <DateComponent
                  date={item.date}
                  day={item.day}
                  key={item.id}
                  choosed={choose === index}
                  onPress={() => {
                    setChoose(index);
                  }}
                />
              );
            })}
          </View>
        </View>
        {/* Choose time */}
        {/* Choose location */}
        <View style={styles.chooseLocationContainer}>
          <Text style={styles.name}>Choose Location</Text>
          <View style={{ marginTop: -sizeHeight(1) }}>
            <FlatList
              data={LocationData}
              renderItem={({ item, index }) => {
                return (
                  <LocationComponent
                    name={item.name}
                    address={item.address}
                    keyExtractor={(item) => {
                      return item.id;
                    }}
                    index={index}
                    location={chooseLocation === index}
                    onPress={() => {
                      setChooseLocation(index);
                    }}
                  />
                );
              }}
            />
          </View>
        </View>
        <View style={styles.buttonView}></View>
        {/* Choose location */}
      </ScrollView>
      <Button styleViewButton={styles.button} textButton={"Book Now"} />
    </View>
  );
};

export default MovieBookingScreen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginHorizontal: sizeWidth(6.4),
  },
  imageContainer: {
    width: sizeWidth(76.8),
    height: sizeHeight(24.21),
    // backgroundColor: "yellow",
    marginTop: sizeHeight(2),
    flexDirection: "row",
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
  chooseTimeContainer: {
    marginTop: sizeHeight(3),
  },
  chooseLocationContainer: {
    marginTop: sizeHeight(4),
  },
  dateContainer: {
    height: sizeHeight(8.46),
    marginTop: sizeHeight(2),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderRadius: sizeWidth(3.2),
    backgroundColor: "#2A2937",
  },
  name: {
    fontSize: sizeFont(2.08),
    fontWeight: "700",
    color: "white",
  },
  address: {
    fontSize: sizeFont(1.82),
    fontWeight: "400",
    color: neutral3Color,
    marginTop: sizeHeight(1),
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
