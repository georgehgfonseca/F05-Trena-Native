import React from "react";

import AppTextInput from "./AppTextInput";
import ErrorMessage from "./ErrorMessage";

export default function AppFormField({ name }: any) {
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
        error={errors[name]}
        visible={touched[email]}
      ></ErrorMessage>
    </>
  );
}
