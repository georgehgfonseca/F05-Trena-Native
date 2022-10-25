import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableHighlight,
} from "react-native";
import colors from "../config/colors";

function AppButton(props: any) {
  return <Button title={props.text} color={props.color}></Button>;
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
