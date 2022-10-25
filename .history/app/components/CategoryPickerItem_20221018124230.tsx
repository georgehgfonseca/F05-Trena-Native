import React from "react";
import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import colors from "../config/colors";
import AppText from "./AppText";
import Icon from "./Icon";

export default function CategoryPickerItem({ item, onPress }: any) {
  console.log(item, onPress);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => console.log(item)}>
        <Icon
          backgroundColor={item.backgroundColor}
          name={item.icon}
          size={80}
        ></Icon>
        <AppText style={styles.label}>{item.label}</AppText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    alignItems: "center",
    width: "33%",
  },
  label: {
    marginTop: 4,
    color: colors.medium,
    textAlign: "center",
  },
});
