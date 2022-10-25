import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export default function ListItemDeleteAction() {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="trash-can"
          size={32}
          color={colors.white}
        ></MaterialCommunityIcons>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 64,
    justifyContent: "center",
    alignItems: "center",
  },
});
