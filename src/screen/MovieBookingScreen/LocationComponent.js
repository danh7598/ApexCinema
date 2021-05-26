import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { neutral3Color, primaryColor } from "../../strings/colors";
import { sizeFont, sizeHeight, sizeWidth } from "../../utils/Size";
import LocationData from "./LocationData";
const LocationComponent = ({
  location,
  name,
  address,
  onPress,
  time,
  index,
}) => {
  const [chooseTime, setChooseTime] = React.useState(0);
  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        style={[
          styles.timeContainer,
          { borderColor: chooseTime === index ? primaryColor : "#817F95" },
        ]}
        onPress={() => {
          setChooseTime(index);
        }}
      >
        <Text style={styles.time}>{item.time}</Text>
      </TouchableOpacity>
    );
  };
  //   console.log(LocationData[0].item);
  return (
    <TouchableOpacity
      style={[
        styles.container,
        { borderColor: location ? primaryColor : "#817F95" },
      ]}
      onPress={() => {
        onPress();
      }}
      location={location}
    >
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.address}>{address}</Text>
      {location && <FlatList
        data={LocationData[index].item}
        renderItem={renderItem}
        keyExtractor={(item) => {
          return item.id;
        }}
        index={index}
        horizontal={true}
        time={time}
        showsHorizontalScrollIndicator={false}
      />}
    </TouchableOpacity>
  );
};

export default LocationComponent;

const styles = StyleSheet.create({
  container: {
    // height: sizeHeight(15.49),
    borderRadius: sizeWidth(3.2),
    marginTop: sizeHeight(3),
    borderWidth: sizeWidth(0.53),
    borderColor: primaryColor,
    paddingHorizontal: sizeWidth(4.26),
    paddingVertical: sizeHeight(2),
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
  time: {
    fontSize: sizeFont(1.5625),
    fontWeight: "400",
    color: "#817F95",
  },
  timeContainer: {
    marginTop: sizeHeight(2),
    width: sizeWidth(18.13),
    height: sizeHeight(3.38),
    borderRadius: sizeWidth(1.6),
    borderWidth: sizeWidth(0.26),
    borderColor: "#817F95",
    marginRight: sizeWidth(3.2),
    alignItems: "center",
    justifyContent: "center",
  },
});
