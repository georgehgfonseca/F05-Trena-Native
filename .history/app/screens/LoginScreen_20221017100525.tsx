import React from "react";
import { Image, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import ErrorMessage from "../components/ErrorMessage";
import Screen from "../components/Screen";
import AppFormField from "../components/AppFormField";

//Determines the rules for validating the form with yup
const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

export default function LoginScreen() {
  //   const [email, setEmail] = useState<string>("");
  //   const [password, setPassword] = useState<string>("");

  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/logo-red.png")}
      ></Image>

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values: any) => console.log(values)}
        validationSchema={validationSchema}
      >
        {(args) => (
          <>
            <AppFormField
              autoCapitalize="none"
              autoCorrect
              icon="email"
              keyboardType="email-address"
              name="email"
              placeholder="Email"
              textContetType="emailAddress" //Autofill from keychain (iOS only)
            ></AppFormField>
            {/* <AppTextInput
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
            ></ErrorMessage> */}
            <AppTextInput
              autoCapitalize="none"
              autoCorrect
              icon="lock"
              name="password"
              placeholder="Passeword"
              secureTextEntry
              textContetType="password"
            ></AppTextInput>
            <AppButton
              title="Login"
              onPress={args.handleSubmit}
              //   onPress={() => console.log(email, password)}
            ></AppButton>
          </>
        )}
      </Formik>
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
