import {
  StyleSheet,
  Text,
  View,
  Image,
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
  const handlePressText = () => console.log("Text pressed");

  const { landscape } = useDeviceOrientation();

  console.log(useDimensions());

  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "row", //horizonal
        justifyContent: "center", //main axis
        alignItems: "center", //secondary axis
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 300,
          alignSelf: "flex-start", //applies to indiv. item
        }}
      ></View>
      <View style={{ backgroundColor: "gold", width: 100, height: 200 }}></View>
      <View
        style={{ backgroundColor: "tomato", width: 100, height: 100 }}
      ></View>
    </View>

    // <SafeAreaView style={[styles.container, containerStyle]}>
    //   <View
    //     style={{
    //       backgroundColor: "dodgerblue",
    //       width: "100%",
    //       height: landscape ? "100%" : "30%",
    //     }}
    //   ></View>
    //   {/* <Button
    //     color={"orange"}
    //     title="Click me"
    //     onPress={() =>
    //       // Alert.prompt("My title", "My message", (text) => console.log(text))
    //       Alert.alert("My title", "My message", [
    //         { text: "Cancel", onPress: () => console.log("Cancel") },
    //         { text: "Ok", onPress: () => console.log("Ok") },
    //       ])
    //     }
    //   ></Button>
    //   <Text onPress={handlePressText}>Hello React Native</Text>
    //   <TouchableHighlight onPress={() => console.log("Image pressed")}>
    //     <Image
    //       source={{
    //         height: 300,
    //         width: 200,
    //         uri: "https://picsum.photos/200/300",
    //       }}
    //     ></Image>
    //   </TouchableHighlight> */}
    // </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: "orange" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  image: {
    height: 40,
    width: 40,
  },
});
