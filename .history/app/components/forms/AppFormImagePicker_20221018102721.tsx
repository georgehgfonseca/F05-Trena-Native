import { useFormikContext } from "formik";
import React from "react";

import ErrorMessage from "./ErrorMessage";
import ImageInputList from "../ImageInputList";

export default function AppFormImagePicker({ name }: any) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  return (
    <>
      <ImageInputList imageUris={values[name]}></ImageInputList>
      <ErrorMessage></ErrorMessage>
    </>
  );
}
