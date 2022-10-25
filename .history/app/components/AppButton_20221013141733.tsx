import React from "react";
import { StyleSheet, Button, View, Text, TouchableOpacity } from "react-native";

import colors from "../config/colors";

function AppButton(props: any) {
  return (
    <TouchableOpacity>
      <View style={styles.button}>
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    color: colors.white,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
  },
  text: {
    color: colors.white,
    textTransform: "uppercase",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default AppButton;
