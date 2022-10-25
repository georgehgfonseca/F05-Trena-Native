import React from "react";

import ImageInputList from "../ImageInputList";
import ErrorMessage from "./ErrorMessage";

export default function AppFormImagePicker(props: any) {
  return (
    <>
      <ImageInputList imageUris={}></ImageInputList>
      <ErrorMessage></ErrorMessage>
    </>
  );
}
