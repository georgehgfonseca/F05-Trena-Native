import React, { useEffect } from "react";
import { Alert, Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import colors from "../config/colors";

export default function ImageInput({ imageUri, onChangeImage }: any) {
  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted)
      alert("Você precisa permitir o acesso às mídias do dispositivo");
  };

  const handlePress = () => {
    if (!imageUri) selectImage();
    else
      Alert.alert("Deletar", "Tem certeza que deseja deletar essa imagem?", [
        {
          text: "Não",
        },
        {
          text: "Sim",
          onPress: () => onChangeImage(null),
        },
      ]);
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        quality: 0.5,
      });
      if (!result.cancelled) onChangeImage(result.uri);
    } catch (error) {
      console.log("Erro ao carregar a imagem", error);
    }
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.image}></Image>
        ) : (
          <MaterialCommunityIcons
            name="camera"
            size={40}
            color={colors.medium}
          ></MaterialCommunityIcons>
        )}
      </View>
    </TouchableOpacity>
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
    borderColor: colors.trenaGreen,
    borderWidth: 1,
  },
  image: {
    borderRadius: 16,
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
});
