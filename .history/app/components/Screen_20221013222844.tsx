import React from "react";
import Constants from "expo-constants";

import { SafeAreaView, StyleSheet } from "react-native";

interface ScreenProps {
  children: JSX.Element;
}

function Screen({ children }: ScreenProps) {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "yellow",
  },
});

export default Screen;
