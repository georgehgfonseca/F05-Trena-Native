import React from "react";
import { StyleSheet, Button, View, Text } from "react-native";

import colors from "../config/colors";

function AppButton({ title: string }) {
  return (
    <View style={styles.button}>
      <Text title={title} color={props.color}></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    color: colors.white,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    borderRadius: 25,
  },
});

export default AppButton;
