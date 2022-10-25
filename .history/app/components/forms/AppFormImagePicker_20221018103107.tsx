import { useFormikContext } from "formik";
import React from "react";

import ErrorMessage from "./ErrorMessage";
import ImageInputList from "../ImageInputList";

export default function AppFormImagePicker({ name }: any) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const imageUris = values[name];

  const handleAdd = (uri: string) => {
    setFieldValue(name, [...imageUris, uri]);
  };

  const handleRemove = (uri: string) => {
    setFieldValue(
      name,
      imageUris.filter((imageUri: string) => imageUri !== uri)
    );
  };

  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      ></ImageInputList>
      <ErrorMessage></ErrorMessage>
    </>
  );
}
