import {
  StyleSheet,
  Text,
  View,
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
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require("./assets/background.jpg")}
      ></ImageBackground>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </View>
  );
}

const containerStyle = { backgroundColor: "orange" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    height: "100%",
    width: "100%",
    flexGrow: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
  logo: {
    height: 40,
    width: 40,
  },
  loginButton: {
    backgroundColor: "#4ECDC4",
    height: 40,
    width: "100%",
  },
  registerButton: {
    backgroundColor: "#fc5c65",
    height: 40,
    width: "100%",
  },
});
