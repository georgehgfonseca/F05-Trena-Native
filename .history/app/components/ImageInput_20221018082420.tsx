import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import Icon from "./Icon";

export default function ImageInput({ imageUri, onChangeImage }: any) {
  return (
    <View style={styles.container}>
      {imageUri ? (
        <Image
          source={{ uri: imageUri }}
          style={{ width: 200, height: 200 }}
        ></Image>
      ) : (
        <MaterialCommunityIcons
          name="camera"
          size={40}
          color={colors.medium}
        ></MaterialCommunityIcons>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    backgroundColor: colors.light,
  },
});
