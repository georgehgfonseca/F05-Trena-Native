import React from "react";
import { useFormikContext, FormikErrors } from "formik";

import AppTextInput from "./AppTextInput";
import ErrorMessage from "./ErrorMessage";

interface AppFormFieldProps {
  name: string;
  [x: string]: any;
}

export default function AppFormField({
  name,
  ...otherProps
}: AppFormFieldProps) {
  const args = useFormikContext();
  return (
    <>
      <AppTextInput
        onBlur={() => args.setFieldTouched(name)}
        onChangeText={args.handleChange(name)}
        {...otherProps}
      ></AppTextInput>
      <ErrorMessage
        error={args.errors[name]}
        visible={args.touched[name]}
      ></ErrorMessage>
    </>
  );
}
