import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";

export default function App() {
  const handlePressText = () => console.log("Text pressed");
  console.log("App executed");
  let x = 1;
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePressText}>
        Hello React Native
      </Text>
      <Image style={styles.image} source={require("./assets/icon.png")}></Image>

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
    backgroundColor: "#fff",
  },
});
