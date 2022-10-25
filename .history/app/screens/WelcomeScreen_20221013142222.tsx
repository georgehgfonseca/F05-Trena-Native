import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import AppButton from "../components/AppButton";
import colors from "../config/colors";

export default function WelcomeScreen() {
  return (
    <ImageBackground
      blurRadius={4}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/logo-red.png")}
        ></Image>
        <Text>Sell what you don't need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton
          text="LOGIN"
          color={colors.primary}
          onPress={() => console.log("login tapped")}
        ></AppButton>
        <AppButton
          text="REGISTER"
          color={colors.secondary}
          onPress={() => console.log("register tapped")}
        ></AppButton>
      </View>
      {/* <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View> */}
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
});
