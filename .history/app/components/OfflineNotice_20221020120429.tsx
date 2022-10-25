import React from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";

import colors from "../config/colors";
import AppText from "./AppText";

export default function OfflineNotice(props: any) {
  return (
    <View style={styles.container}>
      <AppText style={styles.text}>No Internet Connection</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.primary,
    height: 50,
    // position: "absolute",
    justifyContent: "center",
    // top: Constants.statusBarHeight,
    width: "100%",
    zIndex: 1,
  },
  text: {
    color: colors.white,
  },
});
