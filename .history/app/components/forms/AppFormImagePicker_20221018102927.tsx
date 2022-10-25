import { useFormikContext } from "formik";
import React from "react";

import ErrorMessage from "./ErrorMessage";
import ImageInputList from "../ImageInputList";

export default function AppFormImagePicker({ name }: any) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  const handleAdd = (uri: string) => {
    setFieldValue(name, [...values[name], uri]);
  };

  const handleRemove = (uri: string) => {
    setFieldValue(
      name,
      values[name].filter((imageUri: string) => imageUri !== uri)
    );
  };

  return (
    <>
      <ImageInputList
        imageUris={values[name]}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      ></ImageInputList>
      <ErrorMessage></ErrorMessage>
    </>
  );
}
