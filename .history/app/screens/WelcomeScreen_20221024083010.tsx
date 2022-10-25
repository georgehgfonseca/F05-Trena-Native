import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import useAuth from "../auth/useAuth";
import AppButton from "../components/AppButton";
import {
  AppForm,
  AppFormField,
  ErrorMessage,
  SubmitButton,
} from "../components/forms";
import colors from "../config/colors";
import routes from "../navigation/routes";
import * as Yup from "yup";
import authApi from "../api/auth";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

export default function WelcomeScreen() {
  const navigation = useNavigation();
  const auth = useAuth();

  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async ({ email, password }: any) => {
    const result = await authApi.login(email, password);
    console.log({ username: email, password: password });
    console.log(result);
    if (!result.ok) return setLoginFailed(true);
    setLoginFailed(false);
    console.log(result.data.access_token);
    auth.logIn(result.data.access_token);
  };

  return (
    <View style={styles.background}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/logo-trena.png")}
        ></Image>
        {/* <Text style={styles.tagLine}>Sell what you don't need</Text> */}
      </View>
      <View style={styles.buttonsContainer}>
        <AppForm
          initialValues={{ email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage
            error="Invalid email and/or password."
            visible={loginFailed}
          ></ErrorMessage>
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
          <SubmitButton color={colors.trenaGreen} title="Entrar"></SubmitButton>
        </AppForm>

        {/* <AppButton
          title="Login"
          color="primary"
          onPress={() => navigation.navigate(routes.LOGIN)}
        ></AppButton> */}
        <AppButton
          title="Register"
          color="secondary"
          onPress={() => navigation.navigate(routes.REGISTER)}
        ></AppButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.black,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    height: 160,
    width: 160,
  },
  loginButton: {
    backgroundColor: "#73FF00",
  },
  logoContainer: {
    top: 70,
    position: "absolute",
    alignItems: "center",
  },
  tagLine: {
    fontSize: 24,
    fontWeight: "600",
    paddingVertical: 20,
  },
});
