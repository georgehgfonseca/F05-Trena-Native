import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";
import { Category } from "../../App";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.object().required().nullable().label("Category"),
  description: Yup.string().label("Description"),
});

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

export default function ListingEditScreen() {
  const [category, setCategory] = useState<Category>();
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: null,
          category: "",
          description: "",
        }}
        onSubmit={(values: any) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          name="title"
          placeholder="Title"
        ></AppFormField>
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          name="price"
          keyboardType="decimal-pad"
          placeholder="Price"
        ></AppFormField>
        <AppFormPicker
          name="category"
          items={categories}
          placeholder="Category"
        ></AppFormPicker>
        <AppFormField
          autoCapitalize="none"
          name="description"
          placeholder="Description"
        ></AppFormField>
        <SubmitButton title="Post"></SubmitButton>
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
});
