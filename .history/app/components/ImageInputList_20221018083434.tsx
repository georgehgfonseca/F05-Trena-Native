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
      renderItem={() => <ImageInput></ImageInput>}
    ></FlatList>
  );
}

const styles = StyleSheet.create({});
