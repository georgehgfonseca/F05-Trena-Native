import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcon } from "@expo/vector-icons";

interface MenuItemProps {
  iconName: string;
  text: string;
}

export default function MenuItem({ iconName, text }: MenuItemProps) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcon name={text}></MaterialCommunityIcon>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
});
