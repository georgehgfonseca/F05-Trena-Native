import { useFormikContext } from "formik";
import React from "react";

import ErrorMessage from "./ErrorMessage";
import ImageInputList from "../ImageInputList";

export default function TrenaFormMediaPicker({ name }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const imageUris = values[name];

  const handleAdd = (mediaData) => {
    setFieldValue(name, [...imageUris, mediaData]);
  };

  const handleRemove = (mediaData) => {
    setFieldValue(
      name,
      imageUris.filter((imageUri) => imageUri !== mediaData)
    );
  };

  return (
    <>
      <TrenaImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      ></TrenaImageInputList>
      <ErrorMessage error={errors[name]} visible={touched[name]}></ErrorMessage>
    </>
  );
}
