import React, { useRef } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import ImageInput from "./ImageInput";

export default function ImageInputList({
  imageUris = [],
  onAddImage,
  onRemoveImage,
}: any) {
  console.log(imageUris);

  const scrollView = useRef();
  scrollView.current.scrollToEnd();

  return (
    <ScrollView horizontal ref={scrollView}>
      <View style={styles.container}>
        {imageUris.map((uri: string) => {
          return (
            <View style={styles.image} key={uri}>
              <ImageInput
                imageUri={uri}
                onChangeImage={() => onRemoveImage(uri)}
              ></ImageInput>
            </View>
          );
        })}
        <ImageInput
          onChangeImage={(uri: string) => onAddImage(uri)}
        ></ImageInput>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    marginRight: 8,
  },
});
