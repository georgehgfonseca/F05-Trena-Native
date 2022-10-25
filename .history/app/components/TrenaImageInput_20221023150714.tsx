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
import * as Yup from "yup";

import colors from "../config/colors";
import Screen from "./Screen";
import AppButton from "./AppButton";
import { AppForm, AppFormField, AppFormPicker } from "./forms";
import AppFormImagePicker from "./forms/AppFormImagePicker";
import PickerItem from "./PickerItem";
import StatusPickerItem from "./StatusPickerItem";

const typeOptions = [
  {
    flag: 1,
    name: "Outros",
    description: "Outros",
  },
  {
    flag: 2,
    name: "Fachada",
    description: "Não localizada",
  },
  {
    flag: 3,
    name: "Serviços externos",
    description: "Paralisado",
  },
  {
    flag: 4,
    name: "Ambiente/cômodo",
    description: "Em execução",
  },
  {
    flag: 5,
    name: "Danos na construção",
    description: "Concluída",
  },
];

const validationSchema = Yup.object().shape({
  comments: Yup.string().label("Comentário"),
  type: Yup.object()
    .required("Tipo é um campo obrigatório")
    .nullable()
    .label("Tipo"),
  images: Yup.array().min(1, "O envio de mídia é obrigatório"),
});

export default function TrenaImageInput({
  imageUri: imageData,
  onChangeImage,
}: any) {
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
    if (!imageData) setModalVisible(true);
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
        <View style={styles.cameraIconSmallcontainer}>
          {imageData ? (
            <Image source={{ uri: imageData }} style={styles.image}></Image>
          ) : (
            <MaterialCommunityIcons
              name="camera-plus"
              size={40}
              color={colors.medium}
            ></MaterialCommunityIcons>
          )}
        </View>
      </TouchableOpacity>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <AppForm
            initialValues={{
              comments: "",
              type: null,
              imageUri: "",
            }}
            onSubmit={handlePress}
            validationSchema={validationSchema}
          >
            <View style={styles.modalContainer}>
              <TouchableOpacity onPress={selectImage}>
                <View style={styles.cameraIconLargecontainer}>
                  {imageData ? (
                    <Image
                      source={{ uri: imageData }}
                      style={styles.image}
                    ></Image>
                  ) : (
                    <MaterialCommunityIcons
                      name="camera"
                      size={40}
                      color={colors.medium}
                    ></MaterialCommunityIcons>
                  )}
                </View>
              </TouchableOpacity>
              <AppFormField
                maxLength={255}
                name="comments"
                multiline
                placeholder="Comentarios"
              ></AppFormField>
              <AppFormPicker
                items={typeOptions}
                name="type"
                numberOfColumns={1}
                PickerItemComponent={StatusPickerItem}
                placeholder="Tipo"
                width="60%"
              ></AppFormPicker>
              <AppButton
                title="Adicionar"
                onPress={() => setModalVisible(false)}
              ></AppButton>
            </View>
          </AppForm>
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    padding: 12,
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  cameraIconSmallcontainer: {
    alignItems: "center",
    backgroundColor: colors.light,
    borderRadius: 16,
    height: 100,
    justifyContent: "center",
    width: 100,
  },
  cameraIconLargecontainer: {
    alignItems: "center",
    backgroundColor: colors.light,
    borderRadius: 24,
    height: 360,
    justifyContent: "center",
    width: 360,
  },
  image: {
    borderRadius: 16,
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
});
