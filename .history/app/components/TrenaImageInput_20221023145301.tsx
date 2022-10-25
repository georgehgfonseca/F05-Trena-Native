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
import { AppForm, AppFormPicker } from "./forms";
import AppFormImagePicker from "./forms/AppFormImagePicker";
import PickerItem from "./PickerItem";

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
  comments: Yup.string()
    .required("Comentários é um campo obrigatório")
    .min(1)
    .label("Comentários gerais"),
  // price: Yup.number().required().min(1).max(10000).label("Price"),
  status: Yup.object()
    .required("Status é um campo obrigatório")
    .nullable()
    .label("Status"),
  // description: Yup.string().label("Description"),
  images: Yup.array().min(1, "Favor enviar ao menos uma imagem/vídeo."),
});

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
        <View style={styles.cameraIconSmallcontainer}>
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
          <AppForm
            initialValues={{
              comments: "",
              type: null,
              imageUri: "",
            }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            <View style={styles.modalContainer}>
              <TouchableOpacity onPress={handlePress}>
                <View style={styles.cameraIconLargecontainer}>
                  {imageUri ? (
                    <Image
                      source={{ uri: imageUri }}
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
              <PickerItem
                items={typeOptions}
                name="type"
                numberOfColumns={1}
                PickerItemComponent={StatusPickerItem}
                placeholder="Status"
                width="60%"
              />
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
    justifyContent: "center",
    alignItems: "center",
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
    borderRadius: 16,
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
