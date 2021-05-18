import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import HeaderBar from "../../common/HeaderBar";
import { sizeFont, sizeHeight, sizeWidth } from "../../utils/Size";
import { Switch } from "react-native-paper";
import { FlatList } from "react-native-gesture-handler";
import Data from "./Data";
import Card from "./Card";
import Button from "../../common/Button";
const CreditCard = ({ navigation }) => {
  const onPressButton = () => {
    navigation.navigate("AddNewCardScreen");
  };
  const renderItem = ({ item, index }) => {
    return <Card name={item.name} number={item.number} valid={item.valid} />;
  };
  return (
    <View style={styles.container}>
      <HeaderBar
        leftButton={require("../../../assets/Back.png")}
        title={"Credit Card"}
        onPressLeft={() => {
          navigation.goBack();
        }}
      />
      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={(item, index) => {
          return item.id;
        }}
      />
      <Button
        onPress={onPressButton}
        styleViewButton={styles.button}
        textButton={"Add New Card"}
      />
    </View>
  );
};

export default CreditCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    position: "absolute",
    bottom: sizeHeight(7.0),
    marginHorizontal: sizeWidth(6.4),
  },
});
