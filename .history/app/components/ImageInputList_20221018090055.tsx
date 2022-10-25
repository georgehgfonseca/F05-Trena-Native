import React from "react";
import { FlatList, StyleSheet } from "react-native";
import ImageInput from "./ImageInput";

export default function ImageInputList({
  imageUris,
  onAddImage,
  onRemoveImage,
}: any) {
  return (
    <View style={styles.container}></View>
    <FlatList
      data={imageUris}
      keyExtractor={(imageUri) => imageUri}
      renderItem={({ item }) => <ImageInput imageUri={item}></ImageInput>}
    ></FlatList>
  );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row"
    }
});
