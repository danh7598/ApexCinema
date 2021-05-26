import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
} from "react-native";
import Button from "../../common/Button";
import { LinearGradient } from "expo-linear-gradient";
import HeaderBar from "../../common/HeaderBar";
import { neutral3Color } from "../../strings/colors";
import { sizeFont, sizeHeight, sizeWidth } from "../../utils/Size";
import Rating from "../HistoryScreen/Rating";
import Cast from "./Cast";
import CastData from "./CastData";
const MovieBookingScreen = () => {
  const renderItem = ({ item, index }) => {
    return <Cast name={item.name} image={item.image} />;
  };
  return (
    <View style={styles.container}>
      <HeaderBar
        leftButton={require("../../../assets/Back.png")}
        title={"Movie Booking"}
        right2Button={require("../../../assets/Network-connection.png")}
      />

      <ScrollView
        style={{ marginHorizontal: sizeWidth(6.4) }}
        showsVerticalScrollIndicator={false}
      >
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

        <View style={styles.infoContainer}>
          <Text style={styles.name}>Storyline</Text>
          <Text style={styles.description}>
            Despite his family's baffling generations-old ban on music, Miguel
            dreams of becoming an accomplished musician like his idol, Ernesto
            de la Cruz…
          </Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>Directors</Text>
          <Text style={styles.description}>
            Lee Unkrich, Adrian Molina (co-director)
          </Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>Genres</Text>
          <Text style={styles.description}>
            Animation | Adventure | Family | Fantasy | Music | Mystery
          </Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>Trailer</Text>
          <Image style={styles.video} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>Cast</Text>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={CastData}
            renderItem={renderItem}
            keyExtractor={(item) => {
              return item.id;
            }}
          />
        </View>
        <View style={styles.buttonView}></View>
      </ScrollView>
      <Button styleViewButton={styles.button} textButton={"Book Now"} />
    </View>
  );
};

export default MovieBookingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginHorizontal: sizeWidth(6.4),
    // backgroundColor: "white",
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
  description: {
    fontSize: sizeFont(2.08),
    fontWeight: "400",
    color: neutral3Color,
    marginTop: sizeHeight(2),
    lineHeight: sizeFont(3.125),
  },
  infoContainer: {
    marginTop: sizeHeight(3),
  },
  video: {
    height: sizeHeight(22.65),
    backgroundColor: "skyblue",
    borderRadius: sizeWidth(3.2),
    marginTop: sizeHeight(2),
  },
  button: {
    position: "absolute",
    bottom: sizeHeight(7.0),
    marginHorizontal: sizeWidth(6.4),
  },
  buttonView: {
    height: sizeHeight(13.25),
    // backgroundColor: "rgba(32,31,40,0.1)",
    // bottom: 0,
    // position: "absolute",
  },
});
