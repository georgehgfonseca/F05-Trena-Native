import React from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";

import colors from "../config/colors";

export default function OfflineNotice(props: any) {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 50,
    top: Constants.statusBarHeight,
    width: "100%",
    zIndex: 1,
  },
});
