import React, { useEffect, useState } from "react";
import {
  Alert,
  Button,
  FlatList,
  Image,
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import colors from "../config/colors";
import Screen from "./Screen";
import AppButton from "./AppButton";

export default function TrenaImageInput({ imageUri, onChangeImage }: any) {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted)
      alert("Você precisa permitir o acesso às mídias do dispositivo");
  };

  const handlePress = () => {
    if (!imageUri) setModalVisible(true);
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
    <>
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
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <TouchableOpacity onPress={handlePress}>
            <View style={styles.container}>
              {imageUri ? (
                <Image source={{ uri: imageUri }} style={styles.image}></Image>
              ) : (
                <MaterialCommunityIcons
                  name="camera"
                  size={240}
                  color={colors.medium}
                ></MaterialCommunityIcons>
              )}
            </View>
          </TouchableOpacity>
          <AppButton
            title="Adicionar"
            onPress={() => setModalVisible(false)}
          ></AppButton>
        </Screen>
      </Modal>
    </>
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
