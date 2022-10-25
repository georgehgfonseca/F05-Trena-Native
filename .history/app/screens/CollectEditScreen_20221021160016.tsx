import React, { useState } from "react";
import { Alert, Button, StyleSheet } from "react-native";
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
import listingsApi from "../api/listings";
import UploadScreen from "./UploadScreen";
import GetPhotoScreen from "./GetPhotoScreen";
import routes from "../navigation/routes";

const validationSchema = Yup.object().shape({
  comments: Yup.string().required().min(1).label("Comentários"),
  // price: Yup.number().required().min(1).max(10000).label("Price"),
  status: Yup.object().required().nullable().label("Status"),
  // description: Yup.string().label("Description"),
  images: Yup.array().min(1, "Please select at least one image."),
});

const categories = [
  {
    label: "Furniture",
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
    value: 1,
  },
  { label: "Cars", backgroundColor: "#fd9644", icon: "car", value: 2 },
  { label: "Cameras", backgroundColor: "#fed330", icon: "camera", value: 3 },
  { label: "Games", backgroundColor: "#26de81", icon: "cards", value: 4 },
  {
    label: "Clothing",
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
    value: 5,
  },
  { label: "Sports", backgroundColor: "#45aaf2", icon: "basketball", value: 6 },
  {
    label: "Movies & Music",
    backgroundColor: "#4b7bec",
    icon: "headphones",
    value: 7,
  },
];

export default function CollectEditScreen({ navigation, route }: any) {
  console.log(route.params);

  const location = useLocation();
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (collect: any, formikBag: any) => {
    setProgress(0);
    setUploadVisible(true);
    const result = await listingsApi.addListings(
      { ...collect, location },
      (progress: number) => setProgress(progress)
    );

    if (!result.ok) {
      setUploadVisible(false);
      return alert("Could not save the listing");
    }

    formikBag.resetForm();
  };

  return (
    <Screen style={styles.container}>
      <UploadScreen
        onDone={() => setUploadVisible(false)}
        progress={progress}
        visible={uploadVisible}
      />
      <AppForm
        initialValues={{
          comments: route.params ? route.params.comments : "",
          // price: "",
          status: null,
          // description: "",
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Button
          title="Tirar Foto"
          onPress={() => navigation.navigate(routes.GET_PHOTO)}
        ></Button>
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
          name="status"
          items={categories}
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Status"
          width="50%"
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
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
});
