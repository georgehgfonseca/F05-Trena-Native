import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface MenuItemProps {
  iconName: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  text: string;
}

export default function MenuItem({ iconName, text }: MenuItemProps) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name={text}></MaterialCommunityIcons>
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
