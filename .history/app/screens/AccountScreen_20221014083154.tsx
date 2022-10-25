import React from "react";
import { StyleSheet, View } from "react-native";

import ListItem from "../components/ListItem";
import {IconProps} from "../components/Icon";
import Screen from "../components/Screen";
import colors from "../config/colors";

interface MenuItem {
  title: string;
  icon: IconProps;
}
const menuItems = [
  {
    title: "My Listings",
    icon: { name: "format-list-bulleted", backgroundColor: colors.primary },
  },
  {
    title: "My Messages",
    icon: { name: "email", backgroundColor: colors.secondary },
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
      <View style={styles.container}>
        <FlatList data={menuItems} keyExtractor={(menuItem) => menuItem.}>
        </FlatList>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
});
