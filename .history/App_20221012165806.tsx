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
} from "react-native";

export default function App() {
  const handlePressText = () => console.log("Text pressed");
  console.log("App executed");
  let x = 1;

  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <Button
        color={"orange"}
        title="Click me"
        onPress={() =>
          // Alert.prompt("My title", "My message", (text) => console.log(text))
          Alert.alert("My title", "My message", [
            { text: "Cancel", onPress: () => console.log("Cancel") },
            { text: "Ok", onPress: () => console.log("Ok") },
          ])
        }
      ></Button>
      <Text onPress={handlePressText}>Hello React Native</Text>
      <TouchableHighlight onPress={() => console.log("Image pressed")}>
        <Image
          source={{
            height: 300,
            width: 200,
            uri: "https://picsum.photos/200/300",
          }}
        ></Image>
      </TouchableHighlight>
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: "orange" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  image: {
    height: 40,
    width: 40,
  },
});
