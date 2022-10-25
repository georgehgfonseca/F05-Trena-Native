import React from "react";
import { StyleSheet, Button, View } from "react-native";

import colors from "../config/colors";

function AppButton(props: any) {
  return (
    <View style={styles.button}>
      <Button title={props.text} color={props.color}></Button>
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
