import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ImageInput from "./ImageInput";

export default function ImageInputList({
  imageUris,
  onAddImage,
  onRemoveImage,
}: any) {
  return (
    <View style={styles.container}>
      <FlatList
        data={imageUris}
        keyExtractor={(imageUri) => imageUri}
        renderItem={({ item }) => <ImageInput imageUri={item}></ImageInput>}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
