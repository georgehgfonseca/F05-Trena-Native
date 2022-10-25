import React from "react";
import { ImageSourcePropType, StyleSheet, View } from "react-native";

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";

const menuItems = [];
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
      <View style={styles.container}>{/* <FlatList></FlatList> */}</View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
});
