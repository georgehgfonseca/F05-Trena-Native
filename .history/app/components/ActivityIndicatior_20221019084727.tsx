import React from "react";
import { StyleSheet, View } from "react-native";

export default function ActivityIndicatior({ visible = false }) {
  if (!visible) return null;
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {},
});
