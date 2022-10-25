import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  SafeAreaView,
} from "react-native";

export default function WelcomeScreen() {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <Image
        style={styles.logo}
        source={require("../assets/logo-red.png")}
      ></Image>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>

    // <SafeAreaView style={styles.container}>
    //   <ImageBackground
    //     style={styles.background}
    //     source={require("./assets/background.jpg")}
    //   ></ImageBackground>
    //   <View style={styles.loginButton}></View>
    //   <View style={styles.registerButton}></View>
    //   <Image
    //     style={styles.logo}
    //     source={require("./assets/logo-red.png")}
    //   ></Image>
    //   <Text style={styles.text}>Sell what you don't need</Text>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  loginButton: {
    backgroundColor: "#fc5c65",
    height: 70,
    width: "100%",
  },
  logo: {
    height: 100,
    width: 100,
    top: 70,
    alignSelf: "center",
    position: "absolute",
  },
  registerButton: {
    backgroundColor: "#4ECDC4",
    height: 70,
    width: "100%",
  },
  text: {
    bottom: 620,
    alignSelf: "center",
    position: "absolute",
  },
});
