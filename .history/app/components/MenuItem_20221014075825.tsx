import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import AppText from "./AppText";

interface MenuItemProps {
  name: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  color: any;
  text: string;
}

export default function MenuItem({ name, color, text }: MenuItemProps) {
  return (
    <View style={styles.container}>
      <View style={[styles.iconContainer, { backgroundColor: color }]}>
        <MaterialCommunityIcons
          name={name}
          size={24}
          color={colors.white}
        ></MaterialCommunityIcons>
      </View>
      <AppText style={styles.text}>{text}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: colors.white,
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
  text: {
    paddingLeft: 16,
    fontWeight: "600",
  },
});
