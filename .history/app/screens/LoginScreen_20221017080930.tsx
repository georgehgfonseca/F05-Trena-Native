import React from "react";
import { ImageComponent, StyleSheet } from "react-native";
import Screen from "../components/Screen";

export default function LoginScreen() {
  return (
    <Screen>
      <ImageComponent
        style={styles.logo}
        source={require("../assets/logo-red.png")}
      ></ImageComponent>
    </Screen>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 48,
    marginBottom: 20,
  },
});
