import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import {
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import HeaderBar from "../../common/HeaderBar";
import { neutral2Color, primaryColor } from "../../strings/colors";
import { sizeFont, sizeHeight, sizeWidth } from "../../utils/Size";
import RecentMovie from "./RecentMovie";
import Data from "./Data";
const SearchScreen = ({ navigation }) => {
  const [focusSearch, setFocusSearch] = React.useState(false);
  const searchButton = () => {
    setFocusSearch(true);
  };
  const renderItem = ({ item, index }) => {
    return (
      <RecentMovie
        name={item.name}
        image={item.image}
        rate={item.rate}
        rateCount={item.rateCount}
      />
    );
  };
  return (
    <View style={styles.container}>
      <HeaderBar
        leftButton={require("../../../assets/Back.png")}
        title={"Search"}
        onPressLeft={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.searchBar}>
        <TextInput
          style={styles.textInput}
          placeholder={"Search"}
          placeholderTextColor={neutral2Color}
          returnKeyType={"search"}
        />
        <TouchableOpacity
          onPress={() => {
            searchButton();
          }}
        >
          <Image
            style={styles.icon}
            source={require("../../../assets/Zoom.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.recent}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.recentText}>Recent</Text>
          <TouchableOpacity>
            <Text style={styles.clearText}>Clear All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          renderItem={renderItem}
          data={Data}
          keyExtractor={(item) => {
            return item.id;
          }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBar: {
    marginTop: sizeHeight(2),
    flexDirection: "row",
    marginHorizontal: sizeWidth(6.4),
    height: sizeHeight(6.25),
    borderWidth: 1,
    borderColor: "#565366",
    borderRadius: sizeWidth(4.26),
    alignItems: "center",
    paddingHorizontal: sizeWidth(4.2),
    justifyContent: "space-between",
  },
  textInput: {
    height: sizeHeight(6.25),
    color: "white",
    width: sizeWidth(70),
  },
  icon: {
    width: sizeWidth(5.33),
    height: sizeWidth(5.33),
    resizeMode: "contain",
    tintColor: "white",
  },
  recent: {
    marginTop: sizeHeight(3),
    marginHorizontal: sizeWidth(6.4),
    // backgroundColor: "yellow",
  },
  recentText: {
    fontSize: sizeFont(2.6),
    fontWeight: "700",
    color: "white",
  },
  clearText: {
    fontSize: sizeFont(1.82),
    fontWeight: "400",
    color: primaryColor,
  },
});
