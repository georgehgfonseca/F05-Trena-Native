import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import AppButton from "../components/AppButton";
import colors from "../config/colors";
import routes from "../navigation/routes";

export default function WelcomeScreen() {
  const navigation = useNavigation();

  return (
    <ImageBackground
      blurRadius={4}
      style={styles.background}
      source={require("../assets/splash-trena.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/logo-trena.png")}
        ></Image>
        {/* <Text style={styles.tagLine}>Sell what you don't need</Text> */}
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton
          title="Login"
          color="primary"
          onPress={() => navigation.navigate(routes.LOGIN)}
        ></AppButton>
        <AppButton
          title="Register"
          color="secondary"
          onPress={() => navigation.navigate(routes.REGISTER)}
        ></AppButton>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    height: 100,
    width: 100,
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
