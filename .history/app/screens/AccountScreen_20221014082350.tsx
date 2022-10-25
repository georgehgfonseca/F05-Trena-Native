import React from "react";
import { ImageSourcePropType, StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import MenuItem from "../components/MyMenuItem";
import Screen from "../components/Screen";
import colors from "../config/colors";

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
