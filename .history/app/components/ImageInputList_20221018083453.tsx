import React from "react";
import { FlatList, StyleSheet } from "react-native";
import ImageInput from "./ImageInput";

export default function ImageInputList({
  imageUris,
  onAddImage,
  onRemoveImage,
}: any) {
  return (
    <FlatList
      data={imageUris}
      keyExtractor={(imageUri) => imageUri}
      renderItem={({ item }) => <ImageInput imageUri={item}></ImageInput>}
    ></FlatList>
  );
}

const styles = StyleSheet.create({});
