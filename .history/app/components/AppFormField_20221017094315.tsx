import React from "react";
import { useFormikContext } from "formik";

import AppTextInput from "./AppTextInput";
import ErrorMessage from "./ErrorMessage";

interface AppFormFieldProps {
  name: "email" | "password";
}

export default function AppFormField({ name }: any) {
  const args = useFormikContext();
  const name2: string = name.toString();
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
      ></AppTextInput>
      <ErrorMessage
        error={args.errors[name2]}
        visible={args.touched[name2]}
      ></ErrorMessage>
    </>
  );
}
