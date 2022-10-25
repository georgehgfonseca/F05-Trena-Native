import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import colors from "../config/colors";

export default function ImageInput({ imageUri, onChangeImage }: any) {
  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) onChangeImage(result.uri);
    } catch (error) {
      console.log("Error reasing an image", error);
    }
  };

  return (
    <View style={styles.container}>
      {imageUri ? (
        <Image
          source={{ uri: imageUri }}
          style={{ width: 80, height: 80, borderRadius: 16 }}
        ></Image>
      ) : (
        <TouchableOpacity onPress={selectImage}>
          <MaterialCommunityIcons
            name="camera"
            size={40}
            color={colors.medium}
          ></MaterialCommunityIcons>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.light,
    borderRadius: 16,
    height: 100,
    justifyContent: "center",
    width: 100,
  },
});
