import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import { Formik } from "formik";
import Screen from "../components/Screen";

export default function LoginScreen() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/logo-red.png")}
      ></Image>

      <Formik>
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
      </Formik>
      <AppTextInput
        autoCapitalize="none"
        autoCorrect
        icon="email"
        keyboardType="email-address"
        placeholder="Email"
        onChangeText={(text: string) => setEmail(text)}
        textContetType="emailAddress" //Autofill from keychain (iOS only)
      ></AppTextInput>
      <AppTextInput
        autoCapitalize="none"
        autoCorrect
        icon="lock"
        onChangeText={(text: string) => setPassword(text)}
        placeholder="Passeword"
        secureTextEntry
        textContetType="password" //Autofill from keychain (iOS only)
      ></AppTextInput>
      <AppButton
        title="Login"
        onPress={() => console.log(email, password)}
      ></AppButton>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 48,
    marginBottom: 20,
  },
});
