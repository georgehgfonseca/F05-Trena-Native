import React from "react";
import { useFormikContext, FormikErrors } from "formik";

import AppTextInput from "../AppTextInput";
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
        onChangeText={(text: string) => args.setFieldValue(name, text)}
        value={args.values[name]}
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
