import React from "react";
import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";
import AppPicker from "../AppPicker";

// interface AppFormPickerProps {
//   name: string;
//   [x: string]: any;
// }

export default function AppFormPicker({
  icon,
  items,
  name,
  onSelectItem,
  placeholder,
  selectedItem,
}: any) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={onSelectItem}
        selectedItem={selectedItem}
        placeholder={placeholder}
        // onBlur={() => args.setFieldTouched(name)}
        // onChangeText={args.handleChange(name)}
        // {...otherProps}
      ></AppPicker>
      <ErrorMessage error={errors[name]} visible={touched[name]}></ErrorMessage>
    </>
  );
}
