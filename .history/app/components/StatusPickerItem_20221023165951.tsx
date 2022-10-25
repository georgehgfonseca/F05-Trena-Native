import React from "react";
import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";
import Icon from "./Icon";

export default function StatusPickerItem({ item, onPress }: any) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        {/* <Icon
          backgroundColor={item.backgroundColor}
          name={item.icon}
          size={80}
        ></Icon> */}
        <AppText style={styles.label}>{item.name}</AppText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    alignItems: "flex-start",
    width: "100%",
  },
  label: {
    marginTop: 4,
    color: colors.medium,
    textAlign: "center",
    backgroundColor: colors.primary,
    width: "100%",
  },
});
