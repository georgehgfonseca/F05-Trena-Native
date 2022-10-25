import React from "react";
import { useFormikContext, FormikErrors } from "formik";

import AppTextInput from "./AppTextInput";
import ErrorMessage from "./ErrorMessage";

interface AppFormFieldProps {
  name: string;
}

export default function AppFormField({ name }: AppFormFieldProps) {
  const args = useFormikContext();
  return (
    <>
      <AppTextInput
        // autoCapitalize="none"
        // autoCorrect
        // icon="email"
        // keyboardType="email-address"
        onBlur={() => args.setFieldTouched(name)}
        onChangeText={args.handleChange(name)}
        //   onChangeText={(text: string) => setEmail(text)}
        // placeholder="Email"
        // textContetType="emailAddress" //Autofill from keychain (iOS only)
      <ErrorMessage
        error={args.errors[name]}
        visible={args.touched[name]}
      ></ErrorMessage>
    </>
  );
}
