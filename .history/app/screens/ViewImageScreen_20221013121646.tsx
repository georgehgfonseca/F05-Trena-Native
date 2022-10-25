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

export default function ViewImageScreen() {
  return (
    <Image source={require("../assets/chair.jpg")}></Image>

    // <SafeAreaView style={styles.statusBarContainer}>
    //   <View style={styles.topContainer}>
    //     <TouchableHighlight>
    //       <View style={styles.closeButton}></View>
    //     </TouchableHighlight>
    //     <TouchableHighlight>
    //       <View style={styles.deleteButton}></View>
    //     </TouchableHighlight>
    //   </View>
    //   <View style={styles.imageContainer}>
    //     <Image
    //       style={styles.image}
    //       source={require("./assets/chair.jpg")}
    //     ></Image>
    //   </View>
    // </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: "orange" };

const styles = StyleSheet.create({
  statusBarContainer: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  imageContainer: {
    backgroundColor: "blue",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    alignSelf: "stretch",
    width: "100%",
  },
  topContainer: {
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 16,
    paddingRight: 16,
    height: 48,
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
    height: 524,
    width: "100%",
    resizeMode: "contain",
  },
});
