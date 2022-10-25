import React from "react";
import AppTextInput from "./AppTextInput";
import ErrorMessage from "./ErrorMessage";

export default function AppFormField(props) {
  return (
    <>
      <AppTextInput
        autoCapitalize="none"
        autoCorrect
        icon="email"
        keyboardType="email-address"
        onBlur={() => args.setFieldTouched("email")}
        onChangeText={args.handleChange("email")}
        //   onChangeText={(text: string) => setEmail(text)}
        placeholder="Email"
        textContetType="emailAddress" //Autofill from keychain (iOS only)
      ></AppTextInput>
      <ErrorMessage
        error={args.errors.email}
        visible={args.touched.email}
      ></ErrorMessage>
    </>
  );
}
