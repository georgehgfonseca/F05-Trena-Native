import React from "react";
import { useFormikContext, FormikErrors } from "formik";

import AppTextInput from "../TextInput";
import ErrorMessage from "./ErrorMessage";

interface AppFormFieldProps {
  name: string;
  width?: number;
  [x: string]: any;
}

export default function AppFormField({
  name,
  width,
  ...otherProps
}: AppFormFieldProps) {
  const args = useFormikContext();
  return (
    <>
      <AppTextInput
        onBlur={() => args.setFieldTouched(name)}
        onChangeText={args.handleChange(name)}
        width={width}
        {...otherProps}
      ></AppTextInput>
      <ErrorMessage
        error={args.errors[name]}
        visible={args.touched[name]}
      ></ErrorMessage>
    </>
  );
}
