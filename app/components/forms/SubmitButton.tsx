import React from "react";
import { useFormikContext } from "formik";

import AppButton from "../AppButton";

interface SubmitButtonProps {
  title: string;
}
export default function SubmitButton({ title, color }: any) {
  const { handleSubmit } = useFormikContext();
  return (
    <AppButton color={color} title={title} onPress={handleSubmit}></AppButton>
  );
}
