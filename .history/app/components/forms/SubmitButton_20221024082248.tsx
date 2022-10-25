import React from "react";
import { useFormikContext } from "formik";

import AppButton from "../AppButton";

interface SubmitButtonProps {
  title: string;
}
export default function SubmitButton({
  title,
  ...otherProps
}: SubmitButtonProps) {
  const { handleSubmit } = useFormikContext();
  return (
    <AppButton {...otherProps} title={title} onPress={handleSubmit}></AppButton>
  );
}
