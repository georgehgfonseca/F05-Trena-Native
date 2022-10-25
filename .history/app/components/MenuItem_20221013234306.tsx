import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

interface MenuItemProps {
  iconName: string;
  color: string;
  text: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
}

export default function MenuItem({ iconName, color, text }: MenuItemProps) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons
          name={text}
          size={32}
          color={colors.white}
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
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});
