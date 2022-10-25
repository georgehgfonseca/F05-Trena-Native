import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
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
import useApi from "../hooks/useApi";
import listingsApi from "../api/listings";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.object().required().nullable().label("Category"),
  description: Yup.string().label("Description"),
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

export default function ListingEditScreen() {
  const location = useLocation();
  // const {
  //   data: listings,
  //   error,
  //   loading,
  //   request: postListing,
  // } = useApi(listingsApi.postListings);

  // const uploadListing = (listingsData: any) => {
  //   const data = new FormData();
  //   data.append("title", listingsData.title);
  //   data.append("price", listingsData.price);
  //   data.append("categoryId", listingsData.category);
  //   data.append("description", listingsData.description);
  //   data.append("location", JSON.stringify(location));
  //   listingsData.images.forEach((image: any, id: any) => {
  //     data.append(
  //       "images",
  //       JSON.stringify({
  //         name: id.toString(),
  //         type: "image/jpeg",
  //         uri: image,
  //       })
  //     );
  //   });
  //   console.log(data);

  //   postListing(data);
  // };

  const handleSubmit = async (listing: any) => {
    const result = await listingsApi.addListings({ ...listing, location });
    if (!result.ok) return alert("Could not save the listing");
    alert("Success");
  };

  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          category: null,
          description: "",
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <AppFormImagePicker name="images"></AppFormImagePicker>
        <AppFormField
          maxLength={255}
          name="title"
          placeholder="Title"
        ></AppFormField>
        <AppFormField
          maxLength={8}
          name="price"
          keyboardType="numeric"
          placeholder="Price"
          width={120}
        ></AppFormField>
        <AppFormPicker
          name="category"
          items={categories}
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="50%"
        ></AppFormPicker>
        <AppFormField
          maxLength={255}
          multiline
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
