import React from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";

import colors from "../config/colors";
import AppText from "./AppText";
import { useNetInfo } from "@react-native-community/netinfo";

export default function OfflineNotice(props: any) {
  const netInfo = useNetInfo();
  console.log(Constants.statusBarHeight);

  if (!(netInfo.type !== "unknown" && netInfo.isInternetReachable === false))
    return (
      <View style={styles.container}>
        <AppText style={styles.text}>No Internet Connection</AppText>
      </View>
    );
  return null;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.primary,
    height: 48,
    justifyContent: "center",
    position: "absolute",
    top: Constants.statusBarHeight,
    marginTop: 50,
    width: "100%",
    zIndex: 2,
  },
  text: {
    color: colors.white,
  },
});
