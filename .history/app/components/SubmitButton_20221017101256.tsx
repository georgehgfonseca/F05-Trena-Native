import React from "react";
import { useFormikContext } from "formik";

import AppButton from "./AppButton";

interface SubmitButtonProps {
  title: string;
}
export default function SubmitButton({ title }: SubmitButtonProps) {
  return <AppButton title="Login" onPress={handleSubmit}></AppButton>;
}
