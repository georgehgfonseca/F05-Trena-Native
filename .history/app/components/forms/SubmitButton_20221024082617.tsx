import React from "react";
import { useFormikContext } from "formik";

import AppButton from "../AppButton";

interface SubmitButtonProps {
  title: string;
}
export default function SubmitButton({ title, style }: any) {
  const { handleSubmit } = useFormikContext();
  return (
    <AppButton style={style} title={title} onPress={handleSubmit}></AppButton>
  );
}
