import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "./AppText";
import Icon from "./Icon";

// Picker item
function CategoryPickerItem({ item, onPress }: any) {
  return (
    <View style={styles.container}>
      <Icon
        backgroundColor={item.backgroundColor}
        name={item.icon}
        size={80}
      ></Icon>
      <AppText style={styles.label}>{item.label}</AppText>
    </View>
  );
}

export default CategoryPickerItem;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    alignItems: "center",
    width: "33%",
  },
  label: {
    marginTop: 4,
    textAlign: "center",
  },
});
