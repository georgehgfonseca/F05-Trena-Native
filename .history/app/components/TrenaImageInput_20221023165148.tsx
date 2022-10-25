import React, { useEffect, useState } from "react";
import {
  Alert,
  Button,
  FlatList,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import * as Yup from "yup";

import colors from "../config/colors";
import Screen from "./Screen";
import AppButton from "./AppButton";
import { AppForm, AppFormField, AppFormPicker, SubmitButton } from "./forms";
import AppFormImagePicker from "./forms/AppFormImagePicker";
import PickerItem from "./PickerItem";
import StatusPickerItem from "./StatusPickerItem";
import { createIconSetFromFontello } from "react-native-vector-icons";
import { useFormikContext } from "formik";
import AppText from "./AppText";
import AppTextInput from "./AppTextInput";
import AppPicker from "./AppPicker";

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

export default function TrenaImageInput({ media, onChangeMedia }: any) {
  const [currentImageUri, setCurrentImageUri] = useState(
    media ? media.uri : undefined
  );
  const [comments, setComments] = useState<string>(media ? media.comments : "");
  const [type, setType] = useState<string>(media ? media.type : "");

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
    if (!media) setModalVisible(true);
    else
      Alert.alert("Deletar", "Tem certeza que deseja deletar essa imagem?", [
        {
          text: "Não",
        },
        {
          text: "Sim",
          onPress: () => onChangeMedia(null),
        },
      ]);
  };

  const handleSubmit = () => {
    currentImageUri &&
      onChangeMedia({ uri: currentImageUri, comments: comments, type: type });
    setModalVisible(false);
    setCurrentImageUri("");
    setComments("");
    setType("");
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        quality: 0.5,
      });
      if (!result.cancelled) {
        setCurrentImageUri(result.uri);
      }
    } catch (error) {
      console.log("Erro ao carregar a imagem", error);
    }
  };

  return (
    <>
      <TouchableOpacity onPress={handlePress}>
        <View style={styles.cameraIconSmallContainer}>
          {media ? (
            <Image source={{ uri: media.uri }} style={styles.image}></Image>
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
        {/* <Screen> */}
        <View style={styles.modalContainer}>
          {/* <View style={styles.closeButton}>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="close"
                size={40}
                color={colors.medium}
              ></MaterialCommunityIcons>
            </TouchableOpacity>
          </View> */}
          <TouchableOpacity onPress={selectImage}>
            <View style={styles.cameraIconLargeContainer}>
              {currentImageUri ? (
                <Image
                  source={{ uri: currentImageUri }}
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
          <AppTextInput
            maxLength={255}
            name="comments"
            multiline
            value={comments}
            onChangeText={(text: string) => setComments(text)}
            placeholder="Comentários"
          />
          <AppPicker
            items={typeOptions}
            numberOfColumns={1}
            onSelectItem={(item: any) => {
              console.log(item);
              setType(item);
            }}
            PickerItemComponent={StatusPickerItem}
            placeholder="Tipo"
            width="60%"
            selectedItem={type}
          ></AppPicker>
          <AppButton title="Adicionar" onPress={handleSubmit} />
        </View>
        {/* </Screen> */}
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
  cameraIconSmallContainer: {
    alignItems: "center",
    backgroundColor: colors.light,
    borderRadius: 16,
    height: 100,
    justifyContent: "center",
    width: 100,
  },
  cameraIconLargeContainer: {
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: colors.light,
    borderRadius: 24,
    height: 160,
    // flex: 1,
    justifyContent: "center",
    width: 160,
  },
  image: {
    borderRadius: 16,
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  closeButton: {
    alignSelf: "flex-end",
  },
});
