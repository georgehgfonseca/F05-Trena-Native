import React, { useRef } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import ImageInput from "./ImageInput";
import TrenaImageInput from "./TrenaImageInput";

export default function ImageInputList({
  imageUris = [],
  onAddImage,
  onRemoveImage,
}: any) {
  const scrollView = useRef<any>();

  return (
    <View>
      <ScrollView
        ref={scrollView}
        horizontal
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
      >
        <View style={styles.container}>
          {imageUris.map((uri: string) => {
            return (
              <View style={styles.image} key={uri}>
                <TrenaImageInput
                  imageUri={uri}
                  onChangeImage={() => onRemoveImage(uri)}
                ></TrenaImageInput>
              </View>
            );
          })}
          <TrenaImageInput
            onChangeImage={(uri: string) => onAddImage(uri)}
          ></TrenaImageInput>
        </View>
      </ScrollView>
    </View>
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
