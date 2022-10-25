import { useFormikContext } from "formik";
import React from "react";

import ErrorMessage from "./ErrorMessage";
import ImageInputList from "../ImageInputList";

export default function AppFormImagePicker({ name }: any) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  const handleAdd = (uri: string) => {
    setImageUris([...imageUris, uri]);
  };

  const handleRemove = (uri: string) => {
    setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
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
