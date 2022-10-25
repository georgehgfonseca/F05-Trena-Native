import React from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";

import authApi from "../api/auth";
import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";

//Determines the rules for validating the form with yup
const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

export default function LoginScreen() {
  //   const [email, setEmail] = useState<string>("");
  //   const [password, setPassword] = useState<string>("");

  const handleSubmit = ({ email, password }) => {
    authApi.login();
  };
  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/logo-red.png")}
      ></Image>

      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContetType="emailAddress" //Autofill from keychain (iOS only)
        ></AppFormField>
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContetType="password"
        ></AppFormField>
        <SubmitButton title="Login"></SubmitButton>
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 48,
    marginBottom: 20,
  },
});

{
  /* <AppTextInput
              autoCapitalize="none"
              autoCorrect
              icon="email"
              keyboardType="email-address"
              onBlur={() => args.setFieldTouched("email")}
              onChangeText={args.handleChange("email")}
              //   onChangeText={(text: string) => setEmail(text)}
              placeholder="Email"
              textContetType="emailAddress" //Autofill from keychain (iOS only)
            ></AppTextInput>
            <ErrorMessage
              error={args.errors.email}
              visible={args.touched.email}
            ></ErrorMessage> */
}
