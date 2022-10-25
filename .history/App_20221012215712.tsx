import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  SafeAreaView,
  TouchableHighlight,
  Button,
  Alert,
  Platform,
  StatusBar,
  Dimensions,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

export default function App() {
  return (
    <SafeAreaView style={styles.statusBarContainer}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <TouchableHighlight>
            <View style={styles.closeButton}></View>
          </TouchableHighlight>
          <TouchableHighlight>
            <View style={styles.deleteButton}></View>
          </TouchableHighlight>
        </View>
        <Image
          style={styles.image}
          source={require("./assets/chair.jpg")}
        ></Image>
      </View>
      {/* <ImageBackground
        style={styles.background}
        source={require("./assets/background.jpg")}
      ></ImageBackground>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
      <Image
        style={styles.logo}
        source={require("./assets/logo-red.png")}
      ></Image>
      <Text style={styles.text}>Sell what you don't need</Text> */}
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: "orange" };

const styles = StyleSheet.create({
  statusBarContainer: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  container: {
    flexDirection: "column",
    backgroundColor: "black",
    height: "100%",
    width: "100%",
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 16,
    paddingRight: 16,
    alignItems: "center",
  },
  closeButton: {
    height: 48,
    width: 48,
    backgroundColor: "#fc5c65",
  },
  deleteButton: {
    height: 48,
    width: 48,
    backgroundColor: "#4ecdc4",
  },
  image: {
    height: "50%",

    width: "100%",
    bottom: 640,
    alignSelf: "center",
    position: "absolute",
  },
});
