import React from "react";
import { StyleSheet, View } from "react-native";

interface MenuItemProps {
  iconName: string;
  text: string;
}

export default function MenuItem({ iconName, text }: MenuItemProps) {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
});
