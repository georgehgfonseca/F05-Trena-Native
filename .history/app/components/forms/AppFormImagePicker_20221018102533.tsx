import React from "react";
import ImageInputList from "../ImageInputList";
import ErrorMessage from "./ErrorMessage";

export default function FormImagePicker(props: any) {
  return (
    <>
      <ImageInputList></ImageInputList>
      <ErrorMessage></ErrorMessage>
    </>
  );
}
