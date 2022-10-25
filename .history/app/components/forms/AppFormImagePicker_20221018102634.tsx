import { useFormikContext } from "formik";
import React from "react";

import ImageInputList from "../ImageInputList";
import ErrorMessage from "./ErrorMessage";

export default function AppFormImagePicker(props: any) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  return (
    <>
      <ImageInputList imageUris={}></ImageInputList>
      <ErrorMessage></ErrorMessage>
    </>
  );
}
