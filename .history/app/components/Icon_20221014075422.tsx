import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

interface MenuItemProps {
  iconName: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  size: number;
  backgroundColor: any;
  color: any;
}

export default function Icon({
  iconName,
  size = 40,
  backgroundColor = "#000",
  color = "#fff",
}: MenuItemProps) {
  return (
    <View
      style={[
        styles.container,
        { width: size, height: size, borderRadius: size / 2 },
      ]}
    >
      <View style={[styles.iconContainer, { backgroundColor: color }]}>
        <MaterialCommunityIcons
          name={iconName}
          size={24}
          color={color}
        ></MaterialCommunityIcons>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
  },
});
