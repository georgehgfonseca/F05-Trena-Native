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
      <View style={styles.loginButton}></View>
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
  },
  loginButton: {
    backgroundColor: "#fc5c65",
    height: 70,
    width: "100%",
    justifyContent: "flex-end",
  },
  registerButton: {
    backgroundColor: "#4ECDC4",
    height: 48,
    width: "100%",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    height: 80,
    width: 80,
    bottom: 640,
    alignSelf: "center",
    position: "absolute",
  },
  text: {
    bottom: 620,
    alignSelf: "center",
    position: "absolute",
  },
});
