import React, { useState } from "react";
import { Alert, Button, StyleSheet, View } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";
import CategoryPickerItem from "../components/CategoryPickerItem";
import AppFormImagePicker from "../components/forms/AppFormImagePicker";
import useLocation from "../hooks/useLocation";
import inspectionCollectsApi from "../api/inspectionCollects";
import UploadScreen from "./UploadScreen";
import GetPhotoScreen from "./GetPhotoScreen";
import routes from "../navigation/routes";
import StatusPickerItem from "../components/StatusPickerItem";
import useAuth from "../auth/useAuth";

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

const statusOptions = [
  {
    flag: 1,
    name: "Não iniciada",
    description: "Não iniciada",
  },
  {
    flag: 2,
    name: "Não localizada",
    description: "Não localizada",
  },
  {
    flag: 3,
    name: "Paralisado",
    description: "Paralisado",
  },
  {
    flag: 4,
    name: "Em execução",
    description: "Em execução",
  },
  {
    flag: 5,
    name: "Concluída",
    description: "Concluída",
  },
  {
    flag: 6,
    name: "Em funcionamento",
    description: "Em funcionamento",
  },
];

export default function InspectionCollectEditScreen({
  navigation,
  route,
}: any) {
  const { user } = useAuth();
  const inspection = route.params.inspection;

  const location = useLocation();
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (collect: any, formikBag: any) => {
    setProgress(0);
    setUploadVisible(true);
    const result = await inspectionCollectsApi.addInspectionCollect(
      { ...collect, inspection, location, user },
      (progress: number) => setProgress(progress)
    );

    if (!result.ok) {
      setUploadVisible(false);
      return alert("Não foi possível salvar a coleta.");
    }

    formikBag.resetForm();
  };

  const getPublicWorkStatusFromFlag = (id: number) => {
    return statusOptions.find((option) => option.flag === id)?.name;
  };

  return (
    <View style={styles.container}>
      <UploadScreen
        onDone={() => setUploadVisible(false)}
        progress={progress}
        visible={uploadVisible}
      />
      <AppForm
        initialValues={{
          comments: route.params.collect ? route.params.collect.comments : "",
          // price: "",
          status: route.params.collect
            ? getPublicWorkStatusFromFlag(
                route.params.collect.public_work_status
              )
            : null,
          // description: "",
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {/* <Button
          title="Tirar Foto"
          onPress={() => navigation.navigate(routes.GET_PHOTO)}
        ></Button> */}
        <AppFormImagePicker name="images"></AppFormImagePicker>
        <AppFormField
          maxLength={255}
          name="comments"
          multiline
          placeholder="Comentarios"
        ></AppFormField>
        {/* <AppFormField
          maxLength={8}
          name="price"
          keyboardType="numeric"
          placeholder="Price"
          width={120}
        ></AppFormField> */}
        <AppFormPicker
          items={statusOptions}
          name="status"
          numberOfColumns={1}
          PickerItemComponent={StatusPickerItem}
          placeholder="Status"
          width="60%"
        ></AppFormPicker>
        {/* <AppFormField
          maxLength={255}
          multiline
          autoCapitalize="none"
          name="description"
          placeholder="Description"
        ></AppFormField> */}
        <SubmitButton title="Confirmar"></SubmitButton>
      </AppForm>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    flex: 1,
  },
});
