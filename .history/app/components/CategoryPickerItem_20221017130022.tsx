import React from "react";
import { StyleSheet, View } from "react-native";
import Icon from "./Icon";

// Picker item
function CategoryPickerItem({ item, onPress }: any) {
  return (
    <View style={styles.container}>
      <Icon backgroundColor={} name={item.label}></Icon>
    </View>
  );
}

export default CategoryPickerItem;

const styles = StyleSheet.create({
  container: {},
});
