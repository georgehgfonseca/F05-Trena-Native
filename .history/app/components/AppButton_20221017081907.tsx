import React from "react";
import { StyleSheet, Button, View, Text, TouchableOpacity } from "react-native";

import colors from "../config/colors";

interface ButtonProps {
  title: string;
  onPress: () => void;
  color?: "primary" | "secondary";
}

function AppButton({ title, onPress, color = "primary" }: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    color: colors.white,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    textTransform: "uppercase",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default AppButton;
