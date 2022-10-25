import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

function AppText({ chidren: any }) {
  return <Text style={styles.text}>{chidren}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

export default AppText;
