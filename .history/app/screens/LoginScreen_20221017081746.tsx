import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";

import Screen from "../components/Screen";

export default function LoginScreen() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <Screen>
      <Image
        style={styles.logo}
        source={require("../assets/logo-red.png")}
      ></Image>
      <AppTextInput
        autoCapitalize="none"
        autoCorrect
        icon="email"
        keyboardType="email-address"
        placeholder="Email"
        textContetType="emailAddress" //Autofill from keychain (iOS only)
      ></AppTextInput>
      <AppTextInput
        autoCapitalize="none"
        autoCorrect
        icon="lock"
        placeholder="Passeword"
        secureTextEntry
        textContetType="password" //Autofill from keychain (iOS only)
      ></AppTextInput>
      <AppButton title="Login" onPress={() => console.log()}></AppButton>
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
