import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableHighlight,
  Button,
  Alert,
} from "react-native";

export default function App() {
  const handlePressText = () => console.log("Text pressed");
  console.log("App executed");
  let x = 1;
  return (
    <SafeAreaView style={styles.container}>
      <Button
        color={"orange"}
        title="Click me"
        onPress={() =>
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
