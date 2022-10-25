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
        <View style={styles.image} key={uri}>
          <ImageInput
            imageUri={uri}
            onChangeImage={() => onRemoveImage(uri)}
          ></ImageInput>
          ;
        </View>;
      })}
      <ImageInput onChangeImage={(uri: string) => onAddImage(uri)}></ImageInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    marginRight: 12,
  },
});
