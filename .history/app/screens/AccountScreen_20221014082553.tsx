import React from "react";
import { ImageSourcePropType, StyleSheet, View } from "react-native";

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import colors from "../config/colors";

const menuItems = [
  {
    title: "My Listings",
    icon: { name: "format-list-bulleted", backgroundColor: colors.primary },
  },
];
export default function AccountScreen() {
  return (
    <Screen>
      <View style={styles.container}>
        <ListItem
          title="George Fonseca"
          subTitle="george.fons@gmail.com"
          image={require("../assets/george.jpeg")}
        ></ListItem>
      </View>
      {/* <View style={styles.container}>{<FlatList></FlatList>}</View> */}
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
});
