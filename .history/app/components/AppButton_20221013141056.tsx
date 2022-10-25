import React from "react";
import { StyleSheet, Button, View } from "react-native";

import colors from "../config/colors";

function AppButton(props: any) {
  return (
    <View>
      <Button title={props.text} color={props.color}></Button>
    </View>
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
