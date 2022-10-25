import React from "react";
import { Image, StyleSheet } from "react-native";
import AppTextInput from "../components/AppTextInput";

import Screen from "../components/Screen";

export default function LoginScreen() {
  return (
    <Screen>
      <Image
        style={styles.logo}
        source={require("../assets/logo-red.png")}
      ></Image>
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="email"
        keyboardType="email-address"
        placeholder="Email"
        textContetType="emailAddress" //Autofill from keychain (iOS only)
      ></AppTextInput>
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="lock"
        placeholder="Passeword"
        textContetType="password" //Autofill from keychain (iOS only)
      ></AppTextInput>
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
