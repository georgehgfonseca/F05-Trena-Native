import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../config/colors";
import { materialCommunityIcons } from "@expo/vector-icons";

export default function NewListingButton() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.primary,
    borderColor: colors.white,
    borderRadius: 40,
    borderWidth: 10,
    bottom: 20,
    height: 80,
    justifyContent: "center",
    width: 80,
  },
});
