import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import HeaderBar from "../../common/HeaderBar";
import { sizeFont, sizeHeight, sizeWidth } from "../../utils/Size";
import { Switch } from "react-native-paper";
import { TextInput } from "react-native-gesture-handler";
import Card from "./Card";
import Button from "../../common/Button";
const AddNewCardScreen = ({ navigation }) => {
  const onPressButton = () => {
    navigation.navigate("Payment");
  };
  const [Name, setName] = React.useState("");
  const [Number, setNumber] = React.useState("");
  const [Exp, setExp] = React.useState("");
  const enterName = (text) => {
    setName(text);
  };
  const enterNumber = (text) => {
    if (text.length == 4 || text.length == 9 || text.length == 14) {
      text += " ";
    }
    setNumber(text);
  };
  const enterExp = (text) => {
    if (text.length == 2) {
      text += "/";
    }
    setExp(text);
  };
  return (
    <View style={styles.container}>
      <HeaderBar
        title={"Add New Card"}
        leftButton={require("../../../assets/Back.png")}
        onPressLeft={() => {
          navigation.goBack();
        }}
      />
      <Card name={Name} number={Number} valid={Exp} />
      <TextInput
        style={styles.textInput}
        placeholder={"Enter your name"}
        placeholderTextColor={"#555366"}
        onChangeText={enterName}
        autoCapitalize={"characters"}
        value={Name}
      />
      <TextInput
        style={styles.textInput}
        placeholder={"Enter card number"}
        placeholderTextColor={"#555366"}
        onChangeText={enterNumber}
        value={Number}
        maxLength={19}
        keyboardType={"numeric"}
      />
      <TextInput
        style={styles.textInput}
        placeholder={"Enter CVC"}
        placeholderTextColor={"#555366"}
        onChangeText={enterExp}
        value={Exp}
        maxLength={5}
        keyboardType={"numeric"}
      />

      <Button
        onPress={onPressButton}
        styleViewButton={styles.button}
        textButton={"Done"}
      />
    </View>
  );
};

export default AddNewCardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    marginTop: sizeHeight(2.6),
    marginHorizontal: sizeWidth(6.4),
    backgroundColor: "#2A2937",
    borderRadius: sizeWidth(4.26),
    height: sizeHeight(6.25),
    paddingLeft: sizeWidth(5.33),
    color: "white",
  },
  button: {
    position: "absolute",
    bottom: sizeHeight(7.0),
    marginHorizontal: sizeWidth(6.4),
  },
});
