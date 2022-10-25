import React from "react";
import { View, StyleSheet, Button, TouchableHighlight } from "react-native";
import colors from "../config/colors";

function AppButton(props: any) {
  return (
    <TouchableHighlight style={styles.button}>{props.text}</TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    color: colors.white,
    height: 70,
    width: "100%",
    borderRadius: 35,
  },
});

export default AppButton;
