import React from "react";
import { Image, StyleSheet } from "react-native";

import Screen from "../components/Screen";

export default function LoginScreen() {
  return (
    <Screen>
      <Image
        style={styles.logo}
        source={require("../assets/logo-red.png")}
      ></Image>
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
