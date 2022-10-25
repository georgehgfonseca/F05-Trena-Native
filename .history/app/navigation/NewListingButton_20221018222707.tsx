import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../config/colors";

export default function NewListingButton() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderColor: colors.white,
    borderWidth: 10,
    height: 80,
    width: 80,
    borderRadius: 40,
    bottom: 20,
  },
});
