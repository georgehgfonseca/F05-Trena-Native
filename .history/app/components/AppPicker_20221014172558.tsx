import React, { useState } from "react";
import { Modal, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput, TouchableWithoutFeedback } from "react-native";

import defaultStyles from "../config/styles";
import AppText from "./AppText";

export default function AppPicker({ icon, placeholder, ...otherProps }: any) {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  return (
    <React.Fragment>
      <TouchableWithoutFeedback onPress={() => console.log("fdsfds")}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.colors.medium}
              style={styles.icon}
            ></MaterialCommunityIcons>
          )}
          <AppText style={styles.text}>{placeholder}</AppText>
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={defaultStyles.colors.medium}
          ></MaterialCommunityIcons>
        </View>
      </TouchableWithoutFeedback>
      <Modal></Modal>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
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
  text: {
    flex: 1,
  },
});
