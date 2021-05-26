import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import HeaderBar from "../../common/HeaderBar";
import Menu from "../../../assets/Menu.png";
import zoom from "../../../assets/Zoom.png";
import bell from "../../../assets/Bell.png";
import NowShowingScreen from "../../screen/HomeScreen/NowShowingScreen";
import BoxOfficeScreen from "../../screen/HomeScreen/BoxOfficeScreen";
import UpcomingScreen from "../../screen/HomeScreen/UpcomingScreen";
import HomeTabbar from "./HomeTabbar";

const Tab = createMaterialTopTabNavigator();

const HomeTopTab = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <HeaderBar
        leftButton={Menu}
        right1Button={zoom}
        right2Button={bell}
        onPressLeft={() => {
          navigation.openDrawer();
        }}
      />
      <Tab.Navigator
        tabBar={(props) => <HomeTabbar {...props} />}
        swipeEnabled={false}
      >
        <Tab.Screen
          name="NowShowingScreen"
          component={NowShowingScreen}
          options={{
            tabBarLabel: "Now Showing",
          }}
        />
        <Tab.Screen
          name="BoxOfficeScreen"
          component={BoxOfficeScreen}
          options={{
            tabBarLabel: "Box Office",
          }}
        />
        <Tab.Screen
          name="UpcomingScreen"
          component={UpcomingScreen}
          options={{
            tabBarLabel: "Upcoming",
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default HomeTopTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
