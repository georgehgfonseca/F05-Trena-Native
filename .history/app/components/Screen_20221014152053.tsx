import React from "react";
import Constants from "expo-constants";

import { SafeAreaView, StyleSheet, ViewProps } from "react-native";

interface ScreenProps {
  children?: JSX.Element | JSX.Element[];
  style?: any;
}

function Screen({ children, style }: ScreenProps) {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});

export default Screen;
