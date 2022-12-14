import React from "react";
import { Alert, Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import colors from "../config/colors";

export default function ImageInput({ imageUri, onChangeImage }: any) {
  const handlePress = () => {
    if (!imageUri) selectImage();
    else
      Alert.alert("Delete", "Are you sure you want to delete this image?", [
        {
          text: "Yes",
          onPress: () => onChangeImage(null),
        },
        {
          text: "No",
        },
      ]);
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.cancelled) onChangeImage(result.uri);
    } catch (error) {
      console.log("Error reading an image", error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.image}></Image>
        ) : (
          <MaterialCommunityIcons
            name="camera"
            size={40}
            color={colors.medium}
          ></MaterialCommunityIcons>
        )}
      </TouchableOpacity>
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
  image: {
    borderRadius: 16,
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
});
