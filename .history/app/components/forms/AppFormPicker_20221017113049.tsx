import React from "react";
import { useFormikContext, FormikErrors } from "formik";

import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";
import AppPicker from "../AppPicker";

interface AppFormFieldProps {
  name: string;
  [x: string]: any;
}

export default function AppFormPicker({
  name,
  icon,
  items,
  onSelectItem,
  selectedItem,
  ...otherProps
}: any) {
  const args = useFormikContext();
  return (
    <>
      <AppPicker
        icon={icon}
        items={items}
        onSelectItem={onSelectItem}
        selectedItem={selectedItem}
        placeholder={name}

        // onBlur={() => args.setFieldTouched(name)}
        // onChangeText={args.handleChange(name)}
        // {...otherProps}
      ></AppPicker>
      <ErrorMessage
        error={args.errors[name]}
        visible={args.touched[name]}
      ></ErrorMessage>
    </>
  );
}
