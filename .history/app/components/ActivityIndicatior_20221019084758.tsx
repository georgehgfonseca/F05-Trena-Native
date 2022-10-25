import React from "react";
import { StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native"

export default function ActivityIndicatior({ visible = false }) {
  if (!visible) return null;
  return <LottieView style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {},
});
