import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ImageInput from "./ImageInput";

export default function ImageInputList({
  imageUris = [],
  onAddImage,
  onRemoveImage,
}: any) {
  return (
    <View style={styles.container}>
      {imageUris.map((uri: string) => {
        <ImageInput
          imageUri={uri}
          key={uri}
          onChangeImage={() => onRemoveImage(uri)}
        ></ImageInput>;
      })}
      <ImageInput onChangeImage={(uri: string) => onAddImage(uri)}></ImageInput>
      {/* <FlatList
        data={imageUris}
        keyExtractor={(imageUri) => imageUri}
        renderItem={({ item }) => <ImageInput imageUri={item}></ImageInput>}
      ></FlatList> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
