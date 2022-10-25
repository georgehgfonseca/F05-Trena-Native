import React from "react";
import { Platform, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";

import colors from "../config/colors";
import defaultStyles from "../config/styles";

export default function AppTextInput({ icon, ...otherProps }: any) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.medium}
          style={styles.icon}
        ></MaterialCommunityIcons>
      )}
      <TextInput style={defaultStyles.text} {...otherProps}></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 24,
    flexDirection: "row",
    width: "100%",
    padding: 12,
    marginVertical: 12,
    alignItems: "center",
  },
  icon: {
    marginRight: 8,
  },
});
