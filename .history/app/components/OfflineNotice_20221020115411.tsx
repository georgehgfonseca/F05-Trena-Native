import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "./AppText";

function OfflineNotice() {
  return (
    <View>
      <AppText>No Internet Connection</AppText>
    </View>
  );
}

export default OfflineNotice;

const styles = StyleSheet.create({});
