import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ImageComponent,
} from "react-native";
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
import { TouchableOpacity } from "react-native-gesture-handler";
import AppText from "../components/AppText";
import ListItemSeparator from "../components/ListItemSeparator";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

export default function WelcomeScreen() {
  const navigation = useNavigation();
  const auth = useAuth();

  const getMoviesFromApi = () => {
    return fetch(
      "http://trena.gsi.mpmg.mp.br/f05_backend/publicworks/?X-TRENA-KEY=0a944fb8-2bbc-4f03-a81a-bf84899cd4f2"
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        return json;
      })
      .catch((error) => {
        console.error("Erro: ", error);
      });
  };

  console.log(getMoviesFromApi());

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
          source={require("../assets/trena_dark.png")}
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
            placeholder="Senha"
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
        <View style={styles.registerContainer}>
          <AppText style={styles.newUserText}>Não tem conta?</AppText>
          <TouchableOpacity
            onPress={() => navigation.navigate(routes.REGISTER)}
          >
            <AppText style={styles.registerText}>Cadastre aqui</AppText>
          </TouchableOpacity>
        </View>
        <View style={styles.registerContainer}>
          <ListItemSeparator />
          <AppText style={styles.registerText}>OU</AppText>
          <ListItemSeparator />
        </View>
        <TouchableOpacity onPress={() => alert("Disponível em breve")}>
          <View style={styles.googleButton}>
            <Image
              style={styles.googleIcon}
              source={require("../assets/google.png")}
            ></Image>
            <Text style={styles.googleText}>Entre com Google</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert("Disponível em breve")}>
          <View style={styles.facebookButton}>
            <Image
              style={styles.googleIcon}
              source={require("../assets/facebook.png")}
            ></Image>
            <Text style={styles.facebookText}>Entre com Facebook</Text>
          </View>
        </TouchableOpacity>

        {/* <AppButton
            title="Entre com Google"
            color={colors.light}
            onPress={() => navigation.navigate(routes.REGISTER)}
          ></AppButton> */}
        {/* <View style={styles.googleButton}>

          </View> */}
        {/* <AppButton
          title="Register"
          color="secondary"
          onPress={() => navigation.navigate(routes.REGISTER)}
        ></AppButton> */}
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
  registerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  registerText: {
    paddingLeft: 8,
    paddingRight: 8,
    color: colors.trenaGreen,
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
  googleButton: {
    color: colors.white,
    backgroundColor: colors.light,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
    flexDirection: "row",
  },
  googleText: {
    color: colors.medium,
    // textTransform: "uppercase",
    fontSize: 18,
    paddingLeft: 32,
    fontWeight: "bold",
  },
  facebookButton: {
    color: colors.white,
    backgroundColor: colors.facebookBlue,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
    flexDirection: "row",
  },
  googleIcon: {
    width: 24,
    height: 24,
  },
  facebookText: {
    color: colors.light,
    // textTransform: "uppercase",
    paddingLeft: 32,
    fontSize: 18,
    fontWeight: "bold",
  },
  tagLine: {
    fontSize: 24,
    fontWeight: "600",
    paddingVertical: 20,
  },
  newUserText: {
    color: colors.light,
  },
});
