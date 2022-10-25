import React from "react";
import LottieView from "lottie-react-native";
import { StyleSheet, View } from "react-native";
import styles from "../config/styles";

export default function ActivityIndicatior({ visible = false }) {
  if (!visible) return null;
  return (
    <View style={styles.overlay}>
      <LottieView
        autoPlay
        loop
        source={require("../assets/animations/loader.json")}
      ></LottieView>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    height: "100%",
    width: "100%",
    backgroundColor: "black",
  },
});
