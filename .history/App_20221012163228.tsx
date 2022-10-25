import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableHighlight,
  Button,
} from "react-native";

export default function App() {
  const handlePressText = () => console.log("Text pressed");
  console.log("App executed");
  let x = 1;
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Click me"
        onPress={() => console.log("Button tapped")}
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

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 40,
    width: 40,
  },
});
